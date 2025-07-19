using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using MySql.Data.MySqlClient;
using System.Text.Json;

namespace ClassroomFinanceTracker;

public class get_violations
{
   
    
    public static void MapViolationsEndpoints(WebApplication app)
    {
     
        app.MapGet("/get-violations", async (HttpContext context) =>
        {
            context.Response.ContentType = "application/json";
            var violations = new List<object>();

            try
            {
                using var conn = DbConnect.GetConnection();
                await conn.OpenAsync();

                using var cmd = new MySqlCommand("SELECT violation_id, name FROM violations ORDER BY name ASC", conn);
                using var reader = await cmd.ExecuteReaderAsync();

                while (await reader.ReadAsync())
                {
                    violations.Add(new
                    {
                        violation_id = reader["violation_id"],
                        vname = reader["name"]
                    });
                }

                await context.Response.WriteAsync(JsonSerializer.Serialize(violations));
            }
            catch (Exception ex)
            {
                await context.Response.WriteAsync(JsonSerializer.Serialize(new { error = ex.Message }));
            }
        });
    }
}
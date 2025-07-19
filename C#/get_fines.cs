using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using MySql.Data.MySqlClient;
using System.Text.Json;

namespace ClassroomFinanceTracker;

public class get_fines
{

    public static void MapFinesEndpoints(WebApplication app)
    {
      
        app.MapGet("/get-fines", async (HttpContext context) =>
        {
            context.Response.ContentType = "application/json";
            var fines = new List<object>();

            try
            {
                using var conn = DbConnect.GetConnection();
                await conn.OpenAsync();

                var sql = @"SELECT f.*, 
                                   CONCAT(s.first_name, ' ', s.last_name) AS student_name, 
                                   v.name AS vname
                            FROM fines f 
                            JOIN students s ON f.student_id = s.student_id 
                            JOIN violations v ON f.violation_id = v.violation_id 
                            ORDER BY f.date_issued DESC";

                using var cmd = new MySqlCommand(sql, conn);
                using var reader = await cmd.ExecuteReaderAsync();

                while (await reader.ReadAsync())
                {
                    fines.Add(new
                    {
                        fine_id = reader["fine_id"],
                        student_id = reader["student_id"],
                        violation_id = reader["violation_id"],
                        amount = reader["amount"],
                        due_date = reader["due_date"],
                        status = reader["status"],
                        notes = reader["notes"],
                        date_issued = reader["date_issued"],
                        created_at = reader["created_at"],
                        student_name = reader["student_name"],
                        vname = reader["vname"]
                    });
                }

                await context.Response.WriteAsync(JsonSerializer.Serialize(fines));
            }
            catch (Exception ex)
            {
                await context.Response.WriteAsync(JsonSerializer.Serialize(new { error = ex.Message }));
            }
        });
    }
}


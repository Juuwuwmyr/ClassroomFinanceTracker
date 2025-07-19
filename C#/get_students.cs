using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using MySql.Data.MySqlClient;
using System.Text.Json;

namespace ClassroomFinanceTracker;

public class get_students
{
   
   
    public static void MapStudentsEndpoints(WebApplication app)
    {
       
        app.MapGet("/get-students", async (HttpContext context) =>
        {
            context.Response.ContentType = "application/json";
            var students = new List<object>();

            try
            {
                using var conn = DbConnect.GetConnection();
                await conn.OpenAsync();

                using var cmd = new MySqlCommand("SELECT student_id, first_name, last_name, grade_level, section, avatar_url FROM students ORDER BY last_name ASC", conn);
                using var reader = await cmd.ExecuteReaderAsync();

                while (await reader.ReadAsync())
                {
                    students.Add(new
                    {
                        student_id = reader["student_id"],
                        first_name = reader["first_name"],
                        last_name = reader["last_name"],
                        grade_level = reader["grade_level"],
                        section = reader["section"],
                        avatar_url = reader["avatar_url"]
                    });
                }

                await context.Response.WriteAsync(JsonSerializer.Serialize(students));
            }
            catch (Exception ex)
            {
                await context.Response.WriteAsync(JsonSerializer.Serialize(new { error = ex.Message }));
            }
        });
    }
}   


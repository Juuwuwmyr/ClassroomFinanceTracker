using ClassroomFinanceTracker;

var builder = WebApplication.CreateBuilder(args);


// Add before app.Run() in Program.cs
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});
var app = builder.Build();

app.UseCors("AllowAll");

// Map endpoints from other files
get_fines.MapFinesEndpoints(app);
get_students.MapStudentsEndpoints(app);
get_violations.MapViolationsEndpoints(app);


app.Run();

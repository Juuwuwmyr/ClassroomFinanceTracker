using MySql.Data.MySqlClient;

public static class DbConnect
{
    public static MySqlConnection GetConnection()
    {
        // Update with your actual connection details
        var connectionString = "Server=localhost;Database=classroom_finance_tracker;Uid=root;Pwd=;";
        return new MySqlConnection(connectionString);
    }
}
# Classroom Finance Tracker

A **comprehensive classroom finance management system** built with **C# .NET 9.0 backend** and **HTML/CSS/JavaScript frontend** that helps track **fines, payments, transactions, and reports** for classroom officers transparently.

---

## 🚀 Features

### Core Functionality
- **Student Management**: Add, edit, and manage student records
- **Fine Management**: Issue and track student fines with due dates and statuses
- **Payment Processing**: Record payments for fines, class funds, and other contributions
- **Transaction History**: View detailed transaction records for transparency
- **Violation Tracking**: Monitor student violations and associated fines
- **Financial Reports**: Generate comprehensive reports for financial monitoring
- **Settings Management**: Configure system preferences and parameters

### Technical Stack
- **Backend**: C# .NET 9.0 Web API
- **Database**: MySQL 8.3.0
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Charts**: Chart.js for data visualization
- **Development**: WampServer for local development

---

## 📁 Project Structure

```
ClassroomFinanceTracker/
├── C#/                          # C# .NET 9.0 Backend
│   ├── Program.cs               # Main application entry point
│   ├── db_connect.cs            # Database connection handler
│   ├── get_fines.cs             # Fines API endpoints
│   ├── get_students.cs          # Students API endpoints
│   ├── get_violations.cs        # Violations API endpoints
│   └── C#.csproj               # Project configuration
├── views/                       # Frontend HTML pages
│   ├── students.html            # Student management interface
│   ├── fines.html              # Fine management interface
│   ├── payments.html           # Payment processing interface
│   ├── transactions.html       # Transaction history interface
│   ├── reports.html            # Financial reports interface
│   └── settings.html           # System settings interface
├── js/                         # JavaScript files
│   ├── app.js                  # Main application logic
│   └── chart.js                # Chart configurations
├── css/                        # Stylesheets
│   └── style.css               # Main stylesheet
├── images/                     # Static images
├── index.html                  # Main dashboard
└── README.md                   # Project documentation
```

---

## 🛠️ Setup Instructions

### Prerequisites
- **WampServer** (Windows Apache MySQL PHP)
- **MySQL 8.3.0** (included with WampServer)
- **.NET 9.0 SDK**

### Installation Steps

1. **Install WampServer**
   - Download from [WampServer Official Site](https://www.wampserver.com/en/)
   - Install and ensure it runs on port 80

2. **Clone/Download the Project**
   ```bash
   git clone <repository-url>
   cd ClassroomFinanceTracker
   ```

3. **Database Setup**
   - Start WampServer
   - Open phpMyAdmin: http://localhost/phpmyadmin
   - Create a new database: `classroom_finance_tracker`
   - Import the provided SQL file (if available)

4. **Backend Setup**
   ```bash
   cd C#
   dotnet restore
   dotnet build
   dotnet run
   ```
   The C# API will run on `http://localhost:5000`

5. **Frontend Setup**
   - Copy the entire project folder to: `C:\wamp64\www\classroom_finance_tracker`
   - Access the application at: `http://localhost/classroom_finance_tracker`

---

## 🔧 Configuration

### Database Connection
Update the database connection string in `C#/db_connect.cs`:
```csharp
// Default connection string for local development
"Server=localhost;Database=classroom_finance_tracker;Uid=root;Pwd=;"
```

### CORS Configuration
The backend is configured to allow all origins for development. For production, update the CORS policy in `Program.cs`.

---

## 📊 API Endpoints

### Students
- `GET /api/students` - Get all students
- `POST /api/students` - Add new student
- `PUT /api/students/{id}` - Update student
- `DELETE /api/students/{id}` - Delete student

### Fines
- `GET /api/fines` - Get all fines
- `POST /api/fines` - Add new fine
- `PUT /api/fines/{id}` - Update fine
- `DELETE /api/fines/{id}` - Delete fine

### Violations
- `GET /api/violations` - Get all violations
- `POST /api/violations` - Add new violation
- `PUT /api/violations/{id}` - Update violation
- `DELETE /api/violations/{id}` - Delete violation

---

## 🎯 Usage

1. **Dashboard**: Start at the main dashboard to get an overview
2. **Students**: Manage student records and information
3. **Fines**: Issue and track fines with due dates
4. **Payments**: Process payments and update fine statuses
5. **Transactions**: View complete transaction history
6. **Reports**: Generate financial reports and analytics
7. **Settings**: Configure system parameters

---

## 🔄 Recent Updates

- ✅ **Complete C# .NET 9.0 Backend** implementation
- ✅ **RESTful API endpoints** for all CRUD operations
- ✅ **Enhanced Fines UI** with modal functionality
- ✅ **Improved App.js** with better error handling
- ✅ **Organized project structure** with proper separation
- ✅ **Added .gitignore** for better version control
- ✅ **MySQL integration** with proper connection handling
- ✅ **CORS configuration** for cross-origin requests

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🆘 Support

For issues and questions:
- Check the documentation
- Review the API endpoints
- Ensure proper database configuration
- Verify WampServer is running correctly

---

**Built with ❤️ for transparent classroom finance management**





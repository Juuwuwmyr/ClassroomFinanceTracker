# Classroom Finance Tracker

A **classroom finance management system** that helps track **fines, payments, transactions, and reports** for officers transparently.

---

## Updates
- Added the **Fines UI**
- Modified `App.js`
- Fixed **Modal Fines Page**
- Added `.gitignore` and organized directories

---

## Explanation

This system allows classroom officers to:
► Issue and track **student fines** with due dates and statuses.  
► Record **payments** for fines, class funds, and other contributions.  
► View **transaction records** for transparency.  
► Generate **reports** for financial monitoring.

It uses **WampServer (Windows Apache MySQL PHP)** to run locally, with your database and project files organized inside your `wamp64/www` directory for ease of testing and development.

---

## Setup Steps

1. **Install WampServer**  
   Download and install WampServer from [here](https://www.wampserver.com/en/).

2. **Import the SQL file into WampServer**  
   This will create the `classroom_finance_tracker` database in your local MySQL.

3. **Copy your database files**  
   From: C:\wamp64\bin\mysql\mysql8.3.0\data\classroom_finance_tracker
   To:   C:\wamp64\www\copy_here

4. **Copy the ClassroomFinanceTracker project**  
To:      C:\wamp64\www\classroom_finance_tracker

5. **Run WampServer** and navigate to:
http://localhost/classroom_finance_tracker





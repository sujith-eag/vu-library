# CREATE TABLE FOR GIVEN ENTITIES:


## Table Creation

Department
- _DepartmentID_ (PK), DepartmentName, Location

```sql
-- Department Table
CREATE TABLE Department (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100) NOT NULL,
    Location VARCHAR(100)
);
```

Employee
- _EmployeeID_ (PK), Name, Email, Phone, HireDate, JobTitle
- _DepartmentID_ (FK → Department), _ManagerID_ (FK → Employee)
```sql
-- Employee Table
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(20),
    HireDate DATE,
    JobTitle VARCHAR(100),
    DepartmentID INT,
    ManagerID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID),
    FOREIGN KEY (ManagerID) REFERENCES Employee(EmployeeID)
);
```

Project
- _ProjectID_ (PK), ProjectName, StartDate, EndDate, Budget
- _DepartmentID_ (FK → Department)

```sql
-- Project Table
CREATE TABLE Project (
    ProjectID INT PRIMARY KEY,
    ProjectName VARCHAR(100) NOT NULL,
    StartDate DATE,
    EndDate DATE,
    Budget DECIMAL(15, 2),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);
```

Assignment _(Employee–Project relationship)_
- _AssignmentID_ (PK), _EmployeeID_ (FK → Employee), _ProjectID_ (FK → Project)
- Role, HoursWorked

```sql
-- Assignment Table
CREATE TABLE Assignment (
    AssignmentID INT PRIMARY KEY,
    EmployeeID INT,
    ProjectID INT,
    Role VARCHAR(100),
    HoursWorked DECIMAL(10, 2),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);
```

Salary
- _SalaryID_ (PK), _EmployeeID_ (FK → Employee)
- Amount, EffectiveDate, PayGrade

```sql
-- Salary Table
CREATE TABLE Salary (
    SalaryID INT PRIMARY KEY,
    EmployeeID INT,
    Amount DECIMAL(15, 2),
    EffectiveDate DATE,
    PayGrade VARCHAR(20),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);
```

Leave
- _LeaveID_ (PK), _EmployeeID_ (FK → Employee)
- StartDate, EndDate, LeaveType (e.g., Sick, Casual, Maternity), Status (Pending, Approved, Rejected)

```sql
-- Leave Table
CREATE TABLE Leave (
    LeaveID INT PRIMARY KEY,
    EmployeeID INT,
    StartDate DATE,
    EndDate DATE,
    LeaveType VARCHAR(50),
    Status VARCHAR(20) CHECK (Status IN ('Pending', 'Approved', 'Rejected')),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);
```

## Relationships Summary

- Employee → belongs to one Department
    
- Employee → may report to another Employee (self-reference)
    
- Department → has many Employees
    
- Project → managed by one Department
    
- Employee ↔ Project → many-to-many via Assignment
    
- Employee → receives multiple Salaries over time
    
- Employee → takes many Leaves
    
## Queries

* Add a Gender column to the Employee table:

```sql
-- Add Gender column to Employee
ALTER TABLE Employee
ADD Gender VARCHAR(10);
```

* Change the data type of Phone in Employee to support longer numbers:
```sql
-- Change data type of Phone in Employee to support longer numbers
ALTER TABLE Employee
MODIFY Phone VARCHAR(30);
```

* Remove the Location column from the Department table:
```sql
-- Remove Location column from Department
ALTER TABLE Department
DROP COLUMN Location;
```

* Add a foreign key to Assignment.EmployeeID referencing Employee:
```sql
-- Add foreign key to Assignment.EmployeeID referencing Employee
ALTER TABLE Assignment
ADD CONSTRAINT FK_Assignment_Employee
FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID);
```

* Rename Amount to SalaryAmount in the Salary table:
```sql
-- Rename Amount to SalaryAmount in Salary table
ALTER TABLE Salary
CHANGE Amount SalaryAmount DECIMAL(15, 2);
```

* Rename the Leave table to EmployeeLeave:

```sql
-- Rename Leave table to EmployeeLeave
RENAME TABLE Leave TO EmployeeLeave;
```

* Ensure HoursWorked in Assignment is never negative:

```sql
-- Ensure HoursWorked in Assignment is never negative
ALTER TABLE Assignment
ADD CONSTRAINT CHK_HoursWorked_NonNegative
CHECK (HoursWorked >= 0);
```

* Drop the foreign key on Project.DepartmentID:

```sql
-- Drop the foreign key on Project.DepartmentID

ALTER TABLE Project
DROP FOREIGN KEY DepartmentID;
```

Finding the foreign key name on `Project.DepartmentID`, using query:
```sql
SELECT CONSTRAINT_NAME
FROM information_schema.KEY_COLUMN_USAGE
WHERE TABLE_NAME = 'Project' AND COLUMN_NAME = 'DepartmentID';
```

## INSERTING VALUES TO TABLES

```sql
-- Insert sample data into Department
INSERT INTO Department (DepartmentID, DepartmentName)
VALUES (1, 'Engineering'),
       (2, 'HR'),
       (3, 'Marketing');
```

```sql
-- Insert sample data into Employee
INSERT INTO Employee (EmployeeID, Name, Email, Phone, HireDate, JobTitle, DepartmentID, ManagerID, Gender)
VALUES (101, 'Alice Smith', 'alice@example.com', '1234567890', '2022-01-10', 'Software Engineer', 1, NULL, 'Female'),
       (102, 'Bob Johnson', 'bob@example.com', '0987654321', '2021-06-15', 'HR Specialist', 2, 101, 'Male'),
       (103, 'Carol Lee', 'carol@example.com', '1112223333', '2023-03-20', 'Marketing Coordinator', 3, 101, 'Female');
```

```sql
-- Insert sample data into Project
INSERT INTO Project (ProjectID, ProjectName, StartDate, EndDate, Budget, DepartmentID)
VALUES (1001, 'Project Alpha', '2024-01-01', '2024-12-31', 50000, 1),
       (1002, 'Project Beta', '2024-02-15', '2024-11-30', 75000, 3);
```

```sql
-- Insert sample data into Assignment
INSERT INTO Assignment (AssignmentID, EmployeeID, ProjectID, Role, HoursWorked)
VALUES (201, 101, 1001, 'Developer', 120.5),
       (202, 103, 1002, 'Coordinator', 90);
```

```sql
-- Insert sample data into Salary
INSERT INTO Salary (SalaryID, EmployeeID, SalaryAmount, EffectiveDate, PayGrade)
VALUES (301, 101, 60000, '2024-01-01', 'P2'),
       (302, 102, 45000, '2024-01-01', 'P1'),
       (303, 103, 48000, '2024-01-01', 'P1');
```

```sql
-- Insert sample data into EmployeeLeave
INSERT INTO EmployeeLeave (LeaveID, EmployeeID, StartDate, EndDate, LeaveType, Status)
VALUES (401, 101, '2024-07-01', '2024-07-05', 'Sick', 'Pending'),
       (402, 102, '2024-08-10', '2024-08-12', 'Casual', 'Approved');
```

## Updating Data

* Update Employee Email and Phone

```sql
-- Update Employee Email and Phone
UPDATE Employee
SET Email = 'alice.smith@company.com', Phone = '1122334455'
WHERE EmployeeID = 101;
```

* Update Department Name and Location
```sql
-- Update Department Name and Location
UPDATE Department
SET DepartmentName = 'Human Resources',
    Location = 'Head Office'
WHERE DepartmentID = 2;
```

* Update Project Budget and End Date
```sql
-- Update Project Budget and End Date
UPDATE Project
SET Budget = 80000, EndDate = '2025-01-15'
WHERE ProjectID = 1002;
```

* Update Assignment Role and Hours Worked
```sql
-- Update Assignment Role and Hours Worked
UPDATE Assignment
SET Role = 'Senior Developer', HoursWorked = 150
WHERE AssignmentID = 201;
```

* Update Salary Amount and Pay Grade
```sql
-- Update Salary Amount and Pay Grade
UPDATE Salary
SET SalaryAmount = 62000, PayGrade = 'P3'
WHERE SalaryID = 301;
```

* Update Leave Status
```sql
-- Update Leave Status
UPDATE EmployeeLeave
SET Status = 'Approved'
WHERE LeaveID = 401;
```

* Update All Employees in One Department
```sql
-- Update All Employees in One Department (e.g., move all to DepartmentID = 1)
UPDATE Employee
SET DepartmentID = 1
WHERE DepartmentID = 2;
```

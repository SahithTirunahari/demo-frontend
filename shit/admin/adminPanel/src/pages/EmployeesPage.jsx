//import React from 'react';
import "./EmployeesPage.css"

const EmployeesPage = () => {
  // Dummy employee data for demonstration
  const employees = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  return (
    <div className="employees-page">
      <h2>Employees</h2>
      <table className="table table-striped table-bordered table-hover employees-table" >
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesPage;

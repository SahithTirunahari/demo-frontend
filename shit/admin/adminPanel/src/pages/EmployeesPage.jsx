//import React from 'react';
import "./EmployeesPage.css"

const EmployeesPage = () => {
  // Dummy employee data for demonstration
  const employees = [
    { id: 1, name: 'John Doe', email: 'john@example.com',role:'ADMIN' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com',role:'USER' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com',role:'ADMIN' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employees</h2>
      <div className="row justify-content-center">
        
        <div className="col-md-8">
        <table className="table table-striped table-bordered table-hover employees-table">
          <thead className="table-dark">
            <tr>
              <th style={{ width: '20%' }}>Employee ID</th>
              <th style={{ width: '30%' }}>Name</th>
              <th style={{ width: '30%' }}>Email</th>
              <th style={{ width: '70%' }}>Role</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;

import {useEffect } from "react";
import { Navbar, Nav, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { Link } from 'react-router-dom';

const CompanyProfile = ({children}) => {
  // Mock data for demonstration
//   const [orders, setOrders] = useState([]);
//   const [customers, setCustomers] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [rawMaterials, setRawMaterials] = useState([]);

  // Fetch data from API or localStorage upon component mount
  useEffect(() => {
    // Example: Fetch orders data
    // fetchOrders();
    // Example: Fetch customers data
    // fetchCustomers();
    // Example: Fetch employees data
    // fetchEmployees();
    // Example: Fetch raw materials data
    // fetchRawMaterials();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">Company Name</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
          <Nav.Link href="/customers">Customers</Nav.Link>
          <Nav.Link as={Link} to="/employee">Employees</Nav.Link>
          <Nav.Link href="/rawMaterials">Raw Materials</Nav.Link>
        </Nav>
      </Navbar>
      <div className="content">{children}</div>
      {/*<div id="orders">
        <h2>Orders</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            /{/* Render orders data */}
         {/* </tbody>
        </Table>
      </div>

      {/* Customers */}
      {/*<div id="customers">
        <h2>Customers</h2>
        <ul>
          {/* Render customers data */}
        {/*</ul>
      </div>

      {/* Employees */}
      {/*<div id="employees">
        <h2>Employees</h2>
        <ul>
          {/* Render employees data */}
        {/*</ul>
      </div>

      {/* Raw Materials */}
      {/*<div id="rawMaterials">
        <h2>Raw Materials</h2>
        <ul>
          {/* Render raw materials data */}
        {/*</ul>
      </div>*/}
    </div>
  );
};

export default CompanyProfile;


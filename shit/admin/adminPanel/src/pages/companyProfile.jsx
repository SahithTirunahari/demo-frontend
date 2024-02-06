import {useEffect } from "react";
import { Navbar, Nav, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const CompanyProfile = ({children}) => {
  // Mock data for demonstration
//   const [orders, setOrders] = useState([]);
//   const [customers, setCustomers] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [rawMaterials, setRawMaterials] = useState([]);
const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    // For example, clear local storage or remove authentication token
    navigate("/");
  };

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
        <div className="ml-auto">
          <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
        </div>
      </Navbar>
      <div className="content">{children}</div>
    </div>
  );
};

export default CompanyProfile;


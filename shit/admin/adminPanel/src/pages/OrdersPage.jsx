import React, { useState } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import "./OrdersPage.css";

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Customer 1', date: '2024-01-28' },
    { id: 2, customer: 'Customer 2', date: '2024-01-29' },
    { id: 3, customer: 'Customer 3', date: '2024-01-30' },
  ]);
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [newCustomerName, setNewCustomerName] = useState('');

  const addNewOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      customer: newCustomerName.trim() || `Customer ${orders.length + 1}`,
      date: new Date().toISOString().slice(0, 10),
    };
    setOrders(prevOrders => [...prevOrders, newOrder]);
    setNewCustomerName('');
    setShowAddCustomer(false); // Hide the input field after adding the order
  };

  const handleGenerateInvoice = (orderId) => {
    window.open('/invoice','_blank');
    console.log(`Invoice generated for order ${orderId}`);
  };

  return (
    <div className="orders-page">
      <h2>Orders</h2>
      <div className="orders-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleGenerateInvoice(order.id)}
                  >
                    Generate Invoice
                  </Button>
                </td>
              </tr>
            ))}
            {showAddCustomer && (
              <tr>
                <td>#</td>
                <td>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter customer name" 
                    value={newCustomerName}
                    onChange={(e) => setNewCustomerName(e.target.value)}
                  />
                </td>
                <td>{new Date().toISOString().slice(0, 10)}</td>
                <td>
                  <Button variant="primary" onClick={addNewOrder}>Save Order</Button>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        {!showAddCustomer && (
          <Button variant="success" onClick={() => setShowAddCustomer(true)}>Add New Order</Button>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;

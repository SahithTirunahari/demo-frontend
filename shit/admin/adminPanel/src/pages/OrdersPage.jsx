// import React from 'react';
import { Button, Table } from 'react-bootstrap';
import "./OrdersPage.css";
import InvoiceForm from './InvoiceForm';

    

const OrdersPage = () => {
    // const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  
    // const handleGenerateInvoice = () => {
    //   setShowInvoiceForm(true);
    // };
  // Dummy order data
  const orders = [
    { id: 1, customer: 'Customer 1', date: '2024-01-28' },
    { id: 2, customer: 'Customer 2', date: '2024-01-29' },
    { id: 3, customer: 'Customer 3', date: '2024-01-30' },
  ];
  const handleGenerateInvoice = (orderId) => {
    // Add functionality to generate invoice for the specific order here
    window.open('/invoice','_blank')
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
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>
                {/* Generate Invoice Button */}
                <Button
                  variant="primary"
                  onClick={() => handleGenerateInvoice(order.id)}
                >
                  Generate Invoice
                </Button>
              </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OrdersPage;

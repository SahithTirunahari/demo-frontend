import React from 'react';

const CustomerOrder = ({ customer }) => {
  const { name, orders } = customer;

  return (
    <div className="mb-4"> {/* Add margin-bottom for padding between customers */}
      <h2 className="mb-3">Customer: {name}</h2>
      <div className="table-responsive"> {/* Make the table responsive */}
        <table className="table table-striped table-bordered table-hover mx-auto"> {/* Add mx-auto for centering */}
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Price</th>
              <th>Order Item</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.orderDate}</td>
                <td>Rs. {order.price.toFixed(2)}</td>
                <td>{order.orderItem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerOrder;

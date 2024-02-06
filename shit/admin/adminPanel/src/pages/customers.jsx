import React, { useState, useEffect } from 'react';

import CustomerOrder from './CustomerOrder'; // Import the CustomerOrder component
import { Link } from 'react-router-dom';
const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Customer 1',
      orders: [
        { id: 101, orderDate: '2024-01-29', price: 50, orderItem: 'Item A' },
        { id: 102, orderDate: '2024-01-30', price: 30, orderItem: 'Item B' },
      ],
    },
    {
      id: 2,
      name: 'Customer 2',
      orders: [
        { id: 201, orderDate: '2024-01-28', price: 70, orderItem: 'Item C' },
        { id: 202, orderDate: '2024-01-31', price: 40, orderItem: 'Item D' },
      ],
    },
  ]);

  useEffect(() => {
    // // Fetch customers data from your API
    // axios.get('/api/customers')
    //   .then((response) => setCustomers(response.data))
    //   .catch((error) => console.error('Error fetching customers:', error));

  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {customers.map((customer) => (
            <div key={customer.id} className="mb-3">
              <CustomerOrder customer={customer} />
              {/* Button for customer details */}
              <Link to={`/customer/${customer.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;

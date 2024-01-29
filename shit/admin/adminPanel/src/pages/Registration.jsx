
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Registration.css";

const Registration = () => {
  const [registrationData, setRegistrationData] = useState({
    CompanyName: "",
    Description: "",
    GSTID: "",
    Status: "",
    Contact: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    console.log("Registration Data:", registrationData);
    // You can add further processing, like sending the registration data to the server
  };

  return (
    <div className="registration-container">
    <div className=" sign-in__wrapper">
      <div className="sign-in__backdrop"></div>
      <div className="registration-form-wrapper">
      <Form className="shadow p-4 rounded" onSubmit={handleRegistrationSubmit}>
        <div className="h4 mb-2 text-center">Registration</div>
        <Form.Group className="mb-2" controlId="CompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            name="CompanyName"
            value={registrationData.CompanyName}
            placeholder="Enter company name"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="Description"
            value={registrationData.Description}
            placeholder="Enter description"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="GSTID">
          <Form.Label>GST ID</Form.Label>
          <Form.Control
            type="text"
            name="GSTID"
            value={registrationData.GSTID}
            placeholder="Enter GST ID"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="Contact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            name="Contact"
            value={registrationData.Contact}
            placeholder="Enter contact"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={registrationData.email}
            placeholder="Enter email"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      </div>
    </div>
    </div>
  );
};

export default Registration;

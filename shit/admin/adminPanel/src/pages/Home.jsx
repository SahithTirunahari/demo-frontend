import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-4">
      <h2>Welcome to Our Weildshop Store</h2>
      <Row className="mt-4">
        {/* Featured Products */}
        <Col md={8}>
          <h4>Featured Products</h4>
          <Row>
            {/* Product Cards */}
            <Col md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="product1.jpg" />
                <Card.Body>
                  <Card.Title>Product 1</Card.Title>
                  <Card.Text>Rs. 1200</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Repeat similar Card components for other featured products */}
          </Row>
        </Col>

        {/* Special Offers or Promotions */}
        <Col md={4}>
          <h4>Special Offers</h4>
          {/* Special Offer Cards */}
          <Card>
            <Card.Body>
              <Card.Title>Get 20% Off Today!</Card.Title>
              <Card.Text>Use code SPECIAL20 at checkout.</Card.Text>
              <Button variant="danger">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call-to-Action Section */}
      <Row className="mt-4">
        <Col>
          <div className="cta-section">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with our latest products and offers.</p>
            <Link to="/subscribe">
              <Button variant="primary">Subscribe Now</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

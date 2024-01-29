import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap'; 


const RawMaterials = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description:'Description to Product 1',
      imageUrl:''
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      imageUrl: 'path/to/product2-image.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      imageUrl: 'path/to/product3-image.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4',
      imageUrl: 'path/to/product4-image.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description of Product 5',
      imageUrl: 'path/to/product5-image.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description of Product 6',
      imageUrl: 'path/to/product6-image.jpg',
    },
  ];

  return (
    <div className="container mt-5">
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RawMaterials;

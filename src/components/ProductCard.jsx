import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, description, price, image }) => {
    return (
        <Card className="shadow-sm">
            <Card.Img
                variant="top"
                src={image}
                alt={name}
                style={{ height: "150px", objectFit: "cover", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{name}</Card.Title>
                <Card.Text className="">{description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">{price}</span>
                    <Link to={`/products/${id}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
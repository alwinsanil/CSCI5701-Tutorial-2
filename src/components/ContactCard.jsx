import React from "react";
import { Card } from "react-bootstrap";

const ContactCard = () => {
    return (
        <Card className="contact-card shadow-sm">
            <Card.Body className="text-center">
                <Card.Title as="h2" className="mb-3">Contact Us</Card.Title>
                <Card.Text className="mb-2">
                    <strong>Address: </strong>123 Reece Street, UI City, CA 90210 <br />
                    <strong>Email: </strong>hello@prodmanage.com <br />
                    <strong>Phone: </strong>+1 (555) 123-4567
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ContactCard;
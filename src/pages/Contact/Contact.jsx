import React from "react";
import { Container } from "react-bootstrap";
import ContactCard from "../../components/ContactCard";

export const Contact = () => {
    return (
        <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div className="d-flex justify-content-center">
                <ContactCard />
            </div>
        </Container>
    );
};
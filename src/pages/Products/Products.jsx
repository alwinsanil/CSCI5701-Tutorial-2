import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Noise cancelling over-ear headphones",
        price: "$120",
        image: "https://st5.depositphotos.com/22341038/72016/i/450/depositphotos_720162296-stock-photo-ear-black-headphones-dark-background.jpg",
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Smart watch with health tracking",
        price: "$80",
        image: "https://imgs.search.brave.com/_QWreVLMdf93_Oz9tJH4-jAj9tmAIC2swyNiZsKMr_8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg4/NDc1MzEwL3Bob3Rv/L2FwcGxlLXN0YWlu/bGVzcy1zdGVlbC13/YXRjaGVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1wVGlN/cERQZkZDa1kzUFdy/WXdWTjdYTHJzNUY1/YlBuakVOM05SbUVO/djRjPQ",
    },
    {
        id: 3,
        name: "Laptop",
        description: "14-inch Full HD display, 256GB SSD",
        price: "$600",
        image: "https://imgs.search.brave.com/nPxSEjkwMKWr8ySHEVU5yI98vhyI4d5Av1Iwo0SduzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MDU0MTcyMi9waG90/by9tb2Rlcm4tbGFw/dG9wLW9uLXdoaXRl/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWI5SnRRNDg2Z3pE/ZmdicHByZDFoR1RZ/b3l6bG5MY21PeUhp/UldhalkxT1U9",
    },
];

export const Products = () => {
    return (
        <Container className="products-page" fluid>
            <div className="d-flex justify-content-end mb-4">
                <Button variant="info" className="rounded-pill">
                    <span className="me-2">+</span> Add Product
                </Button>
            </div>
            <Row>
                {products.map((product) => (
                    <Col md={3} key={product.id} className="mb-4">
                        <ProductCard
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
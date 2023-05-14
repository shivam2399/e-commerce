import React, { useState, useContext } from "react";
import "./App.css";
import { Container, Navbar, Nav, Button, Row, Col } from "react-bootstrap";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import Cart from "./Components/Cart";
import CartProvider from "././Store/CartProvider";
import AvailableProducts from "./Components/AvailableProducts";
import CartContext from "././Store/cart-context";


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach(item => {
    quantity += Number(item.quantity);
  })
  

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  

  return (
    <CartProvider>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Store</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
          <Button onClick={toggleCart} variant="outline-primary">
           <div>
            <span>{quantity}</span>
            </div>
            Cart
          </Button>
        </Container>
      </Navbar>
      <Navbar
        bg="secondary"
        expand="sm"
        variant="light"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <Container>
          <Nav className="mx-auto">
            <Navbar.Brand style={{ fontFamily: "Serif", fontSize: "50px" }}>
              THE GENERICS
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <h1
          style={{
            fontFamily: "Sans-serif",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          Music
        </h1>
      <AvailableProducts />  
      </Container>
      {isCartOpen && (
        <Cart
          show={isCartOpen}
          onHide={() => setIsCartOpen(false)}
        />
      )}
      <footer>
        <Container fluid style={{ backgroundColor: "skyblue", width: "100%" }}>
          <Row>
            <Col>
              <h1 style={{ fontFamily: "Serif", fontSize: "36px" }}>
                {" "}
                <b>THE GENERICS</b>
              </h1>
            </Col>
            <Col className="text-end">
              <a href="https://www.youtube.com/">
                <FaYoutube size={40} />
              </a>{" "}
              <a href="https://www.instagram.com/">
                <FaInstagram size={40} />
              </a>{" "}
              <a href="https://www.facebook.com/">
                <FaFacebook size={40} />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </CartProvider>
  );
}

export default App;

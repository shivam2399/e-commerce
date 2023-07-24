import React from 'react';
import Product from './Product';
import { Row, Col } from "react-bootstrap";

const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id:4,
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const AvailableProducts = () => {
    return (
      <>
        <div className="product-container row justify-content-center">
          <Row
            xs={1}
            sm={1}
            md={2}
            lg={2}
            xl={2}
            className="justify-content-center"
          >
            {productsArr.map((product, index) => (
              <Col key={index} className="col-12 mb-3">
                <div className="d-flex justify-content-center">
                  <Product product={product} index={index} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
}

export default AvailableProducts
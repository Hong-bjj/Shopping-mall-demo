import { useEffect, useState } from "react";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Hong-bjj/Shopping-mall-demo/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title} </div>
          <div>{product?.price} </div>
          <div>{product?.choice == true ? "Conscious choice" : ""} </div>
          <DropdownButton id="dropdown-item-button" title="사이즈 선택">
            <Dropdown.Item as="button">x</Dropdown.Item>
            <Dropdown.Item as="button">M</Dropdown.Item>
            <Dropdown.Item as="button">L</Dropdown.Item>
          </DropdownButton>

          <Button className="detail-add-btn" variant="dark" size="lg">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

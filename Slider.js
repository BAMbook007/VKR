import React from "react";
import { Carousel } from "react-bootstrap";
import sky from '../sky.jpg'

function Slider() {

  return (
  <Carousel>
    <Carousel.Item style={{'height': '600px'}}>
      <img
            className="d-block w-100"
            src={sky}
            alt="sky"
      />
      <Carousel.Caption>
        <h3>Sky</h3>
        <p>Just do it</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{'height': '600px'}}>
      <img
            className="d-block w-100"
            src={sky}
            alt="sky"
      />
      <Carousel.Caption>
        <h3>Sky</h3>
        <p>Just do it</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{'height': '600px'}}>
      <img
            className="d-block w-100"
            src={sky}
            alt="sky"
      />
      <Carousel.Caption>
        <h3>Sky</h3>
        <p>Just do it</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )}
  export default Slider;
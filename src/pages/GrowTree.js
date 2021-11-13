import React, { useState } from "react";
import { useRive, useStateMachineInput, Fit } from "rive-react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/growtree.css";
import tree_rive from "../rive/tree_demo.riv";

function Growtree() {
  const STATE_MACHINE_NAME = "State Machine 1";
  const INPUT_NAME = "input";

  const [sliderValue, setSliderValue] = useState(0.0);

  const { RiveComponent, rive } = useRive({
    src: tree_rive,
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    fit: Fit.cover,
  });

  const onChangeInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  );

  function changeHandler(e) {
    setSliderValue(parseFloat(e.target.value));
    onChangeInput.value = sliderValue;
  }

  console.log(sliderValue);
  return (
    <div className="grow_tree_body">
      <Container>
        <Row>
          <Col>
            <div className="tree_area">
              <div className="tree">
                <RiveComponent />
              </div>
              <div className="range_input">
                <input
                  type="range"
                  value={sliderValue}
                  min={0}
                  max={100}
                  onChange={changeHandler}
                  className="range_slider"
                ></input>
              </div>
            </div>
          </Col>
          <Col>
            <div className="text_area">
              <h1>Grow The Tree🎄</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Growtree;

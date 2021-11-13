import React, { useState } from "react";
import { useRive, useStateMachineInput, Fit } from "rive-react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "../css/home.css";
import text_svg from "../images/svg/Landing Text.svg";
import rocketRive from "../rive/rocket.riv";

function Home() {
  const STATE_MACHINE_NAME = "launchRocketState";
  const TRIGGER_NAME = "Launch Trigger";

  const [btnText, setBtnText] = useState("Preview Fly");
  const { RiveComponent, rive } = useRive({
    src: rocketRive,
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    fit: Fit.cover,
    onStateChange: (e) => {
      if (e.data[0] === "Hover Animation") {
        setBtnText("Preview Fly");
      } else {
        setBtnText("Flying!!!");
      }
    },
  });

  const onClickInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    TRIGGER_NAME
  );

  function clickHandler() {
    onClickInput.fire();
  }

  return (
    <div id="home" className="home_body">
      <Container>
        <Row>
          <Col>
            <div className="text_area">
              <Image className="text_img" src={text_svg} />
              <Button href="#section1">Start</Button>
            </div>
          </Col>
          <Col>
            <div className="rocket_area">
              <div className="rocket">
                <RiveComponent />
              </div>
              <div className="button_area">
                <Button variant="primary" onClick={clickHandler}>
                  {btnText}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

import React, { useState, useContext } from "react";
import { Context } from "../contexts/context";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "../css/sectionright.css";

function SectionFour() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const { updateAnimProgress, updatePlayState } = useContext(Context);

  const changeHandler = (e) => {
    setSelectedOption(e.target.value);
  };

  const clickHandler = (e) => {
    if (selectedOption) {
      setIsGameOver(true);
      selectedOption === "All the above"
        ? setIsCorrect("true")
        : setIsCorrect("false");
    }
  };

  const nextClickHandler = () => {
    updateAnimProgress(100);
    updatePlayState(true);
  };

  return (
    <div id="section4" className="main2">
      <Container fluid>
        <Row>
          <Col>
            <div className="body_area2">
              <div className="ques_div2">
                <h5>What is Rocket?</h5>
                <Form>
                  <Form.Check
                    type="radio"
                    value="Aircraft"
                    label="Aircraft"
                    name="radio_btn"
                    onChange={changeHandler}
                  />
                  <Form.Check
                    type="radio"
                    label="Spacecraft"
                    value="Spacecraft"
                    name="radio_btn"
                    onChange={changeHandler}
                  />
                  <Form.Check
                    type="radio"
                    value="Vehicle"
                    label="Vehicle"
                    name="radio_btn"
                    onChange={changeHandler}
                  />
                  <Form.Check
                    type="radio"
                    value="All the above"
                    label="All the above"
                    name="radio_btn"
                    onChange={changeHandler}
                  />
                  <Button disabled={isGameOver} onClick={clickHandler}>
                    Submit
                  </Button>
                </Form>
                {isCorrect === "true" ? (
                  <div>
                    <h3>You have got the Part</h3>
                    <Button href="#section5" onClick={nextClickHandler}>
                      Move Next!
                    </Button>
                  </div>
                ) : isCorrect === "false" ? (
                  <h3>Oops wrong Answer!</h3>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionFour;

import React from "react";
import "../assets/css/speedmeter.css";
import ReactSpeedometer from "react-d3-speedometer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

export default function SpeedMeter(params) {
  const percentage = 66;
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="6">
          <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                Speed (km/hr)
                </CardTitle>
              </CardHeader>
              <CardBody >
                <div className="chart-area"  style={{
                  display: "flex",
                  justifyContent: "center",
                  overflow: "hidden",
                }}>
                <ReactSpeedometer minValue={0} maxValue={120} value={30} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <CardHeader>
              <CardTitle tag="h3">
               Battery Charge (%)
               </CardTitle>
               </CardHeader>
              <CardBody style={{height: "250px",}}>
                <Example label="Default animation speed">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textSize: "14px",
                      textColor: "gold",
                      pathColor: "turquoise",
                      trailColor: "grey",
                    })}
                  />
                </Example>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
              <CardTitle tag="h3">
               Current RPM
               </CardTitle>
               </CardHeader>
              <CardBody
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "250px",
                  overflow: "hidden",
                }}
              >
                <ReactSpeedometer value={700} />
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
            <CardHeader>
              <CardTitle tag="h3">
                  Distance Traveled (KM)
                </CardTitle>
            </CardHeader>
              <CardBody
                style={{
                  height: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1>17 km</h1>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Card>
              <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=AIzaSyBGp2Pnbz9Htx-jMVQPXXES7t0iA4tQwTw`} width="100%" height="100%" alt="" />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

function Example(props) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "30%" }}>{props.children}</div>
      </div>
    </div>
  );
}
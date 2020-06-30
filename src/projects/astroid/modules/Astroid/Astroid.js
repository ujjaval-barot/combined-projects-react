import React, { Component } from "react";
import { Card, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

export default class Astroid extends Component {
  componentDidMount() {}

  render() {
    let { id } = this.props.match.params;
    let { asteroids } = this.props.astroid;
    let selectedAstroid = [];
    let randomAstroid = asteroids.filter((item) => {
      if (item.id === id) selectedAstroid.push(item);
    });
    let data = { ...selectedAstroid[0] };

    return (
      <Row
        className="row-container"
        type="flex"
        justify="center"
        align="middle"
        style={{ paddingTop: 200 }}
      >
        {/* <Col xs={23} sm={22} md={21} lg={20} xl={19}> */}
        <Col span={8}>
          <Card title={`Astroid Name: ${data.name}`} bordered>
            <div>
              <p> Nasa Jpl Url:</p>
              <div style={{ padding: 10, border: "2px solid lightgray" }}>
                <a>{data.nasa_jpl_url}</a>
                <Button
                  style={{
                    marginLeft: 40,
                    borderRadius: 100,
                    background: "#649d66",
                    color: "white",
                  }}
                  onClick={() => window.location.assign(`${data.nasa_jpl_url}`)}
                >
                  Go To Url
                </Button>
              </div>
            </div>
            <br />
            <br />

            {data.is_potentially_hazardous_asteroid ? (
              <div style={{ background: "red" }}>
                <p style={{ padding: 10, textAlign: "center", color: "white" }}>
                  Hazardous
                </p>
              </div>
            ) : (
              <div style={{ background: "green" }}>
                <p style={{ padding: 10, textAlign: "center", color: "white" }}>
                  Not Hazardous
                </p>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    );
  }
}

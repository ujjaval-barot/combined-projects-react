import React, { Component } from "react";
import { Form, Button, Input, Row, Col, Card, Alert } from "antd";

export default class SearchAstroid extends Component {
  state = { loading: false, foundId: null };
  componentDidMount() {
    this.props.getAllAsteroids();
  }

  render() {
    const { asteroids } = this.props.astroid;
    let { loading, foundId } = this.state;

    const onSubmit = (values) => {
      this.setState({ loading: true });

      asteroids &&
        asteroids.filter((item) => {
          if (item.id === values.astroidId) {
            this.setState({ loading: false });
            return this.props.history.push(`astroid/${values.astroidId}`);
          } else {
            this.setState({ foundId: false, loading: false });
          }
        });
    };

    const onSubmitFailed = (values) => {
      console.log("Failed:", values);
    };

    const getRandomAstroid = () => {
      this.setState({ loading: true });
      let astroidIds =
        asteroids &&
        asteroids.map((AstroidId) => {
          return AstroidId.id;
        });

      let randomId = astroidIds[Math.floor(Math.random() * astroidIds.length)];
      this.setState({ loading: false });

      return this.props.history.push(`astroid/${randomId}`);
    };

    return (
      <div>
        <Row
          className="row-container"
          type="flex"
          justify="center"
          align="middle"
          style={{ paddingTop: 200 }}
        >
          <Col span={8}>
            <Card bordered>
              <Form
                initialValues={{ remember: true }}
                onFinish={onSubmit}
                onFinishFailed={onSubmitFailed}
              >
                <Form.Item
                  label="Astroid Id"
                  name="astroidId"
                  rules={[
                    { required: true, message: "Please input astroid id!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button
                    loading={loading}
                    style={{
                      borderRadius: 100,
                      width: "100%",
                      color: "white",
                      background: "green",
                    }}
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>

                <Form.Item>
                  <Button
                    loading={loading}
                    style={{ width: "100%", borderRadius: 100 }}
                    onClick={getRandomAstroid}
                    type="primary"
                  >
                    Random
                  </Button>
                </Form.Item>
              </Form>
              {foundId === false ? (
                <Alert
                  message="Error"
                  description="astroid id not found."
                  type="error"
                  showIcon
                />
              ) : null}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

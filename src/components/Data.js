import { Component } from "react";
import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";
import { getData } from "../Api";

class ProfileData extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: false,
    };
  }

  componentDidMount() {
    getData().then((data) => {
      if (data.error) {
        this.setState({
          error: true,
        });
      }
      this.setState({
        data: data.results,
      });
      console.log(this.state.data);
    });
  }

  render() {
    let profileList = this.state.data.map((profile) => {
      return (
        <div>
          <Card
            key={profile.id}
            style={{
              disply: "block",
              height: "130px",
              width: "370px",
              margin: "5px",
              backgroundColor: "#ECECEC",
              border: "none",
            }}
          >
            <Row>
              <Col lg={5} xs={4}>
                <img src={profile.picture.large} alt={profile.name.first} />
              </Col>
              <Col lg={7} xs={8}>
                <p
                  style={{
                    marginTop: "3px",
                  }}
                >
                  <b>
                    {profile.name.first}
                    {` `}
                    {profile.name.last}
                  </b>
                  <p style={{ fontSize: "14px" }}>
                    <a href="">{profile.email}</a>
                    <br />
                    {profile.phone}
                  </p>
                </p>
              </Col>
            </Row>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>People</h1>

              <Form>
                <Row>
                  <Col lg={8}>
                    <Form.Group>
                      <Form.Control placeholder="name search" />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      block
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        border: "none",
                      }}
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Form>

              <br />
            </Col>
          </Row>
          <Row>{profileList}</Row>
        </Container>
      </div>
    );
  }
}

export default ProfileData;

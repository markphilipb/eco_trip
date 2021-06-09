import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class RouteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      destination: "",
    };

    this.onOriginInput = this.onOriginInput.bind(this);
    this.onDestinationInput = this.onDestinationInput.bind(this);
  }

  handleSubmit = async (e) => {
    this.props.handleClick(this.state.origin, this.state.destination);
    this.props.showCarbon();
  };

  onOriginInput(e) {
    this.setState({
      origin: e.target.value,
    });
    console.log(this.state.destination);
  }

  onDestinationInput(e) {
    this.setState({
      destination: e.target.value,
    });
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formOrigin">
          <Form.Label>Origin</Form.Label>
          <Form.Control
            type="text"
            placeholder="Choose starting point"
            onChange={this.onOriginInput}
            value={this.state.origin}
          />
        </Form.Group>

        <Form.Group controlId="formDestination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text-muted"
            placeholder="Choose Destination"
            onChange={this.onDestinationInput}
            value={this.state.destination}
          />
        </Form.Group>
        <Button variant="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default RouteForm;

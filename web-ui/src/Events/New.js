import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import pick from 'lodash/pick';

import { create_event, fetch_events } from '../api';

function EventsNew() {
  let history = useHistory();
  const [event, setEvent] = useState({name: "", description: "", date: ""});

  function update(field, ev) {
    let e1 = Object.assign({}, event);
    e1[field] = ev.target.value;
    setEvent(e1);
  }

  function onSubmit(ev) {
    ev.preventDefault();
    console.log(event);

    let data = pick(event, ['name', 'description', 'date']);
    create_event(data).then(() => {
      fetch_events();
      history.push("/");
    });
  }

  return (
    <Row>
      <Col>
        <h2>New User</h2>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
                          onChange={(ev) => update("name", ev)}
                          value={event.name || ""} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="description"
                          onChange={(ev) => update("description", ev)}
                          value={event.description || ""} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control id="date-picker"       type="date"
                          onChange={(ev) => update("date", ev)}
                          value={event.date || ""} />
          </Form.Group>
          <Button variant="primary"
                  type="submit">
            Save
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

function state2props() {
  return {};
}

export default connect(state2props)(EventsNew);
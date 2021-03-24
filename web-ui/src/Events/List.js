import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function EventsList({ events }) {
  let rows = events.map((event) => (
    <tr key={event.id}>
      <td>{event.name}</td>
      <td>[Edit]</td>
    </tr>
  ));

  return (
    <div>
      <Row>
        <Col>
          <h2>List Events</h2>
          <p>
            <Link to="/events/new">New Event</Link>
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
}

function state2props({events}) {
    return { events };
  }
  
  export default connect(state2props)(EventsList);
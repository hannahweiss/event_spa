import { Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';


function Event({event}) {
  return (
    <Col>
      <Card>
        <Card.Text>
          Posted by {event.user.name}<br />
          {event.body}
        </Card.Text>
      </Card>
    </Col>
  );
}

function Feed({events}) {
  let cards = events.map((event) => <Event event={event} key={event.id} />);
  return (
    <Row>
      { cards }
    </Row>
  );
}

export default connect(({events}) => ({events}))(Feed);
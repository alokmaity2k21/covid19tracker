import { Card } from "react-bootstrap";
const CardItem = ({ title, data, bg }) => {
  return (
    <Card bg={bg} className="m-1" style={{ borderRadius: "10px" }}>
      <Card.Body className="text-center text-white">
        <Card.Title>{data}</Card.Title>
        <Card.Text>{title}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardItem;

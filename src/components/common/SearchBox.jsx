import { Form } from "react-bootstrap";

const SearchBox = ({ placeholder, handleSearch }) => {
  return (
    <Form>
      <Form.Control
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
      ></Form.Control>
    </Form>
  );
};

export default SearchBox;

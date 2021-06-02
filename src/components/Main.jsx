import { Tabs, Tab } from "react-bootstrap";
import World from "./pages/World";
import India from "./pages/India";
import Home from "./pages/Home";

const Main = ({ overAllIndia, states, countries }) => {
  return (
    <>
      <h2 className="text-center text-primary mb-3">Covid-19 Tracker</h2>
      <Tabs className="mb-3" fill>
        <Tab eventKey="home" title="Home">
          <Home overAllIndia={overAllIndia} />
        </Tab>
        <Tab eventKey="india" title="India">
          <India states={states} />
        </Tab>
        <Tab eventKey="world" title="World">
          <World countries={countries} />
        </Tab>
      </Tabs>
    </>
  );
};

export default Main;

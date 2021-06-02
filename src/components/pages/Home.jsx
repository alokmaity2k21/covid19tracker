import CardItem from "../common/CardItem";
import { CardGroup } from "react-bootstrap";

const Home = ({ overAllIndia: data }) => {
  const timeClasses = "bg-primary text-white fw-bold d-block m-1 p-1 text-";
  return (
    <>
      <span className={timeClasses + "end"} style={{ borderRadius: "15px" }}>
        Updated At : {data.lastupdatedtime}
      </span>
      <span className={timeClasses + "start"} style={{ borderRadius: "15px" }}>
        India Over All Stats
      </span>
      <CardGroup>
        <CardItem title={"Active"} data={data.active} bg={"warning"} />
        <CardItem title={"Recovered"} data={data.recovered} bg={"success"} />
        <CardItem title={"Deaths"} data={data.deaths} bg={"danger"} />
      </CardGroup>
    </>
  );
};

export default Home;

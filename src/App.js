import "./App.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import * as APIService from "./services/apiSerive";
import Loader from "./components/Loader";
import Main from "./components/Main";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";

function App() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [overAllIndia, setOverAllIndia] = useState({});

  useEffect(() => {
    const getData = async () => {
      const states = await APIService.getStates();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      const overAllData = states.shift();
      setStates(states);
      setOverAllIndia(overAllData);
      const countries = await APIService.getCountries();
      setCountries(countries);
    };
    getData();
  }, []);

  return (
    <Container>
      <Switch>
        <Route
          path="/"
          render={() =>
            loading ? (
              <Loader loading={loading} />
            ) : (
              <Main
                overAllIndia={overAllIndia}
                states={states}
                countries={countries}
              />
            )
          }
          exact
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;

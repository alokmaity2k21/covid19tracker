import { HashLoader } from "react-spinners";

const Loader = ({ loading }) => {
  const override = `
    display: block;
    margin: 50vh auto;
    border-color: red;
  `;
  return (
    <>
      <h2 className="text-center text-success mt-3">Covid-19 Tracker</h2>
      <HashLoader
        loading={loading}
        css={override}
        size={140}
        color={"green"}
      ></HashLoader>
    </>
  );
};

export default Loader;

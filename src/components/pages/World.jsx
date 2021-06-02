import MyTable from "../common/MyTable";

const World = ({ countries }) => {
  const columns = [
    { label: "Flag", value: "countryInfo.flag" },
    { label: "Country", value: "country", color: "primary" },
    { label: "Cases", value: "cases", color: "warning" },
    { label: "Recovered", value: "recovered", color: "success" },
    { label: "Deaths", value: "deaths", color: "danger" },
  ];

  return (
    <>
      <MyTable
        data={countries}
        columns={columns}
        placeholder={"Search Country"}
      />
    </>
  );
};

export default World;

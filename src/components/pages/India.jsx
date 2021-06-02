import MyTable from "../common/MyTable";

const India = ({ states }) => {
  const columns = [
    { label: "State", value: "state", color: "primary" },
    { label: "Active", value: "active", color: "warning" },
    { label: "Recovered", value: "recovered", color: "success" },
    { label: "Deaths", value: "deaths", color: "danger" },
  ];

  return (
    <>
      <MyTable data={states} columns={columns} placeholder={"Search State"} />
    </>
  );
};

export default India;

import { useLoaderData } from "react-router";

const AppDetails = () => {
  const data = useLoaderData();
console.log(data);
  return <div></div>;
};

export default AppDetails;

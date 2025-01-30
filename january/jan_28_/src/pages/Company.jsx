import { useParams } from "react-router-dom";
const Company = () => {
  const { company } = useParams();
  return (
    <>
      <h1> this is my company : {company}</h1>
    </>
  );
};
export default Company;

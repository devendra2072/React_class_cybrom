import { Link, Outlet } from "react-router-dom";
const About = () => {
  return (
    <>
      <h1>This is About Page</h1>

      <br />
      <br />
      <hr />
      <table>
        <tr>
          <td>
            <Link to="aboutcompany">AboutCompany</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="aboutservice">AboutService</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="aboutcontact">AboutContact</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td>
            <Outlet/>
          </td>
        </tr>
      </table>
    </>
  );
};
export default About;

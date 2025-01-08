const EmpDesign = (props) => {
  return (
    <>
      <tr>
        <td>{props.eno}</td>
        <td>{props.nm}</td>
        <td>{props.dept}</td>
        <td>{props.sal}</td>
      </tr>
    </>
  );
};
export default EmpDesign;

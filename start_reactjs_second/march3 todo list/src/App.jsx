import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove, save, workStatus } from './Todo_slice'
import './app.css';

function App() {
  const [input, setInput] = useState("");
  const [upadateId, setUpdataId] = useState();
  const [showBtn, SetShowBtn] = useState(true);
  const [toggleComplete, setToggleComplete] = useState(true);

  const dispatch = useDispatch();
  const work = useSelector(s => s.todoSlice.work);

  // ======================[SHOW-WORK]======================

  let data = work.map((key, id) => {
    return (
      <>
        <tr>
          <td>{id + 1}</td>
          <td className={`${key.workStatus}`}>{key.work}</td>
          <td><button onClick={() => dispatch(remove(id))}>Remove</button></td>
          <td><button onClick={() => updateFunction(id)}>Update</button></td>
          <td><button onClick={(e) => completeOrNot(e,id)}>Complete</button></td>
        </tr>
      </>
    )
  });
  // ======================[ complete - Incomplete ]============
  function completeOrNot(e,id) {
    e.target.innerHTML = (!toggleComplete)?("Complete"):("Incomplete");
    setToggleComplete(p => (p) ? (false) : (true));
    dispatch(workStatus({id:id,toggle:toggleComplete}));
  }

  // ======================[ Update ]======================
  function updateFunction(id) {
    SetShowBtn(false);
    let updateWorkValue = work[id].work;
    setUpdataId(id);
    setInput(updateWorkValue)
  }

  // ======================[Add-work]======================

  function addWork(e) {
    dispatch(add({ work: input, id: work.length, workStatus: "complete" }));
    setInput("");
  }

  // ======================[Save-work]======================
  function saveWork() {
    dispatch(save({ id: upadateId, value: input }));
    SetShowBtn(true);
    setInput("");
  }


  // ======================[ RETURN ]======================
  return (
    <>
      <input type="text" placeholder='enter work' value={input} onChange={e => setInput(e.target.value)} />

      {(showBtn) ? (<button onClick={(e) => addWork(e)}>Add</button>) : (<button onClick={saveWork}>Save</button>)}

      {/* TABLE */}
      <table border="1" style={{ width: "500PX", textAlign: "center" }}>
        <tr><th>SNO</th><th>Work</th><th>Remove</th><th>Update</th></tr>
        {data}
      </table>
    </>
  )
}

export default App
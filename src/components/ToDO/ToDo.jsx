import React, { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleComplete = (id) => {
    setList(
      list.map((l) => (l.id === id ? { ...l, completed: !l.completed } : l)),
    );
  };

  const handleDelete = (id) => {
    if (confirm("Sure want to delete?")) {
      setList(list.filter((l) => l.id !== id));
    }
  };

  return (
    <div>
      <div className=" flex mt-50 justify-center items-center ">
        <input
          type="text"
          placeholder="Enter a task"
          className="border px-3"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button
          className="border mx-3 px-2"
          onClick={() => {
            setList([
              ...list,
              { task, id: crypto.randomUUID(), completed: false },
            ]);
            setTask("");
          }}
        >
          Add task
        </button>
      </div>
      <div className=" flex justify-center mt-3">
        <ul>
          {list.map((l) => (
            <li>
              <input
                type="checkbox"
                checked={l.completed}
                onChange={() => handleComplete(l.id)}
              />
              {l.task}
              <button
                className="mx-3 border px-2"
                onClick={() => handleDelete(l.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;

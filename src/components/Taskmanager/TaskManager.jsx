import { useEffect, useMemo, useState } from "react";

const TaskManager = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState(() => {
    const stored = localStorage.getItem("list");
    return stored ? JSON.parse(stored) : [];
  });
  const [priority, setPriority] = useState("Low");
  const [tab, setTab] = useState("All");
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const handleCompleted = (id, cId) => {
    setList(list.map((l) => (l.id === id ? { ...l, completed: cId } : l)));
  };

  const handleDelete = (id) => {
    setList(list.filter((l) => l.id !== id));
  };

  const addTask = () => {
    if (!task.trim()) return;
    setList([
      ...list,
      { task, id: crypto.randomUUID(), completed: false, priority },
    ]);
    setTask("");
  };

  const filteredTaskList = useMemo(
    () =>
      list.filter((t) => {
        if (tab === "Completed") return t.completed;
        else if (tab === "Pending") return !t.completed;
        else if (tab === "High") return t.priority === "High";
        else return true;
      }),
    [list, tab],
  );

  return (
    <div>
      <div className="flex mt-50 justify-center items-center ">
        <input
          type="text"
          placeholder="Enter a task"
          className="border px-3"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button className="border mx-3 px-2" onClick={addTask}>
          Add task
        </button>
      </div>

      <div className="flex justify-center gap-3">
        {["All", "Completed", "Pending", "High"].map((tab_x) => (
          <button
            className={`border mt-2 p-1 ${tab === tab_x && "bg-blue-500"}`}
            onClick={(e) => setTab(tab_x)}
          >
            {tab_x}
          </button>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <ul>
          {filteredTaskList.map((l) => (
            <li className="flex items-center gap-3 border p-2">
              {l.task}

              <span
                className={`p-1 ${l.priority === "Low" ? "bg-yellow-300" : l.priority === "Medium" ? "bg-orange-600" : "bg-red-800"}`}
              >
                {l.priority}
              </span>

              <div className="ml-2">
                {!l.completed ? (
                  <button
                    className="bg-red-500 p-1"
                    onClick={() => handleCompleted(l.id, true)}
                  >
                    Mark Done
                  </button>
                ) : tab === "Completed" ? (
                  <button
                    className="bg-fuchsia-500 p-1"
                    onClick={() => handleCompleted(l.id, false)}
                  >
                    Undo
                  </button>
                ) : (
                  <label className="bg-green-500 p-1">Completed</label>
                )}
              </div>

              <button
                className="mx-3 border px-2 p-1"
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

export default TaskManager;

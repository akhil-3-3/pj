import React, { useState } from "react";

const Grade = () => {
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [mark, setMark] = useState("");
  const [grade, setGrade] = useState([]);

  const handleGrade = (mark) => {
    const m = Number(mark);
    if (mark > 90) return "A";
    else if (m >= 75) return "B";
    else if (m >= 60) return "C";
    else if (m >= 40) return "D";
    else if (m >= 20) return "E";
    else return "F";
  };
  return (
    <div className="flex flex-col items-center mt-50">
      <h1 className="font-bold mb-3">Grade Calculator</h1>
      <div className="flex flex-col">
        <label>Name:</label>
        <input
          type="text"
          className="border px-2 ml-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Subject:</label>
        <input
          type="text"
          className="border px-2  ml-3"
          value={sub}
          onChange={(e) => setSub(e.target.value)}
          required
        />
        <label>Marks:</label>
        <input
          type="number"
          className="border px-2 ml-3"
          value={mark}
          onChange={(e) => setMark(e.target.value)}
          required
        />
      </div>
      <div>
        <button
          onClick={() => {
            const calc = handleGrade(mark);
            setGrade([...grade, { name, sub, mark: Number(mark), calc }]);
            setName("");
            setSub("");
            setMark("");
          }}
          className="border mx-3 mt-3"
        >
          Show Grade
        </button>

        <button
          onClick={() => {
            setName("");
            setSub("");
            setMark("");
          }}
          className="border"
        >
          Reset
        </button>
      </div>
      <h1 className="mt-3 font-bold">Result</h1>
      <ul>
        {grade.map((g, id) => (
          <li key={id} className="mb-5">
            <p>Name: {g.name}</p>
            <p>Subject: {g.sub}</p>
            <p>Marks: {g.mark}</p>
            <p>Grade: {g.calc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grade;

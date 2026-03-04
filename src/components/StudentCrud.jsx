import React, { useEffect, useState } from "react";

const StudentCrud = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return;
    if (editId !== null) {
      setStudents(
        students.map((s) =>
          s.id === editId ? { ...s, name: name, age: age } : s,
        ),
      );
      setEditId(null);
    } else {
      const newStudent = {
        id: Date.now(),
        name,
        age,
      };
      setStudents([...students, newStudent]);
    }
    setName("");
    setAge("");
  };
  const handleEdit = (s) => {
    setName(s.name);
    setAge(s.age);
    setEditId(s.id);
  };
  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          className="border px-2 mr-3 rounded-lg"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          className="border px-2 mr-3 rounded-lg"
          placeholder="Enter Student Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <button type="submit" className="border p-1 bg-blue-600 text-white">{editId !== null ? "Update" : "Add"}</button>
      </form>

      {students.length === 0 ? (
        <div className="text-center">No Students Added</div>
      ) : (
        students.map((s) => (
          <div key={s.id} className="flex border">
            <p>{s.name}</p>
            <p>{s.age}</p>
            <button onClick={() => handleEdit(s)}>Edit</button>
            <button onClick={() => handleDelete(s.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentCrud;

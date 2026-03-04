import React, { useEffect, useState } from "react";

const Students = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState("");
  const [search, setSearch] = useState("");

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !roll || !year) return;
    const newStudent = {
      id: Date.now(),
      name,
      roll,
      year,
    };
    setStudents([...students, newStudent]);
    setName("");
    setRoll("");
    setYear("");
  };

  const handleSearch = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };
  return (
  <div className="flex flex-col min-h-screen justify-center items-center gap-6">
    <h1 className="font-bold text-3xl">Student Management</h1>
      <input
        type="text"
        className="border px-2 rounded"
        placeholder="Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <form onSubmit={handleSubmit} className="flex items-center gap-3 ">
        <div>
          <input
            type="text"
            className="border px-2 rounded mx-3"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            className="border px-2 rounded"
            placeholder="Enter Student Roll Number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <select value={year} onChange={(e) => setYear(e.target.value)} className="border">
            <option value="">Select Year</option>
            <option value="1st">1st year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 p-1 px-2 text-white border rounded"  type="submit">Add</button>
          </div>
        </div>
      </form>
      <div className="flex flex-col">
        <h1 className="font-bold text-xl">Students List</h1>
      {handleSearch.length === 0 ? (
        <p>No Students Added</p>
      ) : (
        handleSearch.map((s) => (
          <div key={s.id} className="border w-2xl p-3 mb-2">
            <p>Name:{s.name}</p>
            <p>RollNo:{s.roll}</p>
            <p>Year:{s.year}</p>
            <button onClick={() => handleDelete(s.id)}>Delete</button>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default Students;

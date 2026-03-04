import React, { useEffect, useState } from "react";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    if (editId) {
      setNotes(
        notes.map((n) => (n.id === editId ? { ...n, title, description } : n)),
      );
      setEditId(null);
    } else {
      const newNote = {
        id: Date.now(),
        title,
        description,
      };
      setNotes([newNote, ...notes]);
    }

    setTitle("");
    setDescription("");
  };
  const handleEdit = (note) => {
    setTitle(note.title);
    setDescription(note.description);
    setEditId(note.id);
  };
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          className="border px-3 mx-3 rounded-lg "
          placeholder="Enter the note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          className="border px-3 mx-3 rounded-lg "
          placeholder="Enter the note description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="border p-1 rounded-lg">{editId ? "Update" : "Add"}</button>
      </form>

      {notes.length === 0 ? (
        <p>No Notes Added</p>
      ) : (
        <ul className="flex w-2xl border mt-10">
          {notes.map((note) => (
            <li key={note.id} >
              <h1 className="font-bold">{note.title}</h1>
              <p className="mb-3">{note.description}</p>
              <button className="p-1 border bg-blue-600 text-white px-3 mx-" onClick={() => handleEdit(note)}>Edit</button>
              <button  className="p-1 border bg-red-600 text-white px-3 mx-3" onClick={()=>handleDelete(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notes;

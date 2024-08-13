import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentDetails() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  useEffect(() => {
    Load();
  }, []);

  const Load = async () => {
    try {
      const response = await axios.get("https://localhost:7029/GetStudents");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const handleRegister = async () => {
    if (!studentName || !course) {
      alert("Both Student Name and Course are required.");
      return;
    }

    try {
      const url = `https://localhost:7029/AddStudent?name=${studentName}
        studentName
      )}&course=${course}`;
      await axios.post(url);

      alert("Student Registration Successful");
      setStudentName("");
      setCourse("");
      Load();
    } catch (err) {
      alert("Error registering student: " + err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7029/DeleteStudent/${id}`);
      alert("Student deleted successfully");
      Load();
    } catch (err) {
      alert("Error deleting student: " + err.message);
    }
  };

  const handleUpdate = async () => {
    if (!studentName || !course || selectedStudentId === null) {
      alert("All fields and student ID are required.");
      return;
    }

    try {
      const url = `https://localhost:7029/UpdateStudent/${selectedStudentId}?name=${encodeURIComponent(
        studentName
      )}&course=${encodeURIComponent(course)}`;
      await axios.put(url);

      alert("Student updated successfully");
      setStudentName("");
      setCourse("");
      setSelectedStudentId(null);
      Load();
    } catch (err) {
      alert("Error updating student: " + err.message);
    }
  };

  const handleEdit = (student) => {
    setStudentName(student.name);
    setCourse(student.course);
    setSelectedStudentId(student.id);
  };

  return (
    <div className="container mt-4">
      <h1>Student Details</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">
            Course
          </label>
          <input
            type="text"
            className="form-control"
            id="course"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleRegister}
        >
          Register
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>

      <table className="table mt-4 text-white bg-dark">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Course</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;

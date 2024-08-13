import React, { useState, useEffect } from "react";
import StudentTable from "./studentTable";
import  StudentForm from './studentForm'
import {
  getStudents,
  addStudent,
  deleteStudent,
  updateStudent,
} from "./studentService";

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
      const studentData = await getStudents();
      setStudents(studentData);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const handleRegister = async () => {
    if (!studentName || !course) {
      alert("Both Student Name and Course are required.");
      return;
    }

    const student = { id:0 ,name: studentName, course: course };

    try {
      await addStudent(student);
      alert("Student Registration succesfull");
      setStudentName("");
      setCourse("");
      Load();
    } catch (err) {
      alert("Error registering student: " + err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      alert("Student Delete Succesfully");
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

    const student = {name: studentName, course: course };

    try {
      await updateStudent(selectedStudentId,student);
      alert("Student updated succesfully!");
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
      <StudentForm
        studentName={studentName}
        setStudentName={setStudentName}
        course={course}
        setCourse={setCourse}
        handleRegister={handleRegister}
        handleUpdate={handleUpdate}
      />

      <StudentTable
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default StudentDetails;

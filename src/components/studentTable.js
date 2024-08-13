// StudentTable.js
import React from 'react';

const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
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
        {students.length === 0 ? (
          <tr>
            <td colSpan="4">No students found</td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(student)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default StudentTable;

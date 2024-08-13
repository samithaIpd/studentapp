import React from 'react';

const StudentForm = ({ studentName, setStudentName, course, setCourse, handleRegister, handleUpdate }) => {
  return (
    <div className="mb-4">
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
    </div>
  );
};

export default StudentForm;

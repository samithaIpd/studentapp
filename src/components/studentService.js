import apiService from "../apiServices";

export const getStudents = async () => {
  return apiService.get("GetStudents");
};

export const addStudent = async (student) => {
  console.log("std", student);
  return apiService.post("AddStudent", student);
};

export const updateStudent = async (id, student) => {
  return apiService.put(`UpdateStudent/${id}`, student);
};

export const deleteStudent = async (id) => {
  return apiService.delete(`DeleteStudent/${id}`);
};

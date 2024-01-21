import axios from "axios";
import toast from "react-hot-toast";
const URL = "http://localhost:8000";

// Post Api
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    toast(error?.response?.data?.message);

    // console.log('Error while calling add user Api',error)
  }
};

// get Api

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("Error While calling getUsers API", error);
  }
};

//edit

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling getUser Api", error);
  }
};

//edit user

export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error while calling editUser api", error);
  }
};

//delete api

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("error while calling deleteUser api", error);
  }
};

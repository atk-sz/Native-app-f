import axios from "axios";
import config from '../../config'

export const getCategories = async ( ) => {
  return await axios.get(`${config.EXPO_BACKEND_API}categories`);
};

export const addCategory = async ( name ) => {
  return await axios.post(`${config.EXPO_BACKEND_API}category/add`,{
    name
  });
};

export const deleteCategory = async ( id ) => {
  return await axios.delete(`${config.EXPO_BACKEND_API}delete/${id}`);
};


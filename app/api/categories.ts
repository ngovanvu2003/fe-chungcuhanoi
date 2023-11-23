import connect_Api from "./instances";

export const getAllCategories = () => {
  return connect_Api.get(`/category`);
};
//get byId
export const getOneCategories = (id: string) => {
  return connect_Api.get(`/category/${id}`);
};

// add
export const AddCategories = (data: any) => {
  return connect_Api.post(`/category`, data);
};
//update
export const UpdateCategories = (data: any) => {
  return connect_Api.get(`/category/${data?._id}`, data);
};

//xóa
export const DeleteCategories = (id: any) => {
  return connect_Api.delete(`/category/${id}`);
};

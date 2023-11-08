import useSWR, { mutate } from "swr";
import axios from "axios";
import useGetToken from "./getToken";


const apiUrl = `${process.env.NEXT_PUBLIC_BDS_API_PROJECT}`;

const fetcher = (url: any) => fetch(url).then((res) => res.json())
export const fetchUser = (id: string) => {
  const url = `/api/projects/${id}`;
  return useSWR(url, fetcher);
};

export const createProject = async (data: any) => {
  const url = `${apiUrl}`;
  const token = useGetToken();
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),

    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  });
  return await res.json();
}
export const getProjectById = async (projectId: any) => {
  const response = await fetch(`${apiUrl}/${projectId}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Không thể lấy thông tin dự án.');
  }
};


export const updateProject = async (projectId: any, projectData: any) => {
  const response = await fetch(`${apiUrl}/${projectId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  if (response.ok) {
    mutate(apiUrl);
    return true;
  } else {
    throw new Error('Cập nhật dự án thất bại.');
  }
};

export const removeProject = async (id: string | number) => {
  const url = `${apiUrl}/${id}`;
  const res = await fetch(url, {
    method: 'DELETE',
  });
  return await res.json();
}


export const upLoadFiles = async (files: any) => {
  if (files) {
    const CLOUD_NAME = `${process.env.NEXT_PUBLIC_CLOUD_NAME}`;
    const PRESET_NAME = `${process.env.NEXT_PUBLIC_PRESET_NAME}`;
    const FOLDER_NAME = "portfolio";
    const urls = [];
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formDataFL = new FormData(); // key : value

    formDataFL.append("upload_preset", PRESET_NAME);
    formDataFL.append("folder", FOLDER_NAME);

    for (const file of files) {
      formDataFL.append("file", file);
      const response = await axios.post(api, formDataFL, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      urls.push(response?.data.secure_url);
    }
    console.log(urls);
    return urls;
  }
};

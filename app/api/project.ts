import useSWR from "swr";
import axios from "axios";
import useGetToken from "./getToken";

const apiUrl = `${process.env.NEXT_PUBLIC_BDS_API}/projects`;

const fetcher = (url: any) => fetch(url).then((res) => res.json());
export const fetchUser = (id: string) => {
  const url = `/api/projects/${id}`;
  return useSWR(url, fetcher);
};

export const createProject = async (data: any) => {
  const token = useGetToken();
  const url = `${apiUrl}`;
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
export const removeProject = async (id: string | number) => {
  const url = `${apiUrl}/` + id;
  return await fetch(url, {
    method: "DELETE",
  }).then((res) => res.json());
};

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

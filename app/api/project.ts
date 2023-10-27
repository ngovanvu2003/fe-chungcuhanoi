import useSWR from "swr";
import axios from "axios";
import { log } from "console";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const fetchUser = (id: string) => {
    const url = `/api/projects/${id}`;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSWR(url, fetcher);
};
// const proxy = require('http-proxy-middleware');
// module.exports = function(app) {
//     app.use('/api',
//         proxy({
//             target: 'http://localhost:8000',
//             changeOrigin: true,
//         })
//     );
// };

export const createProject = async (data: any) => {
    const url = 'http://localhost:8080/api/projects';
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await res.json();
}
export const removeProject = async (id: string | number) => {
    const url = `http://localhost:8080/api/projects/${id}`;
    const res = await fetch(url, {
        method: 'DELETE',
    });
    return await res.json();
}

export const upLoadFiles = async (files: any) => {
    if (files) {
        const CLOUD_NAME = "ddu7xygjs";
        const PRESET_NAME = "ECMA-SCRIP";
        const FOLDER_NAME = "portfolio";
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const formDataFL = new FormData(); // key : value

        formDataFL.append("upload_preset", PRESET_NAME);
        formDataFL.append("folder", FOLDER_NAME);

        for (const file of files) {
            formDataFL.append("file", file)
            const response = await axios.post(api, formDataFL, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            urls.push(response?.data.secure_url)
        };
        console.log(urls)
        return urls
    }

}


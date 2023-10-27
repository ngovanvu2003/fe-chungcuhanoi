import { FormSignup } from '@/schemas/auths';
import { FormLogin } from '@/schemas/auths';



const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const fetchUser = (id: string) => {
    const url = `/api/user/${id}`;

    return useSWr(url, fetcher);
};
const apiUrl = `${process.env.NEXT_PUBLIC_BDS_API}`;

export const Signup = async (data: FormSignup) => {
    const url = `${apiUrl}/signup`;
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export const Signin = async (data: FormLogin) => {
    const url = `${apiUrl}/signin`;
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
};

// Hàm get one
export const getUser = async (token: any) => {
    const response = await fetch(`${apiUrl}/user/token/${token}`);

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Không thể lấy thông tin danh mục.');
    }
};


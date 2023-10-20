import { FormSignup } from '@/schemas/auths';
import { FormLogin } from '@/schemas/auths';
import useSWR from 'swr';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const fetchUser = (id: string) => {
    const url = `/api/user/${id}`;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSWR(url, fetcher);
};


export const Signup = (data: FormSignup) => {
    const url = 'http://localhost:8000/api/signup';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export const Signin = (data: FormLogin) => {
    const url = `http://localhost:8000/api/signin`;
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
};
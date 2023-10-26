import { FormSignup } from '@/schemas/auths';
import { FormLogin } from '@/schemas/auths';
import useSWR from 'swr';
import useGetToken from './getToken';
import axios from 'axios';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const fetchUser = (id: string) => {
    const url = `/api/user/${id}`;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSWR(url, fetcher);
};
const apiUrl = "http://localhost:8080/api";

export const Signup = async (data: FormSignup) => {
    const url = `/${apiUrl}/signup`;
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export const Signin = async (data: FormLogin) => {
    const url = `/${apiUrl}/signin`;
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
};


import { FormSignup } from '@/schemas/auths';
import { FormLogin } from '@/schemas/auths';
import useSWR from 'swr';
import useGetToken from './getToken';

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

export const useFetchDataUser = () => {
    // Sử dụng SWR để gửi yêu cầu API lấy token
    const { data: tokenData, error: tokenError } = useSWR(`${apiUrl}/user`, fetcher);

    // Kiểm tra xem có lỗi khi lấy token hay không
    if (tokenError) {
        // Xử lý lỗi khi lấy token
        return {
            data: null,
            isLoading: false,
            isError: true,
        };
    }

    // Lấy token từ dữ liệu phản hồi
    const token = useGetToken(); // Giả sử token nằm trong phản hồi JSON

    // Sử dụng token trong lời gọi API tiếp theo
    const { data, error } = useSWR(`${apiUrl}/profile/`, (url) =>
        fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.json())
    );

    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
};
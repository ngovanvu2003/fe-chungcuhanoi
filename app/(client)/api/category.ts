import useSWR from 'swr';

const apiUrl = 'http://127.0.0.1:8000/api/category';  // Thay thế bằng API endpoint thực tế của bạn

const fetcher = async (url: any) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const useFetchData = () => {
    const { data, error } = useSWR(apiUrl, fetcher);
    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
};
export const removeCategories = (id:any)=>{
    const url = `http://localhost:8000/api/category/${id}`;
    return fetch(url, {
        method: 'DELETE',
        
    }).then((res) => res.json());
}
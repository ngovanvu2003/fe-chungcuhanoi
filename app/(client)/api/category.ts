import useSWR from 'swr';

const apiUrl = 'http://localhost:8080/api/category';

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
export const removeCategories = (id: any) => {
    const url = `http://localhost:8080/api/category/${id}`;
    return fetch(url, {
        method: 'DELETE',

    }).then((res) => res.json());
}
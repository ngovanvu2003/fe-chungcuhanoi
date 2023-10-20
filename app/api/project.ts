import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export const fetchUser = (id: string) => {
    const url = `/api/projects/${id}`;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSWR(url, fetcher);
};


export const createProject = (data: any) => {
    const url = 'http://localhost:8080/api/projects';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

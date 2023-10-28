import useSWR, { mutate } from 'swr';
import { RequestInfo } from 'undici-types';


const fetcher = async (url: RequestInfo) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const apiUrl = `${process.env.NEXT_PUBLIC_BDS_API_CATEGORY}`;


export const useFetchData = () => {
    const { data, error } = useSWR(apiUrl, fetcher);
    
    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
};

// Hàm get one
export const getCategoryById = async (categoryId: any) => {
    const response = await fetch(`${apiUrl}/${categoryId}`);

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Không thể lấy thông tin danh mục.');
    }
};

// Hàm cập nhật danh mục
export const updateCategory = async (categoryId: any, updatedCategoryData: any) => {
    const response = await fetch(`${apiUrl}/${categoryId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCategoryData),
    });

    if (response.ok) {
        // Nếu cập nhật thành công, cập nhật lại dữ liệu bằng cách gọi mutate
        mutate(apiUrl);
        return true;
    } else {
        throw new Error('Cập nhật danh mục thất bại.');
    }
};

// Hàm thêm mới danh mục
export const addCategory = async (newCategoryData: any) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCategoryData),
    });

    if (response.ok) {
        // Nếu thêm mới thành công, cập nhật lại dữ liệu bằng cách gọi mutate
        mutate(apiUrl);
        return true;
    } else {
        throw new Error('Thêm mới danh mục thất bại.');
    }
};


export const removeCategories = async (id: string | number) => {
    const url = `${apiUrl}/${id}`;
    return await fetch(url, {
        method: 'DELETE',

    }).then((res) => res.json());
}
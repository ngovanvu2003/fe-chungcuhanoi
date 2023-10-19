"use client"
import { useFetchData } from '@/app/api/category';
import React from 'react';

const DataTable = () => {
    const { data: cate, isLoading, isError } = useFetchData();  // Call useFetchData to fetch data
    // const { data } = cate;

    console.log(cate);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    return (
        <div>
            <h1>Data Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        {/* Add more table headers based on your data structure */}
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map((item: any) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))} */}
                    {/* {data.map((category: any) => (
                        <tr key={category._id}>
                            <td>{category._id}</td>
                            <td>{category.category_name}</td>
                            <td>{category.category_description || 'Không có mô tả'}</td>
                            <td>{category.createdAt}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;

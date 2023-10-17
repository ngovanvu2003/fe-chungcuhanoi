"use client"
import React from 'react'



const signup = () => {
  return (
    <div className="system-ui bg-gray-300 pt-8 md:p-8">
            <div className="container mx-auto p-0">
                <div className="flex justify-center my-12">
                    <div className="w-full lg:xl:w-3/4 justify-center flex">
                        <div className="w-full lg:w-7/12 bg-white lg:p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 lg:text-3xl text-center ">ĐĂNG KÝ TÀI KHOẢN! 👤</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                
                               <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                                        Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="Name"
                                        type="Name"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                    
                            
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0 w-[100%]">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" >
                                            Mật khẩu
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                            required
                                        />
                                    </div>
                                    <div className="md:ml-2 w-[100%]">
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Xác nhận mật khẩu
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            type="password"
                                            placeholder="******************"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full  focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        ĐĂNG KÝ NGAY
                                    </button>
                                </div>
                                <div className="mb-6 text-center relative">
                                    <div className="flex justify-between items-center">
                                        <hr className="border-t w-1/3" />
                                        <p className="text-sm bg-white">HOẶC</p>
                                        <hr className="border-t w-1/3" />
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <span> Bạn đã có tài khoản? </span>
                                
                                        <a href='/sigin'
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 no-underline"
                                        >
                                            Đăng nhập!
                                        </a>
                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 lg:p-4  rounded-b-lg"></div>
        </div>
  )
}

export default signup
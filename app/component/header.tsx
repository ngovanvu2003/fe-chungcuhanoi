import React from 'react';
import ScrollHandler from './ScrollHandler';



function Header() {

    return (
        <>
            <ScrollHandler />
            <div className='container'>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://www.batdongsanhanoi.net.vn/" className="flex items-center">
                            <img
                                src="https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"
                                className="h-10 mr-"
                                alt="Flowbite Logo" />
                            <div
                                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                                id="navbar-sticky"
                            >
                                <ul className="ml-10 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                            aria-current="page"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </a>
                        <div >
                            <div className="flex md:order-2">


                                <button
                                    type="button"
                                    className="ml-3 text-black bg-transparent hover:bg-gray-100 hover:transition duration-300 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center border-10 mr-3 md:mr-0 dark:text-black dark:bg-transparent dark:hover:bg-gray-200 "                >
                                    Đăng Nhập
                                </button>

                                

                            </div>
                        </div>

                    </div>
                </nav>

            </div>
        </>


    );
}

export default Header;

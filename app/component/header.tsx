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

                                <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                                        <a href="#" className="flex items-center">
                                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                                        </a>
                                        <button
                                            data-collapse-toggle="navbar-hamburger"
                                            type="button"
                                            className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            aria-controls="navbar-hamburger"
                                            aria-expanded="false"
                                        >
                                            <span className="sr-only">Open main menu</span>
                                            <svg
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 17 14"
                                            >
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                            </svg>
                                        </button>
                                        <div className="hidden w-full" id="navbar-hamburger">
                                            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                                <li>
                                                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover-bg-gray-700 dark:hover-text-white">Pricing</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover-text-white">Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>

                            </div>
                        </div>

                    </div>
                </nav>

            </div>
        </>


    );
}

export default Header;

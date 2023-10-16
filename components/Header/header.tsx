'use client'

import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import Link from 'next/link';



function Header() {

  return (
    <>
      <div className='container'>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://www.batdongsanhanoi.net.vn/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
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
                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent transition-all md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      aria-current="page"
                    >
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent transition-all md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Dự án
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent transition-all md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Tin tức
                    </a>
                  </li>
                </ul>
              </div>
            </a>
            <div >
              <div className="flex md:order-2 items-center gap-1">
                <button
                  type="button"
                  className="ml-3 text-black md:block hidden bg-transparent hover:bg-gray-100 hover:transition duration-300 px-2 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  py-2 text-center border-10 mr-3 md:mr-0 dark:text-black dark:bg-transparent dark:hover:bg-gray-200 "                >
                  Đăng Nhập
                </button>
                <button className=' md:hidden block ' >
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6  h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>
                          <SheetClose asChild>
                            <Link href="" className="w-[90%] mx-auto mr-5 bg-red-300 text-center hover:bg-red-500 transition-all py-4 text-white border">Đăng nhập</Link>
                          </SheetClose>
                        </SheetTitle>
                        <div className="flex h-screen flex-col justify-between border-e bg-white">
                          <div className="px-4 py-6">
                            <ul className="mt-6 space-y-1">
                              <li className="border">
                                <a
                                  href=""
                                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                  Trang chủ
                                </a>
                              </li>
                              <li className="border">
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                  <summary
                                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                  >
                                    <span className="text-sm font-medium"> Dự án </span>

                                    <span
                                      className="shrink-0 transition duration-300 group-open:-rotate-180"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </span>
                                  </summary>

                                  <ul className="mt-2 space-y-1 px-4">
                                    <li>
                                      <a
                                        href=""
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                      >
                                        Banned Users
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        href=""
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                      >
                                        Calendar
                                      </a>
                                    </li>
                                  </ul>
                                </details>
                              </li>

                              <li className="border">
                                <a
                                  href=""
                                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                  Tin tức
                                </a>
                              </li>


                            </ul>
                          </div>

                        </div>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
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

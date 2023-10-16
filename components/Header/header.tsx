'use client'

import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import Link from 'next/link';
import Image from 'next/image'
import { AiOutlineHome } from "react-icons/ai"
import { FaHotel } from "react-icons/fa6";
import { BsNewspaper } from "react-icons/bs";

import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  return (
    <>
      <div className='container'>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
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
                    <Link
                      href="/"
                      className={`link ${pathname === '/' ? 'active' : ''} block py-2 text-gray-900 pl-3 pr-4  rounded md:bg-transparent transition-all `}
                      aria-current="page"
                    >
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/du-an"
                      className={`link ${pathname === '/du-an' ? 'active' : ''} block py-2 text-gray-900 pl-3 pr-4  rounded md:bg-transparent transition-all`}
                    >
                      Dự án
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tinruc"
                      className={`link ${pathname === '/' ? 'active' : ''} block py-2 text-gray-900 pl-3 pr-4  rounded md:bg-transparent transition-all `}
                    >
                      Tin tức
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div >
              <div className="flex md:order-2 items-center gap-1">

                <div className=' md:hidden block ' >
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
                          <Link href="/">
                            <Image
                              src="https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"
                              className="h-10 mr-"
                              alt="Flowbite Logo" width={100} height={100} />

                          </Link>
                        </SheetTitle>
                        <div className="flex h-screen flex-col justify-between border-e bg-white">
                          <div className="px-4 py-6">
                            <ul className="mt-6 text-left space-y-1 text-gray-900">
                              <li>
                                <Link
                                  href="/"
                                  className={`link ${pathname === '/' ? 'active' : ''}   flex  items-center gap-2  rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                                  aria-current="page" >
                                  <AiOutlineHome />
                                  Trang chủ
                                </Link>
                              </li>
                              <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                  <summary
                                    className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                  >
                                    <span className="text-sm font-medium  flex  items-center gap-2 ">
                                      <FaHotel />
                                      Dự án
                                    </span>

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
                                      <Link
                                        href=""
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                      >
                                        Banned Users
                                      </Link>
                                    </li>

                                    <li>
                                      <Link
                                        href=""
                                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                      >
                                        Calendar
                                      </Link>
                                    </li>
                                  </ul>
                                </details>
                              </li>

                              <li>
                                <Link
                                  href=""
                                  className={`link ${pathname === '/' ? 'active' : ''}    flex  items-center gap-2  rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                                >
                                  <BsNewspaper />
                                  Tin tức
                                </Link>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </SheetHeader>
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button type="submit">Save changes</Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>


  );
}

export default Header;

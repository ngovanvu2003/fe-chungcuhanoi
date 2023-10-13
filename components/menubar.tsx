import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menu"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function MenuBar() {

  return (
    <>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://www.batdongsanhanoi.net.vn/" className="flex items-center">
          <img
            src="https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"
            className="h-10 mr-"
            alt="Flowbite Logo" />
        </a>
        <Menubar className='border-none'>
          <MenubarMenu >
            <MenubarTrigger className='hover:underline transition duration-400'>Home</MenubarTrigger>
            <MenubarTrigger className='hover:bg-gray-100 hover:text-black px-5 py-2 rounded-md text-s'>Dự Án</MenubarTrigger>
            <MenubarTrigger className='hover:bg-gray-100 hover:text-black px-5 py-2 rounded-md text-s'>Tin Tức</MenubarTrigger>
            <MenubarTrigger className='hover:bg-gray-100 hover:text-black px-5 py-2 rounded-md text-s'>Phân tích đánh giá</MenubarTrigger>
            <MenubarTrigger className='hover:bg-gray-100 hover:text-black px-5 py-2 rounded-md text-s'>Wiki BĐS</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>



    </>
  );
}

export default MenuBar;

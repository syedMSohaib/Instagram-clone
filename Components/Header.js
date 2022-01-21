import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  HomeIcon,
  ChatIcon,
  MenuIcon,
  PlusIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";
// import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";

export default function Header() {
  const session = useSession();

  const [open, setOpen] = useRecoilState(modalState);

  /* 
    for readonly value
    const open = useRecoilValue(modalState);
  */

  // console.log("session", session);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        <div className="relative w-24 lg:inline-grid cursor-pointer ">
          <Image
            src={"/images/logo.png"}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>

        <div className="max-w-xs">
          <div className={"relative mt-1 p-3 rounded-md"}>
            <div
              className={
                "absolute inset-y-0 pl-3 flex items-center pointer-events-none"
              }
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 border h-10 w-100 rounded-sm border-gray-300 block w-full pl-10 sm:text-sm focus:border-black focus:ring-black"
              type={"text"}
              placeholder="Search"
            ></input>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="w-8 md:hidden" />

          {session.status !== "unauthenticated" ? (
            <>
              <div className="relative navBtn">
                <ChatIcon className="navBtn" />
                <div
                  className={
                    "absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white"
                  }
                >
                  3
                </div>
              </div>
              <PlusIcon
                onClick={() => setOpen(true)}
                className="navBtn rounded-md border border-gray-600"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                src={session?.data?.user?.image}
                onClick={signOut}
                className="rounded-full h-10 cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

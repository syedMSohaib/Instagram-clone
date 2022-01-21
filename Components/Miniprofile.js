import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Miniprofile() {
  const session = useSession();

  // console.log(session);

  return (
    <div className="mt-10 ml-7 flex items-center justify-between">
      <img
        src={session?.data?.user?.image}
        className="h-14 border p-[2px] rounded-full object-contain  hover:scale-110 transition transform duration-200 ease-out"
      ></img>
      <p className="flex-1 pl-2 mr-5">
        <span className="font-semibold">{session?.data?.user?.username}</span>
        <p className="text-gray-500 text-sm">{session?.data?.user?.name}</p>
      </p>
      <button
        type="button"
        onClick={signOut}
        className="font-semibold text-blue-400"
      >
        Sign Out
      </button>
    </div>
  );
}

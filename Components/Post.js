import React from "react";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

export default function Post({ post }) {
  return (
    <div className="mt-5 bg-white">
      <section className="flex items-center  p-4 border-gray-200 border">
        <img
          className="mr-3 w-12 h-12 object-contain border p-1 rounded-full"
          src={post.avatar}
        ></img>
        <p className="flex-1 font-bold">{post.username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </section>
      {post.media.map((img) => (
        <img className={"w-full object-cover"} src={img} />
      ))}

      <div className={"flex justify-between px-4 pt-4"}>
        <div className="flex space-x-4 flex-1">
          <HeartIcon className={"postActionBtn"} />
          <ChatIcon className={"postActionBtn"} />
          <PaperAirplaneIcon className={"postActionBtn rotate-45"} />
        </div>

        <BookmarkIcon className={"postActionBtn"} />
      </div>
      <div className="p-5 ">
        <p>3,721 likes</p>
        <p className={"mt-1 truncate"}>
          <span className="font-bold mr-1">{post.username} </span>
          {post.caption}
        </p>
      </div>

      {/* Comments */}

      <div className="flex items-center p-4">
        <EmojiHappyIcon className="postActionBtn" />

        <input
          type={"text"}
          placeholder="Add a comment..."
          className="flex-1 border-none focus:ring-0 outline-none"
        />

        <button type="button" className="font-semibold text-blue-400">
          Post
        </button>
      </div>
    </div>
  );
}

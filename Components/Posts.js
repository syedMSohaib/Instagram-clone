import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 1,
    username: "syedmsohaib",
    avatar: "/images/avatar.jpeg",
    caption: "hey check out this cool instagram  clone on NextJS",
    media: ["/images/banner1.png"],
  },
  {
    id: 2,
    username: "syedmsohaib",
    avatar: "/images/avatar.jpeg",
    caption: "Tailwind Css is so coll",
    media: ["/images/banner2.jpg"],
  },
];

export default function Posts() {
  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

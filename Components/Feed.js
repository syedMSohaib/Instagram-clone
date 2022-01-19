import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import Miniprofile from "./Miniprofile";

export default function Feed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* Story and Feed */}
      <section className="col-span-2">
        <Stories />

        <Posts />
      </section>

      {/* Mini profile and suggestions */}
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20">
          <Miniprofile />
        </div>
      </section>
    </div>
  );
}

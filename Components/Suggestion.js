import faker from "@faker-js/faker";
import React, { useEffect, useState } from "react";

export default function Suggestion() {
  const [peoples, setpeoples] = useState([]);

  const fetchUsers = () => {
    const suggestions = [...Array(5)].map((_, i) => {
      return {
        ...faker.helpers.contextualCard(),
        id: i,
      };
    });

    setpeoples(suggestions);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="mt-4 ml-8">
      <div className="flex items-center ">
        <p className="flex-1 text-gray-500 text-md">Suggestions for you</p>
        <button
          type="button"
          className="font-bold text-md text-right text-gray-700"
        >
          See All
        </button>
      </div>
      <div className="mt-4">
        {peoples.map((people) => {
          return (
            <div
              key={"sg_" + people.id}
              className="flex items-center mt-3 justify-between"
            >
              <img
                className={"rounded-full h-10 border p-[2px] object-contain"}
                src={people.avatar}
              ></img>
              <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">{people.username}</h2>
                <h3 className="text-gray-400 text-xs truncate">
                  Works at {people.company.name}
                </h3>
              </div>

              <button type="button" className={"text-blue-500 ml-3"}>
                Follow
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

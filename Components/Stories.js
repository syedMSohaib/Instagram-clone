import faker from "@faker-js/faker";
import Story from "./Story";
import { useEffect, useState } from "react";

export default function Stories() {
  const [peoples, setpeoples] = useState([]);

  const fetchUsers = () => {
    const suggestions = [...Array(20)].map((_, i) => {
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
    <div
      className={
        "flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-hide scrollbar-thin scrollbar-thumb-black"
      }
    >
      {peoples
        ? peoples.map((people) => {
            return (
              <Story
                key={people.id}
                username={people.username}
                avatar={people.avatar}
              />
            );
          })
        : ""}
    </div>
  );
}

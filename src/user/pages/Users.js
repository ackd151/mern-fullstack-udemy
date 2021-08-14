import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      key: "u1",
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;

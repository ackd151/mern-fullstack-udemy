import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      key: "u1",
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://www.wolfhooker.com/wp-content/uploads/2019/02/176-1763433_user-account-profile-avatar-person-male-icon-icon-user-account.png.jpeg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;

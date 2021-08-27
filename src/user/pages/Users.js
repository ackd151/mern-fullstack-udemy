import React, { useState, useEffect } from "react";

import UsersList from "../components/UsersList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

const Users = () => {
  const [users, setUsers] = useState([]);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users`
        );

        setUsers(data.users);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUsers();
  }, [sendRequest]);

  // const DUMMY_USERS = [
  //   {
  //     key: "u1",
  //     id: "u1",
  //     name: "Max Schwarz",
  //     image:
  //       "https://www.wolfhooker.com/wp-content/uploads/2019/02/176-1763433_user-account-profile-avatar-person-male-icon-icon-user-account.png.jpeg",
  //     places: 3,
  //   },
  // ];

  return (
    <React.Fragment>
      {isLoading && (
        <div className='center'>
          <LoadingSpinner />
        </div>
      )}
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && users && <UsersList items={users} />}
    </React.Fragment>
  );
};

export default Users;

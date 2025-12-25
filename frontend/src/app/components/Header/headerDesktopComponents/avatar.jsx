"use client";

import React from "react";
import { useAuth } from "../context/authContext";

const Avatar = () => {
  const { logout } = useAuth();
  const { user } = useAuth();
  return (
    <>
      <div>
        <div
          className="w-12 h-12 lg:w-10 lg:h-10 xl:w-10 xl:h-10 cursor-pointer"
          onClick={logout}
        >
          {user?.name}
        </div>
      </div>
    </>
  );
};

export default Avatar;

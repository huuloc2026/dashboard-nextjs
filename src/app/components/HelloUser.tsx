"use client";

import { useAuth } from "@/app/AuthProvider";
import React, { useEffect, useLayoutEffect, useState } from "react";

const HelloUser = () => {
  const { token, user } = useAuth();

  return <div>Hello, {user ? user.name : "Guest"}</div>;
};

export default HelloUser;

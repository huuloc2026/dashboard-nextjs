"use client";

import { useAuth } from "@/app/AuthProvider";
import React, { useState } from "react";

const HelloUser = () => {
  const { user } = useAuth();

  return <div>Hello, {user ? user.name : "Guest"}</div>;
};

export default HelloUser;

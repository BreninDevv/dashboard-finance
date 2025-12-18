"use client";

import React from "react";
import Todo from "./todo";
import Desires from "./desires";

export default function RightColumn() {
  return (
    <div className="flex flex-col gap-4">
      <Todo />
      <Desires />
    </div>
  );
}

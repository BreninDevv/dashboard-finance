"use client";

import React from "react";
import Todo from "./todo";
import Desires from "./desires";

export default function RightColumn() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
      <div className="flex-1 min-w-0">
        <Todo />
      </div>
      <div className="flex-1 min-w-0 pb-4">
        <Desires />
      </div>
    </div>
  );
}

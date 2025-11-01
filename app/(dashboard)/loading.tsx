import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-[100vh] gap-5">
      <div className="flex justify-center items-center">
        <div className="absolute animate-spin rounded-md h-16 w-16 border-4  border-emerald-500"></div>
      </div>
    </div>
  );
};

export default loading;

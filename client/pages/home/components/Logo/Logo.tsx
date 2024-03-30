import React from "react";
import Image from "@/node_modules/next/image";

const Logo: React.FC = () => {
  return (
    <div className="p-10">
      <Image src="/logo.png" alt="" width="200" height="200"></Image>
    </div>
  );
};

export default Logo;

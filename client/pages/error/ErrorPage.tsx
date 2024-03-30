"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ErrorPage: React.FC = () => {
  const [time, setTime] = useState<number>(5);
  const router = useRouter();

  useEffect(() => {
    if(time === 0)
        router.push('/');

    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <div className="h-fit min-h-screen w-screen color-white flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 relative text-white">
      <h2 className="text-7xl">404</h2>
      <span className="h-16 w-px block bg-sky-700 mx-5 rounded-lg"></span>
      <h2 className="w-96">
        Strona o podanej scieżce nie istenieje, za {time}s wrócisz na strone
        główną
      </h2>
    </div>
  );
};

export default ErrorPage;

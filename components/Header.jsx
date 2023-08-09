"use client";

import { useSession } from "next-auth/react";
import { LoginButton } from "./LoginButton";

export const Header = () => {
  const data = useSession();

  if (data.status === "authenticated") {
    return (
      <div>
        <h1>Welcome, </h1>
        <span className="font-bold text-2xl">{data.data.user.name}</span>

        <p>{JSON.stringify(data)}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-row items-center justify-center h-screen -mt-16 ">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-3">Login to get started</h1>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
          voluptate asperiores iure blanditiis, minima earum perspiciatis
          recusandae, vel tempora beatae quibusdam voluptatem temporibus
          sapiente. Harum consectetur ratione deserunt alias quos.
        </p>
      </div>
      <div className="flex-1 text-center">
        <LoginButton />
      </div>
    </div>
  );
};

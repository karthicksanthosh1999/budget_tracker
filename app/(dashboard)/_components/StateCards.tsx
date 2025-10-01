"use client";
import { UserSettings } from "@/lib/generated/prisma";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  from: Date;
  to: Date;
  userSettings: UserSettings;
}

const StateCards = ({ from, to, userSettings }: Props) => {
  const statsQuery = useQuery();
  return <div></div>;
};

export default StateCards;

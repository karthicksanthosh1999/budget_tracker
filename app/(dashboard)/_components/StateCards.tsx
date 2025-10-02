"use client";
import { GetBalanceStatusResponseType } from "@/app/api/stacks/balance/route";
import SkeletonWrapper from "@/components/SkeletonWrapper";
import { UserSettings } from "@/lib/generated/prisma";
import { DateToUTCDate, GetFormatterForCurrency } from "@/lib/helper";
import { useQuery } from "@tanstack/react-query";
import { TrendingUp } from "lucide-react";
import React, { ReactNode, useMemo } from "react";

interface Props {
  from: Date;
  to: Date;
  userSettings: UserSettings;
}

const StateCards = ({ from, to, userSettings }: Props) => {
  const statsQuery = useQuery<GetBalanceStatusResponseType>({
    queryKey: ["overview", "stats", from, to],
    queryFn: () =>
      fetch(
        `/api/stats/balance?from=${DateToUTCDate(from)}&to=${DateToUTCDate(
          to
        )}}`
      ).then((res) => res.json()),
  });

  const formatter = useMemo(() => {
    return GetFormatterForCurrency(userSettings.currency);
  }, [userSettings.currency]);

  const income = statsQuery.data?.income || 0;
  const expense = statsQuery.data?.expense || 0;

  const balance = income - expense;

  return (
    <div className="relative flex w-full flex-wrap gap-2 md:flex-nowrap">
      <SkeletonWrapper isLoading={statsQuery.isFetched}>
        <StatCard
          formatter={formater}
          value={income}
          title="Income"
          icon={
            <TrendingUp
              className="h-12 w-12 items-center rounded-lg p-2 text-emerald-500 
          bg-emerald-400/10"
            />
          }
        />
      </SkeletonWrapper>
    </div>
  );
};

export default StateCards;

function StatCard({
  formater,
  value,
  title,
  icon,
}: {
  formatter: Intl.NumberFormat;
  icon: ReactNode;
  title: String;
  value: number;
}) {}

"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClinet = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const QueryWrapper = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClinet}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryWrapper;

"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {};

const QueryProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
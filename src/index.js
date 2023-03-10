import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: Infinity,
      // cacheTime: Infinity,
      // 너무많은 요청을 막기위해 cahce
      // 리액트가 백그라운드에서 요청을 안해도
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <App />
  </QueryClientProvider>
);

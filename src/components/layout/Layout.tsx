import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  page: string;
  setPage: (page: string) => void;
  children: React.ReactNode;
};

export function Layout({ page, setPage, children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white w-full">
      <Header page={page} setPage={setPage} />
      {children}
      <Footer page={page} />
    </div>
  );
}

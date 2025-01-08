"use client";

import React, { FormEvent, useState } from "react";

type Props = {};

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";

const SearchBar = (props: Props) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(search);
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex items-center justify-center gap-3"
    >
      <Input
        placeholder="search products"
        className="w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit">Seach</Button>
    </form>
  );
};

export default SearchBar;

"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

const SearchInput = () => {
  const searchParams = useSearchParams();
  return <Input defaultValue={searchParams.get("term") || ""} />;
};

export default SearchInput;

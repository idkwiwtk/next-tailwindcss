"use client";

import { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";

const Search = () => {
  const [text, setText] = useState<string>("");
  return (
    <Input
      className={`rounded-full text-white ${
        text && "before::content-[hello_world]"
      }`}
      type="text"
      value={text}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
      }}
    />
  );
};

export default Search;

"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    router.push(`/restaurants?search=${search}`);
  };

  return (
    <form className="relative flex gap-2" onSubmit={handleSearchSubmit}>
      <Input
        placeholder="Buscar Restaurantes"
        className="border-none pr-11 focus:outline-none"
        type="text"
        name="search"
        id="search"
        autoComplete="search"
        onChange={handleChange}
        value={search}
      />
      <Button size={"icon"} className="absolute right-0" type="submit">
        <SearchIcon size={20} />
      </Button>
    </form>
  );
};

export default Search;

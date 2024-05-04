import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="relative flex gap-2">
      <Input
        placeholder="Buscar Restaurantes"
        className="border-none pr-11 focus:outline-none"
        type="text"
        name="search"
        id="search"
        autoComplete="search"
      />
      <Button size={"icon"} className="absolute right-0">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;

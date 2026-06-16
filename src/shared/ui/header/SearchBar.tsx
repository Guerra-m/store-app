import { useState, type KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div
      className="
        flex
        items-center
        gap-2

        rounded-xl

        border
        border-outline-variant

        bg-surface-container-low

        px-4
        py-2

        min-w-70
      "
    >
      <span
        className="
          material-symbols-outlined

          text-on-surface-variant
          text-[20px]
        "
      >
        search
      </span>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Buscar productos..."
        className="
          w-full

          bg-transparent
          outline-none

          text-sm
          font-admin

          placeholder:text-on-surface-variant
        "
      />
    </div>
  );
};

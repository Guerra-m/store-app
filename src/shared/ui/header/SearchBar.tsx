export const SearchBar = () => {

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
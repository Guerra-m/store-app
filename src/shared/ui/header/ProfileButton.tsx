type Props = {
  onClick: () => void;
};

export const ProfileButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center
        w-11 h-11
        rounded-xl
        bg-surface-container-low
        border border-outline-variant
        text-on-surface
        hover:bg-surface-container
        transition-all cursor-pointer
      "
    >
      <span className="material-symbols-outlined">
        person
      </span>
    </button>
  );
};
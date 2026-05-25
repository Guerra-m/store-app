import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import { ProfileButton } from "./ProfileButton";
import { CartButton } from "./CartButton";

export const Header = () => {
  const navigate = useNavigate();

  const handleOpenProfile = () => {
    navigate("/perfil");
  };

  return (
    <header
      className="
        sticky top-0 z-50
        flex items-center justify-between
        bg-surface/95 backdrop-blur-md
        border-b border-outline-variant
        px-8 py-4 shadow-warm
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-10">
        <Logo />
        <Navbar />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <SearchBar />

        <ProfileButton onClick={handleOpenProfile} />

        <CartButton />
      </div>
    </header>
  );
};
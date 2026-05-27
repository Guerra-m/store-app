import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../../modules/auth/store/auth.store";

const links = [
  {
    to: "/",
    label: "Tienda",
  },
  {
    to: "/categorias",
    label: "Categorías",
  },
];

export const Navbar = () => {

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  return (

    <nav className="flex items-center gap-6">

      {links.map((link) => (

        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `
              text-sm
              font-admin
              font-semibold

              transition-colors

              ${
                isActive
                  ? "text-primary"
                  : "text-on-surface hover:text-primary"
              }
            `
          }
        >
          {link.label}
        </NavLink>

      ))}

      {/* SOLO SI ESTÁ LOGEADO */}
      {isAuthenticated && (
        <NavLink
          to="/pedidos"
          className={({ isActive }) =>
            `
              text-sm
              font-admin
              font-semibold

              transition-colors

              ${
                isActive
                  ? "text-primary"
                  : "text-on-surface hover:text-primary"
              }
            `
          }
        >
          Mis pedidos
        </NavLink>
      )}

    </nav>
  );
};
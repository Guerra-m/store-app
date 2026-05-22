import { NavLink } from "react-router-dom";

const links = [
  {
    to: "/",
    label: "Tienda",
  },
  {
    to: "/categorias",
    label: "Categorías",
  },
  {
    to: "/ofertas",
    label: "Ofertas",
  },
];

export const Navbar = () => {

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

    </nav>
  );
};
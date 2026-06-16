import { useState } from "react";
import { FooterSection } from "./FooterSection";
import { FooterLink } from "./FooterLink";
import { FooterContactItem } from "./FooterContactItem";
import secreto from "../../../assets/secreto.jpg";

const empresaLinks = [
  "Sobre Nosotros",
  "Nuestros Productos",
  "Sostenibilidad",
];

const soporteLinks = [
  "Centro de ayuda",
  "Envíos y devoluciones",
  "Contacto",
];

const contactItems = [
  {
    icon: "mail",
    text: "foodstore@email.com",
  },
  {
    icon: "call",
    text: "+54 261 555 555",
  },
  {
    icon: "location_on",
    text: "Mendoza, Argentina",
  },
];

export const Footer = () => {
  const [showSecreto, setShowSecreto] = useState(false);

  return (
    <>

    <footer
      className="mt-20 border-t border-outline-variant bg-surface-container-low

        px-10
        py-14
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl

          grid
          gap-12

          md:grid-cols-4
        "
      >

        {/* BRAND */}
        <section className="space-y-4">

          <h2
            className="
              text-2xl
              font-bold

              text-primary
              font-store
            "
          >
            FoodStore
          </h2>

          <p
            className="
              max-w-xs

              text-sm
              leading-6

              text-on-surface-variant
              font-admin
            "
          >
            Creando puentes entre el campo y tu mesa
            con productos honestos y de calidad excepcional.
          </p>

        </section>

        {/* EMPRESA */}
        <FooterSection title="EMPRESA">

          <ul
            className="
              space-y-3
              text-sm
              text-on-surface-variant
              font-admin
            "
          >

            {empresaLinks.map((link) => (

              <FooterLink key={link}>
                {link}
              </FooterLink>

            ))}

          </ul>

        </FooterSection>

        {/* SOPORTE */}
        <FooterSection title="SOPORTE">

          <ul
            className="
              space-y-3
              text-sm
              text-on-surface-variant
              font-admin
            "
          >

            {soporteLinks.map((link) => (
              <FooterLink
                key={link}
                onClick={link === "Contacto" ? () => setShowSecreto(true) : undefined}
              >
                {link}
              </FooterLink>
            ))}

          </ul>

        </FooterSection>

        {/* CONTACTO */}
        <FooterSection title="CONTACTO">

          <div
            className="
              space-y-3
              text-sm
              text-on-surface-variant
              font-admin
            "
          >

            {contactItems.map((item) => (

              <FooterContactItem
                key={item.text}
                icon={item.icon}
                text={item.text}
              />

            ))}

          </div>

        </FooterSection>

      </div>

    </footer>

      {showSecreto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setShowSecreto(false)}
        >
          <img
            src={secreto}
            alt="Contacto"
            className="max-w-[70vw] max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
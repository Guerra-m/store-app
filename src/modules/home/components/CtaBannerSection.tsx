type Props = {
  onRegister: () => void;
};

export const CtaBannerSection = ({ onRegister }: Props) => (
  <section className="px-6 py-6">
    <div className="max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-10 md:px-14 md:py-12 shadow-warm">

        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-on-primary/80 text-sm font-medium mb-1">¿Primera vez aquí?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-on-primary font-store leading-tight">
              Creá tu cuenta y empezá<br className="hidden md:block" /> a pedir ahora
            </h2>
          </div>

          <button
            onClick={onRegister}
            className="shrink-0 flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              person_add
            </span>
            Registrarme gratis
          </button>
        </div>
      </div>
    </div>
  </section>
);

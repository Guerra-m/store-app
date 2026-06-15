type Props = {
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;

  onIncrease: () => void;
  onDecrease: () => void;
  onDelete: () => void;
};

export const CartItem = ({
  name,
  description,
  quantity,
  price,
  image,
  onIncrease,
  onDecrease,
  onDelete,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-outline-variant bg-gray-50 p-4 shadow-warm">

      {/* IMAGE */}
      <div className="w-30 h-30 rounded-2xl overflow-hidden flex-shrink-0">
        <img
          src={image || "https://via.placeholder.com/150"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* INFO */}
      <div className="flex-1">
        <h2 className="font-bold text-on-surface">{name}</h2>

        <p className="text-sm text-on-surface-variant">
          {description}
        </p>

        <p className="mt-1 text-sm font-semibold text-primary">
          ${Number(price ?? 0).toFixed(2)}
        </p>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center gap-3">
        <button onClick={onDecrease} className="w-8 h-8 rounded-md bg-surface-container border cursor-pointer">
          -
        </button>

        <span>{quantity}</span>

        <button onClick={onIncrease} className="w-8 h-8 rounded-md bg-surface-container border cursor-pointer">
          +
        </button>

        <button onClick={onDelete} className="ml-4 text-error text-sm font-semibold cursor-pointer">
          Eliminar
        </button>
      </div>
    </div>
  );
};
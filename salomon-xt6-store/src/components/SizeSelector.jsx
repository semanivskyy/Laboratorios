import { useState } from 'react';
import { Ruler } from 'lucide-react';

const SYSTEMS = [
  { key: 'EUR', label: 'EUR' },
  { key: 'US_M', label: 'US H' },
  { key: 'US_W', label: 'US M' },
  { key: 'CM', label: 'CM' },
];

// Devuelve la talla en el sistema de medidas elegido
const getSizeLabel = (item, system) => {
  switch (system) {
    case 'US_M':
      return item.us;
    case 'US_W':
      return String(parseFloat(item.us) + 1.5); // US mujer = US hombre + 1.5
    case 'CM':
      return item.cm;
    default:
      return item.eur;
  }
};

export default function SizeSelector({ sizes, selectedSize, onSelectSize }) {
  const [system, setSystem] = useState('EUR');
  const currentSystem = SYSTEMS.find((s) => s.key === system);

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-xs">
        <span className="font-bold uppercase tracking-wider text-neutral-500">
          Seleccionar Talla ({currentSystem.label})
        </span>
        <button className="flex items-center gap-1 text-neutral-600 hover:text-black underline font-medium">
          <Ruler className="w-3.5 h-3.5" /> Guía de tallas Salomon
        </button>
      </div>

      {/* Switch de sistema de medidas */}
      <div className="grid grid-cols-4 bg-neutral-100 rounded p-0.5 text-[11px] font-mono font-bold">
        {SYSTEMS.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setSystem(s.key)}
            className={`py-1.5 rounded transition-all ${
              system === s.key
                ? 'bg-neutral-900 text-white shadow'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-2">
        {sizes.map((item) => {
          const isOutOfStock = item.stock === 0;
          const isSelected = selectedSize?.eur === item.eur;

          return (
            <button
              key={item.eur}
              disabled={isOutOfStock}
              onClick={() => onSelectSize(item)}
              className={`relative py-3 rounded text-xs font-mono font-medium transition-all ${
                isOutOfStock
                  ? 'bg-neutral-100 text-neutral-300 cursor-not-allowed border border-dashed border-neutral-200 line-through'
                  : isSelected
                  ? 'bg-neutral-900 text-white font-bold shadow-md'
                  : 'bg-white border border-neutral-300 text-neutral-800 hover:border-neutral-900 hover:bg-neutral-50'
              }`}
            >
              {getSizeLabel(item, system)}
              {item.stock > 0 && item.stock <= 4 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 animate-pulse" title="Últimas unidades" />
              )}
            </button>
          );
        })}
      </div>

      {selectedSize && (
        <div className="text-[11px] text-neutral-500 font-mono flex items-center justify-between pt-1">
          <span>
            EUR {selectedSize.eur} / US H {selectedSize.us} / US M {getSizeLabel(selectedSize, 'US_W')} / {selectedSize.cm} cm
          </span>
          <span className="text-emerald-700 font-medium">En stock: {selectedSize.stock} pares</span>
        </div>
      )}
    </div>
  );
}
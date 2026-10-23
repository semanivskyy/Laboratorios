import { useState } from 'react';
import { Search } from 'lucide-react';

export default function ProductSearch({ products, activeProductId, onSelectProduct }) {
  const [query, setQuery] = useState('');

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-2 space-y-3">
      <div className="relative max-w-md">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar silueta: XT-6, Speedcross, ACS Pro..."
          className="w-full pl-9 pr-3 py-2.5 text-xs font-mono border border-neutral-300 rounded bg-white focus:outline-none focus:border-neutral-900"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {results.length === 0 ? (
          <p className="text-xs text-neutral-500 font-mono">
            No se encontraron siluetas para "{query}".
          </p>
        ) : (
          results.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelectProduct(p)}
              className={`px-3 py-1.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider transition-all ${
                p.id === activeProductId
                  ? 'bg-neutral-900 text-white shadow'
                  : 'bg-white border border-neutral-300 text-neutral-700 hover:border-neutral-900'
              }`}
            >
              {p.name}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
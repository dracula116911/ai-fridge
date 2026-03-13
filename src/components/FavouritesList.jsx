import { Trash2 } from "lucide-react";
import React from "react";

const FavouritesList = ({ favourites, onSelect, onRemove }) => {
  if (favourites.length === 0) return null;
  return (
    <div className="w-full max-w-4xl mt-20">
      <h3 className="text-2xl font-bold mb-6 text-center">Saved Recipes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {favourites.map((fav, idx) => (
          <div
            key={idx}
            onClick={() => onSelect(fav)}
            className="group p-4 rounded-2xl bg-white/5 border border-slate-200/10 hover:bg-white/10 cursor-pointer transition-all"
          >
            <div className="max-w-[80%]">
              <div className="w-full flex justify-between">
                <h4 className="font-semibold text-lg truncate">{fav.title}</h4>
                <button
              onClick={(e) => onRemove(e, fav.title)}
              className="p-2 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all"
            >
              <Trash2 size={24} />
            </button>
              </div>
              <p className="text-sm text-slate-500">
                {fav.time} • {fav.calories}
              </p>
            </div>

           
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesList;

import React from "react";
import { Clock, Users, Flame, Heart } from "lucide-react";

const RecipeCard = ({ recipe, onFavourite , isFavourite }) => {
  if (!recipe) return null;
  return (
    <div className="w-full max-w-2xl mt-12 p-8 rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/20 dark:border-slate-800 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-3xl font-bold tracking-tight">{recipe.title}</h3>
        <button onClick={onFavourite} className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:scale-110 transition-transform">
          <Heart
            className={isFavourite ? "fill-red-500 text-red-500" : "text-slate-400"}
            size={20}
          />
        </button>
      </div>

      <div className="flex gap-6 mb-8 text-sm font-medium text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <Clock size={18} /> <span>{recipe.time || "25 min"}</span>
        </div>
        <div className="flex items-center gap-2">
          <Flame size={18} /> <span>{recipe.calories || "450 kcal"}</span>
        </div>
      </div>

      <div className="space-y-6 text-left">
        <div>
          <h4 className="font-bold text-lg mb-3">Ingredients</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {recipe.ingredients.map((ing, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {ing}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
          <h4 className="font-bold text-lg mb-3">Instructions</h4>
          <ol className="space-y-4">
            {recipe.instructions.map((step, i) => (
              <li
                key={i}
                className="flex gap-4 text-slate-600 dark:text-slate-300"
              >
                <span className="font-bold text-blue-600">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

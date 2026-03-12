import React, { useState } from "react";
import { X, Plus } from "lucide-react";

const IngredientInput = ({ ingredients, setIngredients }) => {
  const [inputValue, setInputvalue] = useState("");
  const addIngredient = () => {
    const trimmed = inputValue.trim().toLowerCase();

    if (trimmed && !ingredients.includes(trimmed)) {
      setIngredients([...ingredients, trimmed]);
      setInputvalue("");
    }
  };

  const handleKewDown = (e) => {
    // e.preventDefault();
    if (e.key === "Enter") {
      addIngredient();
    }
  };

  const removeIngredient = (id) => {
    setIngredients(ingredients.filter((_, i) => i !== id));
  };
  return (
    <div className="w-full space-y-6">
      <div className="relative group max-w-md mx-auto">
        <input
          className="w-full px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-xl dark:shadow-none text-lg"
          type="text"
          value={inputValue}
          onKeyDown={handleKewDown}
          onChange={(e) => setInputvalue(e.target.value)}
          placeholder="Add Chicken , garlic , onions....."
        />

        <button
          onClick={addIngredient}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl hover:scale-110 transition-transform active:scale-90"
        >
          <Plus size={24} />
        </button>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {ingredients.map((item, index) => (
          <div
            key={index}
            id={index}
            className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium shadow-sm group animate-in zoom-in duration-200"
          >
            <span className="capitalize">{item}</span>
            <button
              className="text-slate-400 hover:text-red-500 transition-colors"
              onClick={() => removeIngredient(index)}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientInput;

import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import IngredientInput from "./components/IngredientInput";
import RecipeCard from "./components/RecipeCard";
import Loader from "./components/Loader";


const App = () => {
  const [ingredients, setIngredients] = useState([]);

  const [loading, setloading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  const handleGenerate = () => {
    setloading(true);
    setRecipe("");

    setTimeout(() => {
      setRecipe({
        title: "Garlic Butter Pasta",
        ingredients: ["200g Pasta", "4 cloves Garlic", "Butter", "Parmesan"],
        instructions: [
          "Boil pasta",
          "Sauté garlic in butter",
          "Mix and top with cheese",
        ],
        time: "15 min",
        calories: "400 kcal",
      });
      setloading(false);

    } , 2000);
  };


  return (
    <ThemeProvider>
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 transition-colors duration-500 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center max-w-5xl">
          <h1 className="text-2xl font-bold tracking-tight">AI Fridge</h1>
          <ThemeToggle />
        </nav>

        <main className="text-center">
          <h2 className="text-5xl font-extrabold mb-4">
            What's in your fridge?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            Enter Ingredients to generate magic..
          </p>
          <IngredientInput
            ingredients={ingredients}
            setIngredients={setIngredients}
          />

          {ingredients.length > 0 && !loading && (
            <button
              onClick={handleGenerate}
              className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-bottom-4"
            >
              Generate recipe
            </button>
          )}

          {loading && <Loader />}
          {recipe && !loading && <RecipeCard recipe={recipe} />}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;

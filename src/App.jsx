import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import IngredientInput from "./components/IngredientInput";
import RecipeCard from "./components/RecipeCard";
import Loader from "./components/Loader";
import { generateRecipe } from "./utils/gemini";
import { useFavourites } from "./hooks/useFavourites";
import FavouritesList from "./components/FavouritesList";

const App = () => {
  const [ingredients, setIngredients] = useState([]);

  const [loading, setloading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  const { favourites, toggleFavourites, removeFavourites } = useFavourites();

  const handleGenerate = async () => {
    // setloading(true);
    // setRecipe("");

    // setTimeout(() => {
    //   setRecipe({
    //     title: "Garlic Butter Pasta",
    //     ingredients: ["200g Pasta", "4 cloves Garlic", "Butter", "Parmesan"],
    //     instructions: [
    //       "Boil pasta",
    //       "Sauté garlic in butter",
    //       "Mix and top with cheese",
    //     ],
    //     time: "15 min",
    //     calories: "400 kcal",
    //   });
    //   setloading(false);

    // } , 2000);

    if (ingredients.length === 0) return;
    setloading(true);
    setRecipe(null);

    try {
      const data = await generateRecipe(ingredients);
      setRecipe(data);
    } catch (error) {
      alert(
        "The AI is a bit full right now. try a bit later : ",
        error.message,
      );
    } finally {
      setloading(false);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 transition-colors duration-500 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center max-w-5xl z-50">
          <h1 className="text-2xl font-bold tracking-tight">AI Fridge</h1>
          <ThemeToggle />
        </nav>

        <main className="flex flex-col items-center pt-32 pb-20 px-4 w-full">
          <div className="text-center max-w-2xl w-full mb-12">
            <h2 className="text-5xl font-extrabold mb-4">
              What's in your fridge?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
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
          </div>

          <div className="w-full flex justify-center">
            {loading && <Loader />}
            {recipe && !loading && (
              <RecipeCard
                recipe={recipe}
                onFavourite={() => toggleFavourites(recipe)}
                isFavourite={favourites.some((f) => f.title === recipe.title)}
              />
            )}

            {!recipe && !loading && (
              <div className="flex flex-col items-center justify-center text-slate-700 dark:text-slate-400 opacity-50">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 animate-bounce">
                    ✨
                  </div>
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                </div>
                <p className="mt-4 font-medium italic">Add Ingredients to start cooking....</p>
              </div>
            )}
          </div>

          <FavouritesList
            favourites={favourites}
            onSelect={setRecipe}
            onRemove={removeFavourites}
          />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;

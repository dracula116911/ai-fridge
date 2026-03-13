import { useEffect, useState } from "react";

export const useFavourites = () => {
   const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("fridge-favourites");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("fridge-favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourites = (recipeToSave) => {
    const isAlreadyfav = favourites.some(
      (fav) => fav.title === recipeToSave.title,
    );
    if (isAlreadyfav) {
      setFavourites(favourites.filter((f) => f.title !== recipeToSave.title));
    } else {
      setFavourites([recipeToSave, ...favourites]);
    }
  };

  const removeFavourites = (e,title) => {
    e.stopPropagation();
    setFavourites(favourites.filter(f => f.title !== title))
  }

  return { favourites , toggleFavourites , removeFavourites}
}
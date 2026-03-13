import confetti from "canvas-confetti";
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
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#3b82f6', '#ef4444', '#ffffff']
            });
            setFavourites([recipeToSave, ...favourites]);
        }
    };

    const removeFavourites = (e, title) => {
        e.stopPropagation();
        setFavourites(favourites.filter(f => f.title !== title))
    }

    return { favourites, toggleFavourites, removeFavourites }
}
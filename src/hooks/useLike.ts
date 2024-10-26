import { useState, useEffect } from "react";
import foodItems from "../data/FoodItems";

const useLike = () => {
  const [likedItems, setLikedItems] = useState(() => {
    const savedLikes = localStorage.getItem("likedItems");
    return savedLikes
      ? JSON.parse(savedLikes)
      : foodItems.map((item) => item.liked);
  });

  const toggleLike = (index: number) => {
    const updatedLikes = [...likedItems];
    updatedLikes[index] = !updatedLikes[index];
    setLikedItems(updatedLikes);
  };

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  return { toggleLike, likedItems };
};
export default useLike;

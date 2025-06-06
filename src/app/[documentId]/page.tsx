"use client";
import React from "react";
import { recipe } from "@/types/types";
import { FaEuroSign, FaClock } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { useParams } from "next/navigation";



import recipes from "@/data/recipes.json";

export default function Page() {
  const params = useParams();
  const { documentId } = params;

  const [recipe, setRecipe] = React.useState<recipe | null>(null);

  React.useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = recipes.find((recipe) => recipe.documentId === documentId);
      if (recipeData) {
        setRecipe(recipeData);
      }
    };

    fetchRecipe();
  }, [documentId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  console.log(recipe);

  return (
    <div className="p-5 font-sans flex justify-center min-h-screen bg-[#f0f0f0] dark:bg-[#121212]">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          {recipe.title}
        </h1>
        <div className="flex">
          {/* Placeholder for image */}
            <div className="w-1/2 bg-gray-700 h-64 flex items-center justify-center">
            <img
              src={`images/${recipe.image.src}`}
              alt={recipe.image.alt}
              className="h-48 w-48 object-cover"
            />
            </div>

          {/* Recipe details */}
          <div className="w-1/2 pl-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center text-gray-400">
                <IoPeople className="mr-2 size-5" />
                <span>{recipe.persons} personen</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FaClock className="mr-2" />
                <span>{recipe.time} minuten</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span>Geschatte prijs:</span>
                <FaEuroSign className="mx-2" />
                <span>{recipe.price}</span>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-300">
                Ingredients:
              </h2>
              <ul className="list-disc pl-5 text-gray-400 text-left">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Instructions */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-300">
            Instructions:
          </h2>
          <ol className="list-decimal pl-5 text-gray-400 text-left">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { request } from "graphql-request";
import { getRecipeByDocumentId } from "@/graphql/recipes";
import { recipe } from "@/types/types";
import { FaEuroSign, FaClock } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const { documentId } = params;

  async function fetchRecipe() {
    try {
      const response = await request<{ recipe: recipe }>(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
        getRecipeByDocumentId,
        {
          documentId: documentId,
        }
      );
      return response.recipe;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const [recipe, setRecipe] = React.useState<recipe | null>(null);

  React.useEffect(() => {
    fetchRecipe().then((data) => {
      if (data) setRecipe(data);
    });
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
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${recipe.image.url}`}
              alt={recipe.image.alternativeText}
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
                <span>{recipe.prepTime} minuten</span>
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
                {recipe.ingredients.split("\n").map((ingredient, index) => (
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
            {recipe.instructions.split("\n").map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

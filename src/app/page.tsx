import { getRecipes } from "@/graphql/recipes";
import { request } from "graphql-request";
import Card from "@/components/card/Card";
import { recipe } from "@/types/types";


export default async function Home() {
  async function fetchRecipes() {
    try {
      const response: { recipes: recipe[] } = await request(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
        getRecipes
      );
      return response.recipes as recipe[];
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  const recipes = await fetchRecipes();
  console.log(recipes);
  return (
    <>
      <div className="flex flex-col items-center p-10 w-full min-h-screen bg-[#f0f0f0] dark:bg-[#121212] text-[#121212] dark:text-[#f0f0f0]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {recipes &&
        recipes.map((recipe) => (
          <Card
            key={recipe.documentId}
            documentId={recipe.documentId}
            title={recipe.title}
            persons={recipe.persons}
            prepTime={recipe.prepTime}
            price={recipe.price}
            // image={{
            //   src: recipe.image.src,
            //   alt: recipe.image.alt,
            // }}
          />
        ))}
        </div>
      </div>
    </>
  );
}

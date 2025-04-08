import React from "react";
import Link from "next/link";


type cardProps = {
  documentId: string;
  title: string;
  persons: number;
  prepTime: number;
  price: number;
  image: {
    src: string;
    alt: string;
  };
};

export default function Card(recipe: cardProps) {
  return (
    <Link
      href={recipe.documentId}
      className="flex flex-col gap-4 w-full max-w-[400px] bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={`images/${recipe.image.src}`}
        alt={recipe.image.alt}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
      <h2 className="text-xl font-bold">{recipe.title}</h2>
      <p className="text-gray-600">
        {recipe.persons} personen | {recipe.prepTime} min | €{recipe.price}
      </p>
      </div>
    </Link>
  );
}

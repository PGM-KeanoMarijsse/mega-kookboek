export type recipe = {
  documentId: string;
  title: string;
  persons: number;
  prepTime: number;
  price: number;
  image: {
    url: string;
    alternativeText: string;
  };
  ingredients: string;
  instructions: string;
};

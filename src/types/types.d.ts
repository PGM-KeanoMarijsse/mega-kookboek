export type recipe = {
  documentId: string;
  title: string;
  persons: number;
  prepTime: number;
  price: number;
  image: {
    src: string;
    alt: string;
  };
  ingredients: [];
  instructions: [];
};

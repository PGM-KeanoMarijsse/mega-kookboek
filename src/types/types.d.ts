export type recipe = {
  documentId: string;
  title: string;
  persons: number;
  time: number;
  price: number;
  image: {
    src: string;
    alt: string;
  };
  ingredients: string[];
  instructions: string[];
};

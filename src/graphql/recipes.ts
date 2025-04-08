import { gql } from "graphql-request";

export const getRecipes = gql`
  query getRecipes {
    recipes {
      documentId
      image {
        url
        alternativeText
      }
      persons
      prepTime
      price
      title
    }
  }
`;

export const getRecipeByDocumentId = gql`
  query Recipe($documentId: ID!) {
    recipe(documentId: $documentId) {
      documentId
      image {
        alternativeText
        url
      }
      ingredients
      instructions
      persons
      prepTime
      price
      title
    }
  }
`;

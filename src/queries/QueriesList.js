import { gql } from "@apollo/client";

export const CATEGORIES_LIST = gql`
  {
    categories {
      name
    }
  }
`

export const PRODUCTS_LIST = gql`
  {
    categories {
      name
      products {
        id 
        name
        gallery
        inStock
        category
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`
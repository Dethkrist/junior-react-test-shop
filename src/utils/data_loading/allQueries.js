export const getCategoriesList = () => (
  {
    "query": `
      {
        categories {
          name
        }
      }
    `
  }
)

export const getProductPage = (id) => (
  {
    "query": `
    {
      product (id: "${id}") {
        id 
        name
        gallery
        inStock
        category
        description
        brand
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
  }
    `
  }
)

export const getCategory = (input) => (
  {
    "query": `
    {
      category(input:{ title: "${input}" }) {
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
  }
)

export const getCurrencies = () => (
  {
    "query" : `
    {
      currencies {
        label
        symbol
      }
    }
    `
  }
)
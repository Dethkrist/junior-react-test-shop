export default function fetchCategories() {
  fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          {
            categories {
              name
            }
          }
        `,
        variables: {}
    }),
  })
    .then((res) => res.json())
    .then((result) => console.log(result));
}
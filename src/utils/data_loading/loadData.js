import { fetchData } from "./fetchData"

export const loadData = async (query) => {
  try {
    const result = await fetchData(query)
    return result
  }
  catch {
    console.log('error')
  }
}
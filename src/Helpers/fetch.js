import { client } from '../client'
import Prismic from 'prismic-javascript';

const fetchData = async (tag, setter) => {
    const response = await client.query(
      Prismic.Predicates.at("document.tags", [tag])
    )
    if (response) {
        setter(response.results[0].data)
    }
  }

export default fetchData
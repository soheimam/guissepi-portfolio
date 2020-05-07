import { client } from '../client'
import Prismic from 'prismic-javascript';

const fetchData = (tag, setter) => {
  client.query(
      Prismic.Predicates.at("document.tags", [tag])
  ).then((response) =>{
    setter(response.results[0].data)
  });
}

export default fetchData
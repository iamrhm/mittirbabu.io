import axios from "axios";

const ACCESS_TOKEN = '451144149941482';
const GET_SUPERHERO_LIST = "/search";

const AxiosClient = axios.create({
  baseURL: `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`,
});

export const getFilteredSuperHeros = async (query) => {
  const filterBy = query.split(' ').join('-');
  const response = await AxiosClient.get(`${GET_SUPERHERO_LIST}/${filterBy}`);
  if(response.status === 200) {
    const filteredSuperHeros = (response.data.results || []).map((data) => ({
      id: data.id,
      name: data.name,
      intro: data.work.base,
      image: data.image.url,
      info: data,
    }));
    return filteredSuperHeros;
  } else {
    return [];
  }
}

export const getURLMetaInfo =  async (url) => {
  try {
  const data = await axios.get(`api/fetchMeta`, {
    params: {
      url: url
    }
  });
  return {
    'type': data.data['og:type'],
    'url': data.data['og:url'],
    'title': data.data['title'],
    'description': data.data['description'],
    'image': data.data['og:image'],
  };
  } catch(e) {
    console.log(e);
  }
}

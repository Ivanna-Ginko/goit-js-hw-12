
import axios from 'axios';


const baseUrl = "https://pixabay.com";
const endPoint = "/api";

let page = 1;
let perPage = 40;

export async function getImg (searchName) {
    const params = new URLSearchParams({
        key: '48827773-420cc6a3931f90379a2431d96',
        q: searchName,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: perPage,
        page: page,
    });
  
    const url = baseUrl + endPoint + `?${params}`;
    return await axios.get(url)

}

//total_pages = response.data.hits / per_page










//https://pixabay.com/api/?key=48827773-420cc6a3931f90379a2431d96&q=yellow+flowers&image_type=photo


/*{https://pixabay.com/api/
//*/
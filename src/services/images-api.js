const URL = 'https://pixabay.com/api/';
const KEY = '23106414-1912ab188e9ddc39eb325727f';
const TYPE = 'photo';
const ORIENTATION = 'horizontal';

export const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
    const fullUrl = `${URL}?key=${KEY}&q=${searchQuery}&image_type=${TYPE}&orientation=${ORIENTATION}&page=${currentPage}&per_page=${pageSize}`;
    return fetch(fullUrl)
        .then(response => response.json())
        .then(data => data.hits);
}


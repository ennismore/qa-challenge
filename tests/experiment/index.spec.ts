import { searchAmazon } from './amazonSearch';

const SEARCH_ITEMS = [
    'iphone',
    'hairbrush',
    'English Dictionary'
];

searchAmazon(SEARCH_ITEMS[0])
  .then(() => console.log('Search completed'))
  .catch((error) => console.error(error));
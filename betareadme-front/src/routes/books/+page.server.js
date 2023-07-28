import { books } from './data.js';

export function load({ setHeaders }) {
  setHeaders({
    'Cache-Control': 'max-age=86400',
  });

	return {
    books: books.map(({ slug, title }) => { 
      return { slug, title }
    }),
  }
}
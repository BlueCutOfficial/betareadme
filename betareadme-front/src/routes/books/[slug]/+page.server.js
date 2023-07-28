import { error } from '@sveltejs/kit';
import { books } from '../data.js';

export function load({ params }) {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) throw error(404);
	return { book };
}
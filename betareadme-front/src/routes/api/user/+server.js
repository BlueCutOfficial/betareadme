import { json } from '@sveltejs/kit';
import { getUser, patchUser } from '$lib/server/database.js';

export async function GET() {
	let response = await Promise.resolve(getUser('academiedesrenards@gmail.com'));
	return json(response);
}

export async function PATCH({ params, request }) {
	const { themes } = await request.json();

	let response = await Promise.resolve(
    patchUser('academiedesrenards@gmail.com', {
      themes
    })
  );
  return json(response);
}
export async function load({ fetch }) {
	const response = await fetch('/api/user');
	const user = await response.json();
	return { user };
}
export const actions = {
	update: async ({ fetch, cookies, request }) => {
		let formData = await request.formData();
    let knowlegdeFields = formData.getAll('knowledge-field').filter(Boolean);

    await fetch('/api/user', {
      method: 'PATCH',
      body: JSON.stringify({ themes: knowlegdeFields }),
    });
	}
};
// This endpoint refers to the list of countries affected by the Coronavirus.
// A search function is available to quickly search for countries.
// > Each country can be used as a filter in the other API endpoints.

export default class Countries {
	async getCountries() {
		const response = await fetch('https://covid-193.p.rapidapi.com/countries', {
			method: 'GET',
			headers: {
				'x-rapidapi-key': '9965f035f6msh69f875288eee3e2p1b8667jsnec67afbf6db6',
				'x-rapidapi-host': 'covid-193.p.rapidapi.com'
			}
		});
		const data = await response.json();
		return data;
	}
}

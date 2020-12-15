// This endpoint refers to the entire history of statistics for a country.
// A new entry is generated each time one of the data has evolved or regressed.
// For global results, replace country with All.

export default class History {
	async getHistory(country) {
		const response = await fetch(
			`https://covid-193.p.rapidapi.com/history?country=${country}`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-key':
						'9965f035f6msh69f875288eee3e2p1b8667jsnec67afbf6db6',
					'x-rapidapi-host': 'covid-193.p.rapidapi.com'
				}
			}
		);
		const data = await response.json();
		return data;
	}
}

// This endpoint reflects the current status of the spread of the coronavirus in all countries.
// It is possible to filter per country to retrieve its current status.
// For the current situation in the world use All

export default class Statistics {
	async getStatistics() {
		const response = await fetch(
			'https://covid-193.p.rapidapi.com/statistics',
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

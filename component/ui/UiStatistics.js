import Statistics from '../apis/Statistics.js';

const statistics = new Statistics();
const statisticsData = statistics
	.getStatistics()
	.then(data => data.response)
	.catch(err => err);

// -----------------------------------------
export default class UIStatistics {
	async getUiStatistics() {
		const UiStatisticsData = await statisticsData;
		return UiStatisticsData;
	}
}

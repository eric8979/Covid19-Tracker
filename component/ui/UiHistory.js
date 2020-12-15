import Countries from '../apis/Countries.js';
import History from '../apis/History.js';

const countries = new Countries();
const countriesData = countries
	.getCountries()
	.then(data => data.response)
	.catch(err => err);

const history = new History();
const historyData = history
	.getHistory('s-korea')
	.then(data => data.response)
	.catch(err => err);

// ---------------------------------------------
export default class UIHistory {
	async getUiCountries() {
		const UiCountriesData = await countriesData;
		return UiCountriesData;
	}

	async getUiHistory() {
		const UiHistoryData = await historyData;
		return UiHistoryData;
	}
}

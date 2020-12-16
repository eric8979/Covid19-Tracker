import Countries from '../apis/Countries.js';
import History from '../apis/History.js';

const countries = new Countries();
const countriesData = countries
	.getCountries()
	.then(data => data.response)
	.catch(err => err);

const history = new History();

// ---------------------------------------------
export default class UIHistory {
	async getUiCountries() {
		const UiCountriesData = await countriesData;
		return UiCountriesData;
	}

	async getUiHistory(countryName) {
		const historyData = await history
			.getHistory(countryName)
			.then(data => data.response)
			.catch(err => err);
		const UiHistoryData = await historyData;
		return UiHistoryData;
	}
}

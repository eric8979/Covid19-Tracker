import Statistics from './component/Statistics.js';
import Countries from './component/Countries.js';
import History from './component/History.js';
const statistics = new Statistics();
const countries = new Countries();
const history = new History();

statistics
	.getStatistics()
	.then(data => console.log(data.response))
	.catch(err => console.log(err));

countries
	.getCountries()
	.then(data => console.log(data))
	.catch(err => console.log(err));

history
	.getHistory()
	.then(data => console.log(data))
	.catch(err => console.log(err));

import Statistics from './component/apis/Statistics.js';
import Countries from './component/apis/Countries.js';
import History from './component/apis/History.js';
const statistics = new Statistics();
const countries = new Countries();
const history = new History();

document.getElementById('menuBtn').addEventListener('click', menuToggle);

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

function menuToggle() {
	$('.ui.labeled.icon.sidebar').sidebar('toggle');
}

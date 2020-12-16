import UIStatistics from './component/ui/UiStatistics.js';
import UIHistory from './component/ui/UiHistory.js';
const uiStatistics = new UIStatistics();
const uiHistory = new UIHistory();

$('.ui.sidebar')
	.sidebar({
		context: $('.bottom.segment')
	})
	.sidebar('attach events', '.menu .item');

document.querySelector('#homeBtn').addEventListener('click', click);
document.querySelector('#statsBtn').addEventListener('click', click);
document.querySelector('#historyBtn').addEventListener('click', click);
document.querySelector('#globeBtn').addEventListener('click', click);
const homePage = document.querySelector('#home');
const historyPage = document.querySelector('#history');
const statsPage = document.querySelector('#stats');
const globePage = document.querySelector('#globe');

function click(e) {
	if (e.target.id === 'homeBtn') {
		homePage.style.display = 'block';
		historyPage.style.display = 'none';
		statsPage.style.display = 'none';
		globePage.style.display = 'none';
	} else if (e.target.id === 'historyBtn') {
		homePage.style.display = 'none';
		historyPage.style.display = 'block';
		statsPage.style.display = 'none';
		globePage.style.display = 'none';
	} else if (e.target.id === 'statsBtn') {
		homePage.style.display = 'none';
		historyPage.style.display = 'none';
		statsPage.style.display = 'block';
		globePage.style.display = 'none';
	} else if (e.target.id === 'globeBtn') {
		homePage.style.display = 'none';
		historyPage.style.display = 'none';
		statsPage.style.display = 'none';
		globePage.style.display = 'flex';
		globePage.style.justifyContent = 'center';
		globePage.style.alignItems = 'center';
		globePage.style.flexDirection = 'column';
		globePage.style.height = '43rem';
	}
}

// ------------------------------------------------------------

// Add countries to history page
let text = '';
uiHistory
	.getUiCountries()
	.then(country => {
		for (let i = 0; i < country.length; i++) {
			if (i === country.length - 1) {
				text += `${country[i]}`;
			} else {
				text += `${country[i]} --- `;
			}
		}
		document.getElementById('countries').innerHTML = text;
	})
	.catch(err => err);

// If search is submitted, show the result.
document.getElementById('submitform').addEventListener('submit', search);
function search(e) {
	e.preventDefault();
	if (document.getElementById('countryName').value === '') {
		document.getElementById('countries').style.display = 'block';
		document.getElementById('info').style.display = 'none';
	} else {
		document.getElementById('countries').style.display = 'none';
		document.getElementById('info').style.display = 'block';
		uiHistory
			.getUiHistory(document.getElementById('countryName').value)
			.then(data => {
				const allData = document.getElementById('info');
				let textLine = '';
				for (let i = 0; i < data.length; i++) {
					textLine += `<strong>${data[i].time}</strong> <br> ${data[i].cases.new} / ${data[i].cases.active} / ${data[i].cases.critical} / ${data[i].cases.recovered} / ${data[i].cases.total} <br> #DEATH => ${data[i].deaths.new} / ${data[i].deaths.total} <br><br>`;
				}
				allData.innerHTML = `<div>${textLine}</div>`;
			})
			.catch(err => err);
	}
}

//
// ui stats
uiStatistics
	.getUiStatistics()
	.then(data => {
		let text = '';
		let total = 0;
		let death = 0;
		for (let i = 0; i < data.length; i++) {
			if (data[i].cases.new === null) {
				if (i !== 0 && i % 3 === 0) {
					text += `${data[i].country}= <strong>+0(or unknown)</strong> <br>`;
				} else {
					text += `${data[i].country}= <strong>+0(or unknown)</strong> &nbsp; &nbsp;`;
				}
			} else {
				if (i !== 0 && i % 3 === 0) {
					text += `${data[i].country}=${data[i].cases.new} <br>`;
				} else {
					text += `${data[i].country}=${data[i].cases.new} &nbsp; &nbsp;`;
				}
			}
			total += data[i].cases.total;
			death += data[i].deaths.total;
		}
		document.getElementById('dailyIncrease').innerHTML = text;
		document.getElementById(
			'totalNum'
		).innerHTML = `Total &#128567;: ${total}+`;
		document.getElementById(
			'deathTotal'
		).innerHTML = `Total &#128128;: ${death}+`;
	})
	.catch(err => err);

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
		console.log(e.target);
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

uiHistory.getUiHistory().then(data => console.log('history', data));
uiStatistics.getUiStatistics().then(data => console.log('statistics', data));

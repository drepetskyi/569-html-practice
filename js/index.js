// ----- current date and day
const date = new Date();
const days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
const day = days[date.getDay()];
const mounths = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
const mount = mounths[date.getMonth()];
document.querySelector('.date').innerHTML = day + ' ' + date.getDate() + ' ' + mount + ' ' + date.getUTCFullYear();

async function fetchJson() {
    const response = await fetch('data-phrases.json');
    const phrase = await response.json();
    const phrasesContainer = document.querySelector('.phrases');
    let phrasesDomSrring = '';
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    let i = getRandomInt(phrase.data.length);
    phrasesDomSrring += `<div class="phrase"> ${phrase.data[i].phrase + ' ' + phrase.data[i].author}</div> `
    phrasesContainer.innerHTML = phrasesDomSrring;
};
fetchJson();
setInterval(fetchJson, 10000);
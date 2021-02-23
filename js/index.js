// ----- current date and day
const date = new Date();
const days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
const day = days[date.getDay()];
const mounths = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
const mount = mounths[date.getMonth()];
document.querySelector('.date').innerHTML = day + ' ' + date.getDate() + ' ' + mount + ' ' + date.getUTCFullYear();


// ----- when was it published (how many days ago)
const dateForCheckDate = (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getUTCFullYear();
const cards = document.querySelectorAll('.published');
for (let i = 0; i < cards.length; i++) {
    let dateOfPublication = cards[i].getAttribute('pub');
    let rezultInDays = (Date.parse(dateForCheckDate) - Date.parse(dateOfPublication)) / 1000 / 60 / 60 / 24;
    let addTextAboutAgo = "більше року тому";
    switch (true) {
        case rezultInDays === 0:
            addTextAboutAgo = " сьогодні";
            break;
        case rezultInDays <= 1:
            addTextAboutAgo = " вчора";
            break;
        case rezultInDays <= 4:
            addTextAboutAgo = " " + rezultInDays + " дні тому";
            break;
        case rezultInDays <= 7:
            addTextAboutAgo = " " + rezultInDays + " днів тому";
            break;
        case rezultInDays <= 30:
            addTextAboutAgo = " понад тиждень тому";
            break;
        case rezultInDays <= 365:
            addTextAboutAgo = " понад місяць тому";
            break;
    }
    cards[i].innerHTML += addTextAboutAgo;
}



// ------ add phrases
async function fetchJson() {
    const response = await fetch('data-phrases.json');
    const phrase = await response.json();

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    let i = getRandomInt(phrase.data.length);
    document.querySelector('.phrase').innerText = phrase.data[i].phrase + ' ' + phrase.data[i].author;
};
fetchJson();
setInterval(fetchJson, 7000);
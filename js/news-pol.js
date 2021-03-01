const dateCurr = new Date();
const dateForCheckDate = (dateCurr.getMonth() + 1) + '-' + dateCurr.getDate() + '-' + dateCurr.getUTCFullYear();
let addTextAboutAgo = "більше року тому";
let acrticleContainer = document.querySelector('.art-news');
let addNews = '';


async function feachNews() {
    const newsdata = await (await fetch('data-news.json')).json();
    const news = newsdata;

    let rezultInDays = (Date.parse(dateForCheckDate) - Date.parse(news[1].publicDate)) / 1000 / 60 / 60 / 24;
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
    };
    addNews += `<div class="card-news">
                        <div class="text-for-news">
                            <div class="part-one">
                                <img class="img-for-news" src="img/${news[1].image}" alt="${news[1].altForImg}">
                                <div class="headline">${news[1].headline}
                                    <div class="heading">${news[1].heading}</div>
                                </div>
                            </div>
                            <div id="fb-root"></div>
                            <p class="part-start">${news[1].textForNews}</p>
                            <div class="published" pub="${news[1].publicDate}"> Опубліковано ${addTextAboutAgo}</div>
                        </div>
                    </div>
                    <div class="fb-comments" data-href="https://daway.com.ua" data-width="100%" data-numposts="1"></div>`;
    acrticleContainer.innerHTML = addNews;
};


feachNews();

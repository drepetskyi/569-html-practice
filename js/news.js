const dateCurr = new Date();
const dateForCheckDate = (dateCurr.getMonth() + 1) + '-' + dateCurr.getDate() + '-' + dateCurr.getUTCFullYear();
let addTextAboutAgo = "більше року тому";
let acrticleContainer = document.querySelector('.art-news');
let addNews = '';


async function feachNews() {
    const newsdata = await (await fetch('data-news.json')).json();
    const news = newsdata;    
    
    for (let i=0; i < news.length; i++) {
        let rezultInDays = (Date.parse(dateForCheckDate) - Date.parse(news[i].publicDate)) / 1000 / 60 / 60 / 24;
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
                                <img class="img-for-news" src="img/${news[i].image}" alt="${news[i].altForImg}">
                                <div class="headline">${news[i].headline}
                                    <div class="heading">${news[i].heading}</div>
                                </div>
                            </div>
                            <div id="fb-root"></div>
                            <p class="part-start">${news[i].textForNews}</p>
                            <div class="published" pub="${news[i].publicDate}"> Опубліковано ${addTextAboutAgo}</div>
                        </div>
                    </div>
                    <div class="fb-comments" data-href="https://daway.com.ua" data-width="100%" data-numposts="1"></div>`;
        acrticleContainer.innerHTML = addNews;
    };
};

feachNews();

//acrticleContainer.innerHTML = "addNews";



// document.onload = feachNews();
// document.querySelector('.politycs').addEventListener('click', acrticleContainer.innerHTML = 'addNews')


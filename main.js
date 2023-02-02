let price = document.getElementsByClassName("price");

const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");
const title3 = document.querySelector(".title3");
const title4 = document.querySelector(".title4");
const title5 = document.querySelector(".title5");

const link1 = document.querySelector(".link1");

const link2 = document.querySelector(".link2");

const link3 = document.querySelector(".link3");

const link4 = document.querySelector(".link4");

const link5 = document.querySelector(".link5");

fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((res) => res.json())

  .then((res) => showPrice(res));

function showPrice(res) {
  setTimeout(() => {
    const str = res.bpi.USD.rate;
    const withoutLast3 = str.slice(0, -5);
    price[0].innerHTML = withoutLast3;
    const news = document.querySelector('.loading-news');
    news.textContent = 'Hot News 🥵'
  }, 1000);
}

fetch(
  "https://newsdata.io/api/1/news?apikey=pub_14098d031dcb6b75a973802450ffa38739feb&q=bitcoin&language=en"
)
  .then((response) => response.json())
  .then((response) => showNews(response));

function showNews(response) {
  title1.innerHTML = response.results[0].title;
  title2.innerHTML = response.results[1].title;
  title3.innerHTML = response.results[2].title;
  title4.innerHTML = response.results[3].title;
  title5.innerHTML = response.results[4].title;
  console.log(response);
  link1.href = response.results[0].link;
  link2.href = response.results[1].link;
  link3.href = response.results[2].link;
  link4.href = response.results[3].link;
  link5.href = response.results[4].link;
}

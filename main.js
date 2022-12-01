let price = document.getElementsByClassName("price");

const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");
const title3 = document.querySelector(".title3");
const title4 = document.querySelector(".title4");
const title5 = document.querySelector(".title5");

fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((res) => res.json())

  .then((res) => showPrice(res));

function showPrice(res) {
  setTimeout(() => {
    price[0].innerHTML = res.bpi.USD.rate;
  }, 1000);
}

fetch(
  "https://newsdata.io/api/1/news?apikey=pub_14098d031dcb6b75a973802450ffa38739feb&q=bitcoin&language=en"
)
  .then((response) => response.json())
  .then((response) => showNews(response));

function showNews(response) {
  title1.innerHTML = response.results[0].title;
}

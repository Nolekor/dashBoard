// get time
const timer = document.getElementById("time");

function getTime() {
  const date = new Date();
  timer.innerHTML = date.toLocaleTimeString("en-GB", { timeStyle: "short" });
}

setInterval(() => getTime(), 1000);

// set background image and author
async function getImage() {
  const res = await fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
  );
  const data = await res.json();
  document.body.style.backgroundImage = `url(${data.urls.full})`;
  document.getElementById(
    "author"
  ).textContent = `By: ${data.user.name} at ${data.location.name}`;
}
getImage();

// set crypto
async function getCrypto() {
  fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => {
      document.getElementById(
        "crypto-top"
      ).innerHTML = `<img id="crypto-image" src="${data.image.small}" />
      <span id="crypto-name">${data.name}</span>`;
      document.getElementById("crypto").innerHTML += `
      <p>🎯: €${data.market_data.current_price.eur}</p>
      <p>👆: €${data.market_data.high_24h.eur}</p>
      <p>👇: €${data.market_data.low_24h.eur}</p>
      `;
    })
    .catch((err) => console.error(err));
}
getCrypto();

// get weather

const weather = document.getElementById("weather");

function getLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("weather was not available");
        }
        return res.json();
      })
      .then((data) => {
        weather.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png" />
        <p id="temp">${Math.trunc(data.main.feels_like)}°c</p>
        <p class="city">${data.name}</p>
        `;
      })
      .catch((err) => console.error(err));
  });
}
getLocation();

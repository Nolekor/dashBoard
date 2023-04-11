async function getImage() {
  const res = await fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
  );
  const data = await res.json();
  console.log(data);
  document.body.style.backgroundImage = `url(${data.urls.full})`;
  document.getElementById(
    "author"
  ).textContent = `By: ${data.user.name} at ${data.location.name}`;
}
getImage();

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

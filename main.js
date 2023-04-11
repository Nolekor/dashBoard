async function getImage() {
  const res = await fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
  );
  const data = await res.json();
  document.body.style.backgroundImage = `url(${data.urls.full})`;
  document.getElementById("author").textContent = `By: ${data.user.name}`;
}
getImage();

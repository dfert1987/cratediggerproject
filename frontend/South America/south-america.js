const colombia = document.querySelector('#polyline12');
const brazil = document.querySelector('#polyline10');
const elem = document.querySelector('.country-info');
const brazilId = '10';
const colombiaId = '11';

colombia.addEventListener('mouseover', function (event) {
  fetchCountry(colombiaId);
});
brazil.addEventListener('mouseover', function (event) {
  fetchCountry(brazilId);
});

function fetchCountry(id) {
  fetch(`http://localhost:3000/countries/${id}`)
    .then((response) => response.json())
    .then((response) => showCountry(response));
}

function showCountry(country) {
  const countryCard = document.createElement('div');
  const countryName = document.createElement('h2');
  const flagImg = document.createElement('img');
  const countryDescription = document.createElement('p');

  countryCard.className = 'country-card';
  flagImg.className = 'flag';
  countryDescription.className = 'description';

  countryName.innerText = `${country.name}`;
  countryDescription.innerText = `${country.description}`;
  flagImg.src = `${country.flag}`;

  flagImg.style.width = '30%';
  countryDescription.style.fontFamily = 'bebas neue';
  countryDescription.style.fontSize = '30px';
  countryDescription.style.textAlign = 'center';
  countryDescription.style.textShadow = '2px 2px white';

  elem.append(countryCard);
  countryCard.append(countryName, flagImg, countryDescription);

  brazil.addEventListener('mouseleave', function (event) {
    removeCountry(countryCard);
  });
  colombia.addEventListener('mouseleave', function (event) {
    removeCountry(countryCard);
  });
}

function removeCountry(country) {
  country.remove();
}

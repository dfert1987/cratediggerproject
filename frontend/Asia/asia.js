const hk = document.querySelector('#Hong_Kong');
const japan = document.querySelector('#Japan');
const korea = document.querySelector('#South_Korea');
const taiwan = document.querySelector('#Taiwan');
const elem = document.querySelector('.country-info');
const hkId = '19';
const japanId = '16';
const koreaId = '18';
const taiwanId = '17';

hk.addEventListener('mouseover', function (event) {
  fetchCountry(hkId);
});
japan.addEventListener('mouseover', function (event) {
  fetchCountry(japanId);
});
korea.addEventListener('mouseover', function (event) {
  fetchCountry(koreaId);
});
taiwan.addEventListener('mouseover', function (event) {
  fetchCountry(taiwanId);
});

function fetchCountryLink(id) {
  fetch(`http://localhost:3000/countries/${id}`)
    .then((response) => response.json())
    .then((response) => linkCountry(response));
}

function fetchCountry(id) {
  fetch(`http://localhost:3000/countries/${id}`)
    .then((response) => response.json())
    .then((response) => controller(response));
}

function controller(country) {
  showCountry(country);
}

function linkCountry(country) {
  japan.innerHTML = `<a href="countryshow.html?id=${country.id}">${country.name}`;
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

  japan.addEventListener('mouseleave', function (event) {
    removeCountry(countryCard);
  });
  korea.addEventListener('mouseleave', function (event) {
    removeCountry(countryCard);
  });
  taiwan.addEventListener('mouseleave', function (event) {
    removeCountry(countryCard);
  });
  hk.addEventListener('mouseleave', function (event) {
    removeCountry(countryCard);
  });
}

function removeCountry(country) {
  country.remove();
}

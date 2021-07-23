const turkey = document.querySelector('.country #TR')
const france = document.querySelector('.country #FR')
const estonia = document.querySelector('.country #EE')
const italy = document.querySelector('.country #IT')
const elem = document.querySelector('.country-info');
const franceId = '20'
const italyId = '21'
const turkeyId = '22'
const estoniaId = '23'


turkey.addEventListener('mouseover', function(event){
    fetchCountry(turkeyId)
})
estonia.addEventListener('mouseover', function(event){
    fetchCountry(estoniaId)
})
italy.addEventListener('mouseover', function(event){
    fetchCountry(italyId)
})
france.addEventListener('mouseover', function(event){
    fetchCountry(franceId)
})


function fetchCountry(id) {
fetch(`http://localhost:3000/countries/${id}`)
.then(response => response.json())
.then(response => showCountry(response));
}

function showCountry(country) {
    const countryCard = document.createElement('div')
    const countryName = document.createElement('h2')
    const flagImg = document.createElement('img')
    const countryDescription = document.createElement('p')

    countryCard.className ='country-card'
    flagImg.className = 'flag'
    countryDescription.className = 'description'
    
    countryName.innerText = `${country.name}`
    countryDescription.innerText =`${country.description}`
    flagImg.src = `${country.flag}`
    
    flagImg.style.width ='30%'
    countryDescription.style.fontFamily = 'bebas neue'
    countryDescription.style.fontSize = '30px'
    countryDescription.style.textAlign = 'center'
    countryDescription.style.textShadow = '2px 2px white'

    
    elem.append(countryCard)
    countryCard.append(countryName, flagImg, countryDescription)
    

    france.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
    italy.addEventListener('mouseleave', function(event){
        removeCountry(countryCard)
})
    estonia.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
    turkey.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
}

function removeCountry(country){
    country.remove()
}



const cuba = document.querySelector('#cu')
const haiti = document.querySelector('#ht')
const jamaica = document.querySelector('#jm')
const trinidad = document.querySelector('#tt')
const cubaId = '15'
const haitiId = '13'
const jamaicaId = '14'
const trinidadId = '12'



jamaica.addEventListener('mouseover', function(event){
    fetchCountry(jamaicaId)
})
cuba.addEventListener('mouseover', function(event){
    fetchCountry(cubaId)
})
haiti.addEventListener('mouseover', function(event){
    fetchCountry(haitiId)
})
trinidad.addEventListener('mouseover', function(event){
    fetchCountry(trinidadId)
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
    
    flagImg.style.width ='20%'
    countryDescription.style.fontFamily = 'bebas neue'
    countryDescription.style.fontSize = '30px'
    countryDescription.style.width = '25%'
    countryDescription.style.textAlign = 'center'
    countryDescription.style.textShadow = '2px 2px white'

    
    document.body.append(countryCard)
    countryCard.append(countryName, flagImg, countryDescription)
    

    cuba.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
    trinidad.addEventListener('mouseleave', function(event){
        removeCountry(countryCard)
})
    jamaica.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
    haiti.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
}

function removeCountry(country){
    country.remove()
}



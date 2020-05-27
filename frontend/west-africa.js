const ghana = document.querySelector('.country #GH')
const cameroon = document.querySelector('.country #CM')
const ivoryCoast = document.querySelector('.country #CI')
const morocco = document.querySelector('.country #MA')
const mali = document.querySelector('.country #ML')
const nigeria = document.querySelector('.country #NG')
const country = document.querySelector('.country')
const maliId = '4'
const moroccoId = '5'
const nigeriaId = '1'
const cameroonId = '2'
const ghanaId = '3'
const icId = '6'


morocco.addEventListener('mouseover', function(event){
    fetchCountry(moroccoId)
})
mali.addEventListener('mouseover', function(event){
    fetchCountry(maliId)
})
nigeria.addEventListener('mouseover', function(event){
    fetchCountry(nigeriaId)
})
ivoryCoast.addEventListener('mouseover', function(event){
    fetchCountry(icId)
})
ghana.addEventListener('mouseover', function(event){
    fetchCountry(ghanaId)
})
cameroon.addEventListener('mouseover', function(event){
    fetchCountry(cameroonId)
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
    

    nigeria.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
    morocco.addEventListener('mouseleave', function(event){
        removeCountry(countryCard)
})
    ivoryCoast.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
    mali.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
    cameroon.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
    ghana.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
}

function removeCountry(country){
    country.remove()
}



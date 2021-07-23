const drc = document.querySelector('.country #CD')
const kenya = document.querySelector('.country #KE')
const southAfrica = document.querySelector('.country #ZA')
const country = document.querySelector('.country')
const drcId = '9'
const kenyaId = '8'
const southAfricaId = '7'

southAfrica.addEventListener('mouseover', function(event){
    fetchCountry(southAfricaId)
})
drc.addEventListener('mouseover', function(event){
    fetchCountry(drcId)
})
kenya.addEventListener('mouseover', function(event){
    fetchCountry(kenyaId)
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
    countryDescription.style.width = '25%'
    countryDescription.style.textAlign = 'center'
    countryDescription.style.textShadow = '2px 2px white'

    
    document.body.append(countryCard)
    countryCard.append(countryName, flagImg, countryDescription)
    

    southAfrica.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
    kenya.addEventListener('mouseleave', function(event){
        removeCountry(countryCard)
})
    drc.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
}

function removeCountry(country){
    country.remove()
}



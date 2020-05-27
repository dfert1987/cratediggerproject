const hk = document.querySelector('#Hong_Kong')
const japan = document.querySelector('#Japan')
const korea = document.querySelector('#South_Korea')
const taiwan = document.querySelector('#Taiwan')
const hkId = '19'
const japanId = '16'
const koreaId = '18'
const taiwanId = '17'



hk.addEventListener('mouseover', function(event){
    fetchCountry(hkId)
})
japan.addEventListener('mouseover', function(event){
    fetchCountry(japanId)
})
korea.addEventListener('mouseover', function(event){
    fetchCountry(koreaId)
})
taiwan.addEventListener('mouseover', function(event){
    fetchCountry(taiwanId)
})
// japan.innerHTML =`<a href="countryshow.html?id=${japanId}">`
// korea.innerHTML = `<a href="countryshow.html?id=${koreaId}">`

// hk.addEventListener('click', function(event){
//     fetchCountryLink(hkId)
// })
// japan.addEventListener('click', function(event){
//     fetchCountryLink(japanId)
// })
// korea.addEventListener('click', function(event){
//     fetchCountryLink(koreaId)
// })
// taiwan.addEventListener('click', function(event){
//     fetchCountryLink(taiwanId)
// })


function fetchCountryLink(id) {
    fetch(`http://localhost:3000/countries/${id}`)
    .then(response => response.json())
    .then(response => linkCountry(response));
    }

function fetchCountry(id) {
fetch(`http://localhost:3000/countries/${id}`)
.then(response => response.json())
.then(response => controller(response));
}

function controller(country) {
    showCountry(country)
}

function linkCountry(country) {
    japan.innerHTML = `<a href="countryshow.html?id=${country.id}">${country.name}`
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
    countryDescription.style.fontSize = '25px'
    countryDescription.style.width = '25%'
    countryDescription.style.textAlign = 'center'
    countryDescription.style.textShadow = '2px 2px white'

    
    document.body.append(countryCard)
    countryCard.append(countryName, flagImg, countryDescription)
    

    japan.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
    korea.addEventListener('mouseleave', function(event){
        removeCountry(countryCard)
})
    taiwan.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
    hk.addEventListener('mouseleave', function(event){
    removeCountry(countryCard)
})
}

function removeCountry(country){
    country.remove()
}



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mainBody").style.marginLeft = "0";
}

const endpoint = " https://musica-api.up.railway.app/new"
const endpointPopular = " https://musica-api.up.railway.app/popular"
let isLoading = true
const proceed = async ()=>{
    if (isLoading) {
        loading.innerHTML=`<img src="loading.gif"/>`
        }
    // To make a request
    let response = await fetch(endpoint)
    // To convert it to JSON  
    let convertedResponse = await response.json()
    console.log(convertedResponse)
    isLoading = false
    loading.innerHTML=" "
    convertedResponse.map((item, index) => {
        cards.innerHTML += `
        <div class="col card-holder position-relative mb-3" >
            <div class="position-absolute number "><strong>${index +1}</strong></div>
            <a href="${item.audio}"><i class="bi bi-play-circle position-absolute play text-success" style="font-size:100px;" onclick="" id="player"></i></a>
            <div class="card"  style="width: 20rem">
                <img src="${item.cover}" class="card-img-top the-image" id="the-image" alt="..." />
                <div class="card-body text-start">
                    <h5 class="card-title">${item.artist}</h5>
                    <h4 class="card-text">${item.title}</h4>
                    <h5>By <a href="#" class="the-a">${item.artist}</a></h5>
                    <h5>${item.duration}</h5>
                </div>
            </div>
        </div>`
    })
}
const newSongs = async ()=>{
    window.location="index.html"
}
const popularSongs = async ()=>{
    if (isLoading) {
        loading.innerHTML=`<img src="loading.gif"/>`
    }
    cards.innerHTML=""
    // To make a request
    let responsePop = await fetch(endpointPopular)
    // To convert it to JSON  
    let convertedResponsePop = await responsePop.json()
    console.log(convertedResponsePop)
    isLoading = false
    loading.innerHTML=" "
    convertedResponsePop.map((item, index) => {
        if (isLoading) {
        loading.innerHTML=`<img src="loading.gif"/>`
        }
        isLoading = false
        loading.innerHTML=" "
        cards.innerHTML += `
        <div class="col card-holder position-relative" >
            <div class="position-absolute number "><strong>${index +1}</strong></div>
            <a href="${item.audio}"><i class="bi bi-play-circle position-absolute play text-success" style="font-size:100px;" onclick="" id="player"></i></a>
            <div class="card"  style="width: 20rem">
                <img src="${item.cover}" class="card-img-top the-image" id="the-image" alt="..." />
                <div class="card-body text-start">
                    <h5 class="card-title">${item.artist}</h5>
                    <h4 class="card-text">${item.title}</h4>
                    <h5>By <a href="#" class="the-a">${item.artist}</a></h5>
                    <h5>${item.duration}</h5>
                </div>
            </div>
        </div>`
    })
}
const ipInput = document.getElementById('ipAddress');
const ipInformation = document.querySelector('[data-ip="address"]');
const ipLocation = document.querySelector('[data-ip="location"]');
const ipTimeZone = document.querySelector('[data-ip="timezone"]');
const ipIsp = document.querySelector('[data-ip="isp"]');
const formulario = document.querySelector('.formulario');
document.getElementById('map').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";
async function getResponse(ip) {
    const url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_VLpasI3xlYkMWL7Rt0EKCigJYM0rz&ipAddress=${ip}`
    const response = await fetch(url);
    const data = await response.json();

    if(!(data.as)) {
        ipLocation.innerHTML = `<h1 data-ip="location">${data.location.region}, ${data.location.country}</h1>`
        ipIsp.innerText = data.isp;
        ipTimeZone.innerText = data.location.timezone;
    }else {
        ipInformation.innerText = ipInput.value;
        ipLocation.innerHTML = `<h1 data-ip="location">${data.location.region}, ${data.location.country} <br>${data.as.asn}</h1>`
        ipTimeZone.innerText = data.location.timezone;
        ipIsp.innerText = data.isp;
    }
}

async function getMap(ip) {
    const url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_VLpasI3xlYkMWL7Rt0EKCigJYM0rz&ipAddress=${ip}`
    const response = await fetch(url);
    const data = await response.json();
    let map = L.map('map');
    var container = L.DomUtil.get('map');
      if(container != null){
        container._leaflet_id = null;
      }
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        foo: 'bar',
        maxZoom: 19,
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.setView([data.location.lat, data.location.lng], 16);
    let localPopUp = L.marker([data.location.lat, data.location.lng]).addTo(map);
    localPopUp.bindPopup(`${data.location.region}`).openPopup();
}

getMap("https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_VLpasI3xlYkMWL7Rt0EKCigJYM0rz&ipAddress=192.212.174.101")

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const ip = ipInput.value;
    getResponse(ip);
    getMap(ip);
})
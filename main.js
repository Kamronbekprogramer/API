const users__cards = document.querySelector(".users__cards")
const API_URL = "https://jsonplaceholder.typicode.com/users"




async function fetchData(API_URL) {
    try {
        console.log("Hello world");
        const getData = await fetch(API_URL);
        const responseData = await getData.json();
        createCard(responseData.slice(0, 10));
        console.log(responseData.slice(0, 10));
    } catch (error) {
        console.error(error);
    }
}

function createCard(data) {
    const cardsContainer = document.querySelector('.cards'); 
    data.forEach(user => {
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="card">
                <h1>Mijoz malumotlari:</h1>
                <h4 class="id">id: ${user.id}</h4>
                <h4 class="name">name: ${user.name}</h4>
                <h4 class="username">username: ${user.username}</h4>
                <h4 class="email">email: ${user.email}</h4>
                <div class="address">
                    <h4>address:</h4>
                    <p class="street">street: ${user.address.street}</p>
                    <p class="suite">suite: ${user.address.suite}</p>
                    <p class="city">city: ${user.address.city}</p>
                    <p class="zipcode">zipcode: ${user.address.zipcode}</p>
                    ${user.geo ? 
                        `<div class="geo">
                            <h4>geo:</h4>
                            <p class="lat">${user.geo.lat}</p>
                            <p class="lng">${user.geo.lng}</p>
                        </div>` 
                        : ''
                    }
                </div>
                <h4 class="phone">phone: ${user.phone}</h4>
                <h4 class="website">website: ${user.website}</h4>
                <div class="company">
                    <h4>company:</h4>
                    <h4>company name: ${user.company.name}</h4>
                    <h4>company catchPHrase: ${user.company.catchPhrase}</h4> <!-- Typo corrected: 'catchPHrase' to 'catchPhrase' -->
                    <h4>company bs: ${user.company.bs}</h4>
                </div>
            </div>
        
        `;
        cardsContainer.appendChild(card);
    });
}


  fetchData(API_URL).catch(data => data.json())

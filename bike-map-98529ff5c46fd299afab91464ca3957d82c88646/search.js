const streetTemplate = document.querySelector('[data-street-template]')
const streetCardContainer = document.querySelector('[data-street-card-container]')
const searchInput = document.querySelector('[data-search]')

let streets = []

searchInput.addEventListener("input", e =>{
    const value = e.target.value.toLowerCase();
    streets.forEach(street => { 
    const isVisible = street.streetName.toLowerCase().includes(value)
    street.element.classList.toggle("hide", !isVisible)
    })
})

fetch("rating-data.json")
    .then(res => res.json())
    .then(data => {
        streets = data.map(user => {
            const card = streetTemplate.content.cloneNode(true).children[0]
            const streetName = card.querySelector("[data-name]")
            const totalVotes = card.querySelector("[data-votes")
            streetName.textContent = user.name
            totalVotes.textContent = user.phone
            streetCardContainer.append(card);
            return {streetName: user.name, element: card}
        })
    })



const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// to update the count which is shown below
function updateSelectCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected') // give space between row and seat as it is child of row
    // console.log(selectedSeats)

    // to select the index of each seats
    // copy selected seats into arr
    // map through arr
    // return the new arr with indexes
    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
    // console.log(seatIndex)

    // save it local storage
    localStorage.setItem('selectedSeats',JSON.stringify(seatIndex))



    count.innerText= selectedSeats.length // for changing the number represented for selected seats
    total.innerText = ticketPrice * selectedSeats.length
}

// movie changed event
movieSelect.addEventListener('change',(e)=>{
    ticketPrice = +e.target.value // here we are changing the ticket price from select

    // to select the index of flim options
    // console.log(e.target.selectedIndex) // selectedIndex is in built property

    setMovieData(e.target.selectedIndex,e.target.value)

    updateSelectCount()
})

// save selected movie index and price
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectMovieIndex',movieIndex)
    localStorage.setItem('selectMoviePrice',moviePrice)
    // no json stringfy as data is already in string format
}

// seat clicked event
container.addEventListener('click',(e)=>{
    // e is the element on which eventlistener is added for example here we adding it on container so anywhere we click it will get selected and we get class id and other properties
    // console.log(e.target)

    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){ // if select only when class is seat and not occupied
        // console.log(e.target)
        e.target.classList.toggle('selected') //changing the class to seat selected 
        // toggle add something if not present if prosent remove it
        updateSelectCount();
    }
})
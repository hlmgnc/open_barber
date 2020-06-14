const colors = require('colors')
const db = require('./database')
// const Guest = require('./guest')
// const Barber = require('./barber')

// const hilmi = new Guest('Hilmi')
// const cem = new Barber('Cem')

// hilmi.book(cem,'Haircut')
// hilmi.cancel(cem,'16-02-2021 at 14:00')
// hilmi.change(cem,'16-02-2021 at 14:00')

function printBooking(booking) {
    console.log(`${colors.blue(booking.guest.name)} has ${colors.red(booking.guest.bookings.length)} booking(s) with ${colors.blue(booking.barber.name)} for ${colors.green(booking.guest.demand)} in ${colors.red(booking.guest.date)}`)
}
function printBookingHistory(guest){ 
    guest.bookings.forEach(printBooking)
}
function printCancellation(cancellation){
    console.log(`${colors.blue(cancellation.guest.name)} has  cancelled booking which is at ${colors.red(cancellation.guest.date)}`)
}
function printCancellationHistory(guest){
    guest.cancellations.forEach(printCancellation)
}
function printChanging(changing){
    console.log(`${colors.blue(changing.guest.name)} wants to change his reservation with ${colors.red(changing.guest.newDate)} which was at ${colors.red(changing.guest.date)} `)
}
function printChangingHistory(guest) {
    guest.changings.forEach(printChanging)
}

//db.save('guests', [hilmi])
//db.save('barber', [cem])

const guests = db.load('guests')

// guests.forEach(printBookingHistory)
// guests.forEach(printCancellationHistory)
// guests.forEach(printChangingHistory)

//printBookingHistory(hilmi)
//printCancellationHistory(hilmi)
//printChangingHistory(hilmi)
const semih = new Guest('semih')

db.insert('guests',semih)
const guests = db.load('guests')

guests.forEach(p => console.log(p.name))
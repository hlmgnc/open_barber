const Booking = require('./booking')
const Cancellation = require('./cancellation')
const Changing = require('./changing')

class Guest {
    constructor(name) {
        this.name = name 
        // this.email = email
        // this.phone = phone
        this.demand = 'Haircut'
        this.bookings = []
        this.cancellations = []
        this.changings = []
        this.date = '16-02-2021 at 14:00'
        this.newDate = '01-03-2021 at 18:00'
    }

    book(barber,demand){
        const booking = new Booking(barber, this, demand)
        this.bookings.push(booking)
        return booking
    }
    cancel(barber,date){
        const cancellation = new Cancellation(barber, this, date)
        this.cancellations.push(cancellation)
        return cancellation
    }
    change(barber,date){
        const changing = new Changing(barber, this, date)
        this.changings.push(changing)
        return changing
    }
}

module.exports = Guest
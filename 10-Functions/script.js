'use strict';

const bookings = [];

const creatBooking = function(flightNum,numPassanger, price){
    const booking = {
        flightNum,numPassanger,price
    }
    console.log(booking);
    bookings.push(booking);
}

creatBooking('LH123');
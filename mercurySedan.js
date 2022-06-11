const VehicleModule = require("./vehicle")

class Car extends VehicleModule.Vehicle{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5
        // this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

    loadPassenger(num){
        if (this.passenger + num <= maximumPassengers){
            this.passenger = this.passenger + num
        }
    }

    // this is already defined in the base class, see below
    // start(){
    //     if (this.fuel > 0){
    //         started = true
    //     }
    // }

    checkService(mileage){
        if (this.milage > 30000){
            scheduleService = true
        }
    }
}

let mercury = new Car('mercury', 'A28', '2022', 'red', 19000)
mercury.start()
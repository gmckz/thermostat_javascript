const Thermostat = require('./thermostat');


describe('Thermostat', () => {
    it('an instance of thermostat initially has temperature 20 and maxTemperature 25', () => {
        const thermostat = new Thermostat();
        expect(thermostat.temperature).toEqual(20);
        expect(thermostat.maxTemperature).toEqual(25);
        expect(thermostat.minTemperature).toEqual(10);
    });
});

describe('up', () => {
    it('calling up twice increases temperature to 22', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(22);
    })
    it('up stops adding to temperature when max temperature reached', () => {
        const thermostat = new Thermostat();
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(25);
    })
})

describe('getTemperature', () => {
    it('calling getTemperature returns current temperature', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toEqual(20);
    });
})

describe('down', () => {
    it('calling down three times decreases temperature to 17', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        expect(thermostat.getTemperature()).toEqual(17);
    })
    it('up stops decreasing temperature when min temperature reached', () => {
        const thermostat = new Thermostat();
        for (let i = 0 ; i < 15 ; i++) {
            thermostat.down();
        }
        expect(thermostat.getTemperature()).toEqual(10);
    })
})

describe('setPowerSavingMode', () => {
    it('calling setPowerSavingMode(false) sets max temperature to 32', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        expect(thermostat.getMaxTemperature()).toEqual(32);
    })
    it('calling setPowerSavingMode(true) sets max temperature to 25', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        thermostat.setPowerSavingMode(true);
        expect(thermostat.getMaxTemperature()).toEqual(25);
    })
})

describe('getMaxTemperature', () => {
    it('calling getMaxTemperature returns current maxTemperature', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getMaxTemperature()).toEqual(25);
    });
})

describe('reset', () => {
    it('calling reset after increasing temperature to 22 returns temperature to 20', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        thermostat.reset();
        expect(thermostat.getTemperature()).toEqual(20);
    } )
})

describe('getCurrentEnergyUsage', () => {
    it('when temperature is changed to 17 current energy usage is Low', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        expect(thermostat.getCurrentEnergyUsage()).toEqual("Low usage")
    })
    it('when temperature is changed to 18 current energy usage is Medium', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        thermostat.down();
        expect(thermostat.getCurrentEnergyUsage()).toEqual("Medium usage")
    })
    it('when temperature is changed to 25 current energy usage is Medium', () => {
        const thermostat = new Thermostat();
        for (let i = 0 ; i < 5 ; i++) {
            thermostat.up();
        }
        expect(thermostat.getCurrentEnergyUsage()).toEqual("Medium usage")
    })
    it('when temperature is changed to 26 current energy usage is Medium', () => {
        const thermostat = new Thermostat();
        console.log(thermostat.getTemperature()); 
        thermostat.setPowerSavingMode(false);
        for (let i = 0 ; i < 6 ; i++) {
            thermostat.up();
        }
        console.log(thermostat.getTemperature());        
        expect(thermostat.getCurrentEnergyUsage()).toEqual("High usage")
    })
})
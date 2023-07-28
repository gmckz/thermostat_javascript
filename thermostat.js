class Thermostat {
    constructor() {
        this.temperature = 20;
        this.maxTemperature = 25;
        this.minTemperature = 10;
    }

    up() {
        if (this.temperature < this.maxTemperature) {
            this.temperature += 1;
        }
    };

    getTemperature() {
        return this.temperature;
    };

    down() {
        if (this.temperature > this.minTemperature) {
            this.temperature -= 1;
        }
    }

    setPowerSavingMode(bool) {
        if (bool === true) {
            this.maxTemperature = 25;
            if (this.temperature > this.maxTemperature) {
                this.temperature = this.maxTemperature;
            }
        } else {
            this.maxTemperature = 32;
        }
    }

    getMaxTemperature() {
        return this.maxTemperature;
    }

    reset() {
        this.temperature = 20;
    }

    getCurrentEnergyUsage() {
        if (this.temperature < 18) {
            return "Low usage"
        } else if (this.temperature <= 25) {
            return "Medium usage"
        } else {
            return "High usage"
        }
    }
};
module.exports = Thermostat;
Thermostat class

Specification:
- The Thermostat starts with an initial temperature of 20 degrees
- You can increase the temperature with an up method
- You can decrease the temperature with a down method
- The minimum possible temperature is 10 degrees
- The Power saving mode is on by default but it can also be turned off
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- You can reset the temperature to 20 with a reset method
- You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is  medium-usage, anything else is high-usage.
___________________________

Properties:
temperature (initially set to 20 degrees)
maximum temperature (initially 25 degrees (PowerSavingMode true))

___________________________

Methods:

up() - increases the temperature by 1 degree
arguments - none
output - none
side-effects - increases the temperature property by 1 degree, until maximum temperature reached

down() - decreases the temperature by 1 degree
arguments - none
output - none
side-effects - decreases the temperature property by 1 degree until miniumum temperature reached

getTemperature() - gets temperature
arguments - none
output - value of temperature property
side-effects - none

setPowerSavingMode(boolean) - turns power saving mode on/off
arguments - a boolean, true or false
output - none
side-effects - sets maximum temperature property to 25 if argument true or 32 if argument false

reset() - resets temperature to 20
arguments - none
output - none
side-effects - resets temperature to 20 degrees 

getCurrentEnergyUsage() - returns low, medium or high usage depending on current temperature
arguments - none
output - a string, "High/Medium/Low usage"
side-effects - none
___________________________

Test cases:
    - initially temperature is set to 20
    - initially maximum temperature is set to 25
    - initially minimum temperature is set to 10

up()
    - calling up twice increases temperature from 20 to 22
    - when temperature reaches maximum temperature, subsequent calls of up() do not increase the temperature

down()
    - calling down three times decreases temperature from 20 to 17
    - when temperature reaches 10 degrees, subsequent calls of Down() do not decrease the temperature

getTemperature()
    - calling get temperature returns current temperature

setPowerSavingMode(boolean)
    - calling setPowerSavingMode(false) sets max temperature to 32
    - calling setPowerSavingMode(true) sets max temperature to 25

reset()
    - calling reset() sets temperature to 20

getCurrentEnergyUsage()
    - when temperature is 17 getCurrentEnergyUsage returns "Low usage"
    - when temperature is 18 getCurrentEnergyUsage returns "Medium usage"
    - when temperature is 25 getCurrentEnergyUsage returns "Medium usage"
    - when temperature is 26 getCurrentEnergyUsage returns "High usage"



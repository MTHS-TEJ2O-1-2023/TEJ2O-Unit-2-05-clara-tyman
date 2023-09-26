/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Clara Tyman
 * Created on: Sep 2023
 * This program ...
*/


basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// varible
let temperature: number

input.onButtonPressed(Button.A, function () {
//input
  temperature = input.temperature()

//process
  temperature = temperature + 273.15
  temperature = Math.round(temperature)

//output
  basic.showString('The temperature is' + temperature.toString() + 'k.')

})

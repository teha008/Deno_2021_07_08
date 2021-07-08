import { dayOfYear, currentDayOfYear } from 'https://deno.land/std@0.61.0/datetime/mod.ts'

console.log(dayOfYear(new Date('2021-07-08')))
console.log(currentDayOfYear())

import { DateTime } from "./luxon.js";
export const time = () => {
let today = DateTime.now();
let nows = {
  day: today.day,
  month: today.month,
  year: today.year,
  hour: today.hour,
  min: today.minute,
  mid: 'AM'
}

if(nows.hour>12) {
  nows.hour %= 12;
  nows.mid='PM';
}
return nows;
}
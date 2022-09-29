/* eslint-disable max-classes-per-file */
import { DateTime } from './luxon.js';

const timenow = () => {
  const today = DateTime.now();
  const nows = {
    day: today.day,
    month: today.month,
    year: today.year,
    hour: today.hour,
    min: today.minute,
    mid: 'AM',
  };

  if (nows.hour > 12) {
    nows.hour %= 12;
    nows.mid = 'PM';
  }
  return nows;
};

export default timenow();
/*
Function to handle Search button click.
*/

import errorAlert from './errorAlert';
import successAlert from './successAlert';

const capitalizeString = (str: string) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const handleSearch = (
  from: string,
  to: string,
  departureDate: Date | undefined,
  returnDate: Date | undefined,
  roundTrip: boolean,
  needAccommodation: boolean
) => {
  console.log(departureDate?.toDateString());
  if (!from) {
    errorAlert('Please fill in departure');
  } else if (!to) {
    errorAlert('Please fill in destination');
  } else if (to === from) {
    errorAlert('Destination and point of departure cannot be the same');
  } else if (returnDate && departureDate && departureDate > returnDate) {
    errorAlert('Return date cannot be earlier than Departure');
  } else if (
    returnDate?.toDateString() === 'Invalid Date' ||
    departureDate?.toDateString() === 'Invalid Date'
  ) {
    errorAlert(
      `Please correct the ${
        departureDate?.toDateString() === 'Invalid Date'
          ? 'Departure'
          : 'Return'
      } date`
    );
  } else
    successAlert(
      `${!roundTrip ? 'One-way' : 'Round'} trip
      from ${capitalizeString(from)} to ${capitalizeString(to)}
      on ${departureDate?.toDateString()} ${
        roundTrip ? `and return on ${returnDate?.toDateString()}` : ''
      }
      with ${needAccommodation ? '' : 'no '}accommodation.
      \nBTW! Check out my:`
    );
};

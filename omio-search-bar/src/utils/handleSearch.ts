import Swal from 'sweetalert2';

export const handleSearch = (from: string, to: string) => {
  if (!from) {
    Swal.fire({
      title: 'Oops...',
      text: 'Please, fill in "Departure (from)" field',
      background: 'rgb(245, 245, 245, 0.8)',
      showConfirmButton: true
    });
  } else if (!to) {
    Swal.fire({
      title: 'Oops...',
      text: 'Please, fill in "Destination (to)" field',
      background: 'rgb(245, 245, 245, 0.8)',
      showConfirmButton: true
    });
  } else
    Swal.fire({
      title:
        'Great! Search bar works!\n\nNow U R very welcome to check out my Ecole 42 web project:',
      html: '<a href="http://www.pongthegame.rocks" target="_blank" style="color: #fa6b6b;">www.pongthegame.rocks</a>',
      background: 'rgb(245, 245, 245, 0.8)',
      showConfirmButton: false
    });
};

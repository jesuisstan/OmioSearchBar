import Swal from 'sweetalert2';
import * as color from '../styles/colors';

const errorAlert = (text: string) => {
  Swal.fire({
    showConfirmButton: false,
    icon: 'success',
    iconColor: color.OMIO_ORANGE,
    width: 450,
    title: text,
    showCloseButton: false,
    color: color.OMIO_VIOLET,
    background: color.OMIO_WHITE,
    html: '<a href="http://www.pongthegame.rocks" target="_blank" style="color: #fa6b6b;">www.pongthegame.rocks</a>'
  });
};

export default errorAlert;

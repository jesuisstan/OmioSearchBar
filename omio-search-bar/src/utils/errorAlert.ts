import Swal from 'sweetalert2';
import * as color from '../styles/colors';

const errorAlert = (text: string) => {
  Swal.fire({
    showConfirmButton: true,
    icon: 'warning',
    iconColor: color.OMIO_ORANGE,
    width: 450,
    text: text,
    showCloseButton: false,
    color: color.OMIO_VIOLET,
    background: color.OMIO_WHITE
  });
};

export default errorAlert;

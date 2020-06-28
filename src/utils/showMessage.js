import {showMessage} from 'react-native-flash-message';
import {Colors} from './Colors';

const showError = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: Colors.SOFT_RED,
    color: Colors.WHITE
  });
};

const showSuccess = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: Colors.STRONG_CYAN,
    color: Colors.WHITE
  });
};

export {showError, showSuccess};

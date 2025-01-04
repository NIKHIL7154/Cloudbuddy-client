
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useContext } from 'react';
import { ToastAPI } from '../contexts/ToastContext';

export default function AlertToast() {
  const Toast=useContext(ToastAPI);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    Toast[1]((prevState)=>({...prevState,state:false}))
  };

  return (
    <div>
      
      <Snackbar open={Toast[0].state} autoHideDuration={Toast[0].duration || 4000} onClose={handleClose}>
        <Alert
          
          onClose={handleClose}
          severity={Toast[0].type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {Toast[0].message}
        </Alert>
      </Snackbar>
    </div>
  );
}
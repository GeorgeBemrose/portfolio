import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { PopUpChildProps } from '../../../types';

const MyComponent: React.FC<PopUpChildProps> = ({open, setOpen, title, content}) => {

  const handleClosePopup = () => {
    setOpen(false); // Close the popup
  };

  return (
    <Dialog open={open} onClose={handleClosePopup}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <p>{content}</p>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClosePopup} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
  );
};

export default MyComponent;

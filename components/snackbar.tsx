import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide, { type SlideProps } from '@mui/material/Slide';
import Grow, { type GrowProps } from '@mui/material/Grow';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

interface TransitionsSnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

export default function TransitionsSnackbar({
  open,
  onClose,
  message,
}: TransitionsSnackbarProps) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      message={message}
      autoHideDuration={3000}
      slots={{ transition: SlideTransition }}
    />
  );
}
import React from 'react';
import { Button } from 'react-bootstrap';

function CustomButton({ variant, children, ...rest }) {
  return (
    <Button variant={variant} {...rest}>
      {children}
    </Button>
  );
}

export default CustomButton;
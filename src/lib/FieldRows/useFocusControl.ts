import { useState } from 'react';

const useFocusControl = () => {
  const [focusedProperty, setFocusedProperty] = useState('');

  function toggle(property: string) {
    setFocusedProperty(property);
  }

  return {
    focusedProperty,
    toggle,
  };
};

export default useFocusControl;

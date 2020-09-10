import React from 'react';

import Modal from '../Modal/modal';
import useModal from '../Modal/useModal';
import '../Modal/modal.css';

interface MultipleChoiceFieldRowrops {
  inputType: 'text' | 'dropdown' | 'multiple-choice',
  title: string,
  property: string,
  value: any,
  handleFieldChange: CallableFunction,
  EditorComponent: React.FunctionComponent,
}

const MultipleChoiceFieldRow = ({
  inputType, title, property, value, EditorComponent, handleFieldChange,
}: MultipleChoiceFieldRowrops) => {
  const { isShowing, toggle } = useModal();
  return (
    <div key={property}>
      <label htmlFor={property}>
        {title}
        :
      </label>
      {value}
      <button type="button" className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      >
        <EditorComponent />
      </Modal>
    </div>
  );
};

export default MultipleChoiceFieldRow;

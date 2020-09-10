import React from 'react';

import Modal from '../Modal/modal';
import useModal from '../Modal/useModal';
import '../Modal/modal.css';

interface MultipleChoiceFieldRowrops {
  title: string,
  property: string,
  value: any,
  handleFieldChange: CallableFunction,
  EditorComponent: React.FunctionComponent,
}

const MultipleChoiceFieldRow = ({
  title, property, value, EditorComponent, handleFieldChange,
}: MultipleChoiceFieldRowrops) => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="form-field-row" key={property}>
      <label htmlFor={property}>
        {title}
      </label>
      <button type="button" className="asText" onClick={toggle}>{value}</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        handleFieldChange={handleFieldChange}
      >
        <EditorComponent />
      </Modal>
    </div>
  );
};

export default MultipleChoiceFieldRow;

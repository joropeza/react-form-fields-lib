import React from 'react';

import MultipleChoiceFieldRow from './FieldRows/MultipleChoiceFieldRow';
import TextFieldRow from './FieldRows/TextFieldRow';

import { FieldRowProps } from './FieldRows/FieldRowProps';

import './index.css';

const notComponent = () => <div />;

const FieldRow = ({
  inputType, title, property, value, options = [], handleFieldChange, EditorComponent,
}: FieldRowProps) => {
  switch (inputType) {
    case 'text': {
      return TextFieldRow({
        inputType, options, title, property, value, handleFieldChange,
      });
    }
    case 'dropdown': {
      return TextFieldRow({
        inputType, options, title, property, value, handleFieldChange,
      });
    }
    case 'multiple-choice': {
      return MultipleChoiceFieldRow({
        title,
        property,
        value,
        handleFieldChange,
        EditorComponent: EditorComponent || notComponent,
      });
    }
    default: {
      return TextFieldRow({
        inputType, options, title, property, value, handleFieldChange,
      });
    }
  }
};

export default FieldRow;

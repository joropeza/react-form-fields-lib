import React from 'react';

export interface FieldRowProps {
  inputType: 'text' | 'dropdown' | 'multiple-choice',
  title: string,
  property: string,
  value: any,
  options?: Array<any>,
  handleFieldChange: CallableFunction,
  EditorComponent?: React.FunctionComponent,
}

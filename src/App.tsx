import React, { useState } from 'react';
import './App.css';

import FieldRow from './lib';

type RowValues = {
  valuePropertyName: string,
  property: string,
  inputType: 'text' | 'dropdown' | 'multiple-choice',
  options?: Array<any>,
  title: string,
  editorComponent?: React.FunctionComponent,
  value: string,
};

const fieldRows: Array<RowValues> = [
  {
    valuePropertyName: 'plain',
    property: 'plain',
    inputType: 'text',
    title: 'Plain Text',
    value: '',
  },
  {
    valuePropertyName: 'plain_with_default',
    property: 'plain_with_default',
    inputType: 'text',
    title: 'Plain Text with Default Value',
    value: '111 W Pennsylvania Ave',
  },
  {
    valuePropertyName: 'category',
    options: ['COVID-19', 'Leadership', 'Tests'],
    property: 'category',
    inputType: 'text',
    title: 'Auto-Suggest',
    value: '',
  },
  {
    valuePropertyName: 'slug',
    property: 'slug',
    inputType: 'dropdown',
    title: 'Dropdown',
    value: '',
  },
  {
    valuePropertyName: 'multiple',
    property: 'multiple',
    inputType: 'multiple-choice',
    title: 'Multiple-Choice',
    value: 'Default Value',
  },
];

function App() {
  const [rowData, setRowData] = useState(fieldRows);

  const handleFieldChange = (property: string, newValue: string) => {
    const newState = [...rowData];
    const selectedRow = newState.find((row) => row.property === property) || { value: '' };
    selectedRow.value = newValue;
    setRowData(newState);
  };

  const rows = rowData.map((row) => (
    <FieldRow
      inputType={row.inputType}
      options={row.options || []}
      key={row.valuePropertyName}
      title={row.title}
      property={row.property}
      value={row.value}
      handleFieldChange={handleFieldChange}
      EditorComponent={row.editorComponent || undefined}
    />
  ));

  return (
    <div className="App">
      <main>
        {rows}
      </main>
    </div>
  );
}

export default App;

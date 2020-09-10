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
    valuePropertyName: 'title',
    property: 'title',
    inputType: 'text',
    title: 'Headline',
    value: '',
  },
  {
    valuePropertyName: 'slug',
    property: 'slug',
    inputType: 'text',
    title: 'Slug',
    value: '',
  },
  {
    valuePropertyName: 'category',
    options: ['COVID-19', 'Leadership', 'Tests'],
    property: 'category',
    inputType: 'text',
    title: 'Category',
    value: '',
  },
];

function App() {
  const [rowData, setRowData] = useState(fieldRows);

  const handleFieldChange = (property: string, newValue: string) => {
    const newState = [...rowData];
    const selectedRow = newState.find((row) => row.property === property) || { value: '' };
    console.log(property, newValue, newState);
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

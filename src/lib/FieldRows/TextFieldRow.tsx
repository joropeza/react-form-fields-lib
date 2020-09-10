import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

import { FieldRowProps } from './FieldRowProps';

function getSuggestionValue(suggestion: any) {
  return suggestion;
}

function shouldRenderSuggestions(value: any) {
  return value.trim().length > 2;
}

const TextFieldRow = ({
  title, options, property, value, handleFieldChange,
}: FieldRowProps) => {
  const [isEditing, setIsEditing] = useState(false);
  if (options && options.length > 0) {
    const inputProps = {
      placeholder: 'type...',
      value,
      onChange: (e: any, { newValue }: any) => handleFieldChange(property, newValue),
    };

    const suggestions:any = options;

    return (
      <div className="form-field-row" key={property}>
        <label htmlFor={property}>
          {title}
        </label>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={() => {}}
          onSuggestionsClearRequested={() => {}}
          getSuggestionValue={getSuggestionValue}
          shouldRenderSuggestions={shouldRenderSuggestions}
          renderSuggestion={(suggestion) => <div>{suggestion}</div>}
          inputProps={inputProps}
        />
      </div>

    );
  }
  return (
    <div className="form-field-row" key={property}>
      <label htmlFor={property}>
        {title}
      </label>
      {isEditing || !value ?
        <input id={property} type="text" value={value} onChange={(e) => handleFieldChange(property, e.target.value)} /> :
        <button className="asText" type="button" onClick={() => setIsEditing(true)}>{value}</button>
      }
    </div>
  );
};

export default TextFieldRow;

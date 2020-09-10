import React from 'react';
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
  if (options && options.length > 0) {
    const inputProps = {
      placeholder: 'type...',
      value,
      onChange: (e: any, { newValue }: any) => handleFieldChange(property, newValue),
    };

    const suggestions:any = options;

    return (
      <div key={property}>
        <label htmlFor={property}>
          {title}
          :
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={() => {}}
            onSuggestionsClearRequested={() => {}}
            getSuggestionValue={getSuggestionValue}
            shouldRenderSuggestions={shouldRenderSuggestions}
            renderSuggestion={(suggestion) => <div>{suggestion}</div>}
            inputProps={inputProps}
          />
        </label>
      </div>

    );
    // create a list of suggestions
  }
  return (
    <div key={property}>
      <label htmlFor={property}>
        {title}
        :
        <input id={property} type="text" value={value} onChange={(e) => handleFieldChange(property, e.target.value)} />
      </label>
    </div>
  );
};

export default TextFieldRow;

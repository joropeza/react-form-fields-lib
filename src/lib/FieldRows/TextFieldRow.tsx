import React, { useEffect, useRef, useState } from 'react';
import Autosuggest from 'react-autosuggest';

import { FieldRowProps } from './FieldRowProps';
import useFocusControl from './useFocusControl';

function getSuggestionValue(suggestion: any) {
  return suggestion;
}

function shouldRenderSuggestions(value: any) {
  return value.trim().length > 2;
}

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const TextFieldRow = ({
  title, options, property, value, handleFieldChange,
}: FieldRowProps) => {
  const [isEditing, setIsEditing] = useState(!value);
  const inputElement = useRef<HTMLInputElement>(null);
  const { focusedProperty, toggle } = useFocusControl();

  const startEditing = () => {
    setIsEditing(true);
    toggle(property);
  };

  useEffect(() => {
    if (inputElement && inputElement.current && focusedProperty === property) {
      inputElement.current.focus();
    }
  });

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
      {isEditing
        ? (
          <input
            id={property}
            ref={inputElement}
            type="text"
            value={value}
            onBlur={() => setIsEditing(!value)}
            onFocus={() => setIsEditing(true)}
            onChange={(e) => handleFieldChange(property, e.target.value)}
          />
        )
        : (
          <button
            className="asText"
            type="button"
            onFocus={() => startEditing()}
            onClick={() => startEditing()}
          >
            {value}
          </button>
        )}
    </div>
  );
};

export default TextFieldRow;

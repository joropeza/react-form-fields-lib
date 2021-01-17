/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import Autosuggest from 'react-autosuggest';

import { FieldRowProps } from './FieldRowProps';
import useFocusControl from './useFocusControl';

import './autosuggest.css';

function getSuggestionValue(suggestion: any) {
  return suggestion;
}

function shouldRenderSuggestions(value: any) {
  return value.trim().length > 2;
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

  const handleKeyPress = (target :any) => {
    if (target.charCode === 13 && value) {
      setIsEditing(false);
    }
  };

  const inputProps = {
    placeholder: 'type...',
    value,
    onBlur: () => setIsEditing(!value),
    onChange: (e: any, { newValue }: any) => handleFieldChange(property, newValue),
  };

  const suggestions:any = options;

  const bareInputComponent = (iProps:any) => (
    <input
      id={property}
      ref={inputElement}
      type="text"
      value={value}
      onBlur={() => setIsEditing(!value)}
      onFocus={() => setIsEditing(true)}
      onKeyPress={(e) => handleKeyPress(e)}
      onChange={(e) => handleFieldChange(property, e.target.value)}
      {...iProps}
    />
  );

  const inputElementRendering = (options && options.length > 0)
    ? (
      <Autosuggest
        id={`autosuggest-${property}`}
        suggestions={suggestions}
        onSuggestionsFetchRequested={() => {}}
        onSuggestionsClearRequested={() => {}}
        getSuggestionValue={getSuggestionValue}
        shouldRenderSuggestions={shouldRenderSuggestions}
        renderSuggestion={(suggestion) => <div>{suggestion}</div>}
        renderInputComponent={bareInputComponent}
        inputProps={inputProps}
      />
    )
    : (
      <input
        id={property}
        ref={inputElement}
        type="text"
        value={value}
        onBlur={() => setIsEditing(!value)}
        onFocus={() => setIsEditing(true)}
        onKeyPress={(e) => handleKeyPress(e)}
        onChange={(e) => handleFieldChange(property, e.target.value)}
      />
    );

  return (
    <div className="form-field-row" key={property}>
      <label htmlFor={property}>
        {title}
      </label>
      {isEditing
        ? (inputElementRendering)
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

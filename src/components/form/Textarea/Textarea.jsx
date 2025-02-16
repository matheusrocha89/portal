/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

function Textarea({ name, label, control, rules }) {
  const { field: input, fieldState: state } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  });

  return (
    <label htmlFor={name}>
      <textarea
        className="input-field"
        placeholder={label}
        aria-errormessage={state.error?.message}
        aria-invalid={state.invalid}
        aria-label={label}
        {...input}
      />

      {state.error && (
        <span
          key={state.error}
          className="text-alert text-sm anima-input-error-message"
        >
          {state.error.message}
        </span>
      )}
    </label>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  rules: PropTypes.objectOf(PropTypes.any),
};

Textarea.defaultProps = {
  rules: {},
};

export { Textarea };

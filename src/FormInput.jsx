import React, { memo } from 'react';

const FormInput = memo(({ label, labelEn, type, value, onChange, placeholder, required = true }) => {
  return (
    <div>
      <label>
        {label} {labelEn && ` / ${labelEn}`} {required && '*'}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
});

export default FormInput;

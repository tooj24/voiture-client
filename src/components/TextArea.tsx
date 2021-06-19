import React from 'react';

interface Props {
  name: string;
  label: string;
  value: string | number;
  placeholder?: string;
  error: string;
  onChange: (e: any) => void;
}

const TextArea = ({ name, label, value, placeholder, error, onChange, ...props }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor="comment">{label}</label>
      <textarea
        id={name}
        name={name}
        rows={3}
        placeholder={placeholder || label}
        className={"form-control" + (error && " is-invalid")}
        value={value}
        onChange={onChange}
      ></textarea>
      {error && <p className="invalid-feedback">{error}</p>}
    </div>
  )
};

export { TextArea };
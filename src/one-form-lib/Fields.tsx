export default function Fields({
  label,
  type,
  name,
  required = false,
  placeholder = "",
  disabled = false,
  hidden = false,
}: {
  label?: string;
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  hidden?: boolean;
}) {
  if (!label && !placeholder)
    return <h3>Need a Label or Placeholder for filed - {name}</h3>;

  if (type === "email" || type === "text" || type === "number")
    if (label)
      return (
        <label>
          {label}
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            hidden={hidden}
            disabled={disabled}
          />
        </label>
      );
    else {
      return (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          hidden={hidden}
          disabled={disabled}
        />
      );
    }

  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        hidden={hidden}
        disabled={disabled}
      />
    </label>
  );
}

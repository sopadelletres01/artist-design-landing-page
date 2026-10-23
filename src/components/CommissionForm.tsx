import { useState, type FormEvent } from "react";
import { copy, type PortraitKind } from "../content/artist";

type Fields = {
  name: string;
  email: string;
  kind: PortraitKind | "";
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", kind: "", message: "" };

function validateField(name: keyof Fields, value: string): string {
  if (name === "name" && value.trim().length < 2) return copy.formErrorName;
  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return copy.formErrorEmail;
  }
  if (name === "kind" && value !== "persona" && value !== "personaje") {
    return copy.formErrorType;
  }
  if (name === "message" && value.trim().length < 10) return copy.formErrorMessage;
  return "";
}

export function CommissionForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function onBlur(name: keyof Fields) {
    setErrors((current) => ({ ...current, [name]: validateField(name, fields[name]) }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // El envío real se conecta después.
    const data = new FormData(event.currentTarget);
    const snapshot: Fields = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      kind: String(data.get("kind") ?? "") as Fields["kind"],
      message: String(data.get("message") ?? ""),
    };
    const next: Errors = {
      name: validateField("name", snapshot.name),
      email: validateField("email", snapshot.email),
      kind: validateField("kind", snapshot.kind),
      message: validateField("message", snapshot.message),
    };
    setFields(snapshot);
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    setSuccess(true);
  }

  if (success) {
    return (
      <p className="form-success" role="status">
        {copy.formSuccess}
      </p>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label className="field">
        <span>{copy.formName}</span>
        <input
          name="name"
          autoComplete="name"
          placeholder={copy.formNamePlaceholder}
          value={fields.name}
          onChange={(event) => setFields((current) => ({ ...current, name: event.target.value }))}
          onBlur={() => onBlur("name")}
          aria-invalid={Boolean(errors.name)}
        />
        <p className="field-error">{errors.name}</p>
      </label>
      <label className="field">
        <span>{copy.formEmail}</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder={copy.formEmailPlaceholder}
          value={fields.email}
          onChange={(event) => setFields((current) => ({ ...current, email: event.target.value }))}
          onBlur={() => onBlur("email")}
          aria-invalid={Boolean(errors.email)}
        />
        <p className="field-error">{errors.email}</p>
      </label>
      <fieldset className="type-options">
        <legend>{copy.formType}</legend>
        <label>
          <input
            type="radio"
            name="kind"
            value="persona"
            checked={fields.kind === "persona"}
            onChange={() => setFields((current) => ({ ...current, kind: "persona" }))}
            onBlur={() => onBlur("kind")}
          />
          {copy.formTypePersona}
        </label>
        <label>
          <input
            type="radio"
            name="kind"
            value="personaje"
            checked={fields.kind === "personaje"}
            onChange={() => setFields((current) => ({ ...current, kind: "personaje" }))}
            onBlur={() => onBlur("kind")}
          />
          {copy.formTypePersonaje}
        </label>
        <p className="field-error">{errors.kind}</p>
      </fieldset>
      <label className="field">
        <span>{copy.formMessage}</span>
        <textarea
          name="message"
          rows={5}
          placeholder={copy.formMessagePlaceholder}
          value={fields.message}
          onChange={(event) => setFields((current) => ({ ...current, message: event.target.value }))}
          onBlur={() => onBlur("message")}
          aria-invalid={Boolean(errors.message)}
        />
        <p className="field-error">{errors.message}</p>
      </label>
      <button className="btn" type="submit">
        {copy.formSubmit}
      </button>
    </form>
  );
}

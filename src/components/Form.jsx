import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const BUDGET_OPTIONS = ["Under $10k", "$10k – $30k", "$30k – $75k", "$75k+"];

export default function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field) {
    return (e) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((err) => ({ ...err, [field]: undefined }));
    };
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Tell us your name.";
    if (!values.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "That email doesn't look right.";
    }
    if (!values.message.trim()) next.message = "Give us a few details.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Replace with your submit logic (API call, mailto, etc.)
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 border border-[#D8D6CE] px-8 py-16 text-center">
        <span className="flex h-10 w-10 items-center justify-center border border-[#14141A]">
          <Check size={18} />
        </span>
        <h3 className="text-xl font-semibold text-[#14141A]">
          Brief received.
        </h3>
        <p className="max-w-sm text-sm text-[#14141A]/65">
          We read every inquiry. Expect a reply within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Name"
          error={errors.name}
        >
          <input
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Jordan Blake"
            className={inputClass(errors.name)}
          />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            placeholder="jordan@company.com"
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <Field label="Project budget">
        <div className="flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setValues((v) => ({ ...v, budget: option }))}
              className={`border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                values.budget === option
                  ? "border-[#14141A] bg-[#14141A] text-[#FAFAF7]"
                  : "border-[#D8D6CE] text-[#14141A]/70 hover:border-[#14141A]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Project details" error={errors.message}>
        <textarea
          value={values.message}
          onChange={handleChange("message")}
          placeholder="What are you building, and what does success look like?"
          rows={5}
          className={inputClass(errors.message)}
        />
      </Field>

      <button
        type="submit"
        className="group flex w-fit items-center gap-2 bg-[#14141A] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#FAFAF7] transition-transform hover:-translate-y-0.5"
      >
        Send brief
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#14141A]/50">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block font-mono text-[10px] text-[#FF4D2E]">
          {error}
        </span>
      )}
    </label>
  );
}

function inputClass(hasError) {
  return `w-full border bg-transparent px-3.5 py-2.5 text-sm text-[#14141A] outline-none transition-colors placeholder:text-[#14141A]/35 focus:border-[#2B4CFF] ${
    hasError ? "border-[#FF4D2E]" : "border-[#D8D6CE]"
  }`;
}
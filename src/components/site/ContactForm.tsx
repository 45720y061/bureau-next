"use client";

import { useId, useState, type FormEvent } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
  website: string;
};

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;
type FormStatus = "idle" | "sending" | "success" | "error";

const initialFormData: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  services: [],
  message: "",
  website: "",
};

const serviceChips = [
  "Gestión contable",
  "Planillas",
  "Gestión tributaria",
  "Societaria",
  "Laboral",
  "Gestión administrativa",
  "Gestión y proyectos",
  "Otros",
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Ingrese su nombre.";
  }

  if (!data.email.trim()) {
    errors.email = "Ingrese su correo.";
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = "Ingrese un correo válido.";
  }

  if (!data.message.trim()) {
    errors.message = "Ingrese un mensaje.";
  }

  return errors;
}

export function ContactForm({
  className = "",
  cardClassName = "",
}: {
  className?: string;
  cardClassName?: string;
}) {
  const idPrefix = useId();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const isSending = status === "sending";

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === "name" || field === "email" || field === "message") {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }

    if (status !== "sending") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));

    if (status !== "sending") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Revise los campos marcados antes de enviar.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          services: formData.services,
          message: formData.message.trim(),
          website: formData.website,
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string }
        | null;

      if (!res.ok || !data || data.ok !== true) {
        throw new Error(data && "error" in data && data.error ? data.error : "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setStatusMessage("Mensaje enviado. Gracias, le contactaremos pronto.");
      setFormData(initialFormData);
      setErrors({});
    } catch (err) {
      setStatus("error");
      setStatusMessage(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
    }
  }

  return (
    <div className={`mx-auto w-full max-w-[545px] ${className}`}>
      <div className={`rounded-[16px] border border-black/5 bg-white p-6 shadow-2xl lg:p-10 ${cardClassName}`}>
        <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-6" aria-describedby={`${idPrefix}-status`}>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) => updateField("website", e.target.value)}
            className="hidden"
            aria-hidden="true"
          />

          {status === "success" && (
            <div
              id={`${idPrefix}-status`}
              className="rounded-[10px] border border-[#bbf7d0] bg-[#f0fdf4] p-4 text-[14px] font-['Outfit:Medium',sans-serif] text-[#166534]"
              role="status"
            >
              {statusMessage}
            </div>
          )}

          {status === "error" && statusMessage && (
            <div
              id={`${idPrefix}-status`}
              className="rounded-[10px] border border-[#fecaca] bg-[#fef2f2] p-4 text-[14px] font-['Outfit:Medium',sans-serif] text-[#991b1b]"
              role="alert"
            >
              {statusMessage}
            </div>
          )}

          {status !== "success" && status !== "error" && <p id={`${idPrefix}-status`} className="sr-only" />}

          <fieldset className="flex flex-col gap-3" disabled={isSending}>
            <legend className="font-['Outfit:Bold',sans-serif] text-[13px] uppercase tracking-widest text-[#003a61]/70">
              Servicio de interés
            </legend>
            <div className="flex flex-wrap gap-2.5" role="group" aria-label="Seleccione servicios de interés">
              {serviceChips.map((service) => {
                const active = formData.services.includes(service);

                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    aria-pressed={active}
                    className={`min-h-[42px] rounded-full border px-4 py-2 text-[13px] font-['Outfit:Medium',sans-serif] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 ${
                      active
                        ? "border-[#003a61] bg-[#003a61] text-white"
                        : "border-[#003a61]/20 bg-transparent text-[#003a61]/70 hover:border-[#003a61]/40 hover:bg-[#003a61]/5"
                    }`}
                    disabled={isSending}
                  >
                    {service}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field
              id={`${idPrefix}-name`}
              label="Nombre"
              value={formData.name}
              onChange={(value) => updateField("name", value)}
              error={errors.name}
              type="text"
              autoComplete="name"
              required
              disabled={isSending}
            />
            <Field
              id={`${idPrefix}-company`}
              label="Empresa"
              value={formData.company}
              onChange={(value) => updateField("company", value)}
              type="text"
              autoComplete="organization"
              disabled={isSending}
            />
            <Field
              id={`${idPrefix}-email`}
              label="Correo"
              value={formData.email}
              onChange={(value) => updateField("email", value)}
              error={errors.email}
              type="email"
              autoComplete="email"
              required
              disabled={isSending}
            />
            <Field
              id={`${idPrefix}-phone`}
              label="Teléfono"
              value={formData.phone}
              onChange={(value) => updateField("phone", value)}
              type="tel"
              autoComplete="tel"
              placeholder="+51 999 999 999"
              disabled={isSending}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor={`${idPrefix}-message`} className="text-[13px] font-['Outfit:Semi_Bold',sans-serif] text-[#003a61]/70">
              Mensaje <span aria-hidden="true">*</span>
            </label>
            <textarea
              id={`${idPrefix}-message`}
              name="message"
              value={formData.message}
              onChange={(e) => updateField("message", e.target.value)}
              required
              rows={5}
              disabled={isSending}
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? `${idPrefix}-message-error` : undefined}
              className="w-full resize-y rounded-[8px] border border-[#003a61]/20 bg-transparent p-3 text-[16px] text-[#003a61] outline-none transition-colors focus:border-[#0da9e1] focus-visible:ring-2 focus-visible:ring-[#0da9e1] disabled:cursor-not-allowed disabled:opacity-70"
              placeholder="Cuéntenos brevemente qué necesita"
            />
            {errors.message && (
              <p id={`${idPrefix}-message-error`} className="text-[12px] font-['Outfit:Medium',sans-serif] text-[#991b1b]">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-3 rounded-[10px] bg-[#0da9e1] px-6 py-3 text-[15px] font-['Outfit:Bold',sans-serif] text-white shadow-[0_8px_20px_rgba(13,169,225,0.25)] transition-colors hover:bg-[#0b8cc0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0da9e1] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending && <span className="size-[18px] shrink-0 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden="true" />}
            {isSending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type,
  autoComplete,
  placeholder,
  required,
  disabled,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[13px] font-['Outfit:Semi_Bold',sans-serif] text-[#003a61]/70">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-required={required ? "true" : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="min-h-[44px] w-full border-b-2 border-[#003a61]/20 bg-transparent pb-2 text-[16px] text-[#003a61] outline-none transition-colors focus:border-[#0da9e1] focus-visible:ring-2 focus-visible:ring-[#0da9e1] disabled:cursor-not-allowed disabled:opacity-70"
      />
      {error && (
        <p id={`${id}-error`} className="text-[12px] font-['Outfit:Medium',sans-serif] text-[#991b1b]">
          {error}
        </p>
      )}
    </div>
  );
}

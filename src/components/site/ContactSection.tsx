"use client";

import { useMemo, useState, type FormEvent } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
  website: string; // honeypot (should stay empty)
};

const serviceChips = [
  "Out. Contable",
  "Out. Administrativo",
  "Out. de Planillas",
  "Gest. Tributaria",
  "Gest. Laboral",
  "Proyectos",
  "Ases. Societaria",
  "Otros",
];

export function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    services: [],
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    return (
      formData.name.trim().length >= 2 &&
      formData.email.trim().includes("@") &&
      formData.message.trim().length >= 10
    );
  }, [formData.email, formData.message, formData.name]);

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!canSubmit) {
      setStatus("error");
      setErrorMsg("Por favor complete su nombre, email y un mensaje (mínimo 10 caracteres).");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string }
        | null;

      if (!res.ok || !data || (data as any).ok !== true) {
        throw new Error((data as any)?.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        services: [],
        message: "",
        website: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
    }
  }

  return (
    <div className="w-full">
      {showHeading && (
        <div className="mb-8 text-center">
          <h2 className="font-['Outfit:Bold',sans-serif] text-[32px] font-bold text-[#eee] lg:text-[44px]">
            Contacte con un experto Bureau<span className="text-[#0da9e1]">.</span>
          </h2>
          <p className="mt-3 text-white/80">
            Cuéntenos qué necesita y un especialista se comunicará con usted.
          </p>
        </div>
      )}

      <div className="mx-auto w-full max-w-[545px] rounded-[12px] bg-white">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 lg:p-10">
          {/* Honeypot (hidden) */}
          <input
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="hidden"
            aria-hidden="true"
          />

          <div className="flex flex-wrap gap-2">
            {serviceChips.map((service) => {
              const active = formData.services.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`min-h-[44px] rounded-[4px] px-3 text-[12px] font-medium transition-colors ${
                    active
                      ? "bg-[#0da9e1] text-white"
                      : "border border-[#0da9e1]/30 text-[#0da9e1]/60"
                  }`}
                >
                  {service}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6">
            <Field
              label="Su nombre"
              value={formData.name}
              onChange={(v) => setFormData({ ...formData, name: v })}
              type="text"
              required
            />
            <Field
              label="Nombre de la empresa"
              value={formData.company}
              onChange={(v) => setFormData({ ...formData, company: v })}
              type="text"
            />
            <Field
              label="Su e-mail"
              value={formData.email}
              onChange={(v) => setFormData({ ...formData, email: v })}
              type="email"
              required
            />
            <Field
              label="Teléfono"
              value={formData.phone}
              onChange={(v) => setFormData({ ...formData, phone: v })}
              type="tel"
              placeholder="+51 999 999 999"
            />

            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-medium text-[#0da9e1]/60">Mensaje</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full resize-y rounded-[6px] border border-[#0da9e1]/30 bg-transparent p-3 text-[16px] text-[#003a61] outline-none transition-colors focus:border-[#0da9e1]"
                placeholder="Cuéntenos brevemente qué necesita…"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="min-h-[44px] inline-flex items-center justify-center rounded-[6px] border border-[#0da9e1]/30 bg-white px-5 py-3 text-[14px] font-medium text-[#0da9e1] transition-colors hover:bg-[#0da9e1] hover:text-white disabled:opacity-60"
          >
            {status === "sending" ? "Enviando…" : "Enviar Mensaje"}
          </button>

          <p aria-live="polite" className="text-center text-[14px]">
            {status === "success" && (
              <span className="text-green-700">✅ Mensaje enviado. Gracias, le contactaremos pronto.</span>
            )}
            {status === "error" && <span className="text-red-700">⛔ {errorMsg}</span>}
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-medium text-[#0da9e1]/60">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="min-h-[44px] w-full border-b-2 border-[#0da9e1]/30 bg-transparent pb-2 text-[16px] text-[#003a61] outline-none transition-colors focus:border-[#0da9e1]"
      />
    </div>
  );
}
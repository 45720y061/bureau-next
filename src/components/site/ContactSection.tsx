import { ContactForm } from "@/components/site/ContactForm";

export function ContactSection({ showHeading = true }: { showHeading?: boolean }) {
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

      <ContactForm />
    </div>
  );
}

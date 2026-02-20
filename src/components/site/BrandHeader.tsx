import Link from "next/link";
import Image from "next/image";

const logoSrc = "/assets/isotipo.png";

// Server Component: uses <details> for mobile menu (no JS).
export function BrandHeader({ locale }: { locale: string }) {
  const prefix = `/${locale}`;
  return (
    <header className="sticky top-0 z-50 h-[58px] w-full bg-[#0da9e1]">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <Link href={prefix} className="flex items-center" aria-label="Bureau Consulting">
          <Image src={logoSrc} alt="Bureau Consulting" width={140} height={40} priority />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href={`${prefix}/servicios`} className="font-['Roboto:Regular',sans-serif] text-[#003a61] transition-colors hover:text-white">
            Servicios
          </Link>
          <Link href={`${prefix}/nosotras`} className="font-['Roboto:Regular',sans-serif] text-[#003a61] transition-colors hover:text-white">
            Nosotras
          </Link>
          <Link href={`${prefix}/contacto`} className="font-['Roboto:Regular',sans-serif] text-[#003a61] transition-colors hover:text-white">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href={`${prefix}/contacto`}
            className="relative inline-flex items-center justify-center rounded-[4px] bg-transparent px-[14px] py-[7px] transition-colors hover:bg-[#003a61]"
          >
            <span className="absolute inset-0 rounded-[4px] border border-[#003a61]" aria-hidden="true" />
            <span className="font-['Roboto:Regular',sans-serif] text-[#003a61] transition-colors hover:text-white">
              Reservar Consulta
            </span>
          </Link>
        </div>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-[4px] border border-[#003a61] px-3 py-2 text-sm text-[#003a61]">
            Menú
          </summary>

          <div className="absolute right-0 mt-2 w-56 rounded-[8px] bg-[#003a61] p-3 shadow-lg">
            <nav className="flex flex-col gap-2">
              <Link className="py-2 text-white hover:text-[#0da9e1]" href={`${prefix}/servicios`}>
                Servicios
              </Link>
              <Link className="py-2 text-white hover:text-[#0da9e1]" href={`${prefix}/nosotras`}>
                Nosotras
              </Link>
              <Link className="py-2 text-white hover:text-[#0da9e1]" href={`${prefix}/contacto`}>
                Contacto
              </Link>
              <Link
                href={`${prefix}/contacto`}
                className="mt-1 rounded-[4px] bg-[#0da9e1] px-4 py-2 text-center font-['Roboto:Regular',sans-serif] text-[#003a61] hover:bg-white"
              >
                Reservar Consulta
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

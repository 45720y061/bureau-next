import Image from "next/image";

const officeImages = [
  "/assets/oficina21.png",
  "/assets/oficina22.png",
  "/assets/oficina23.png",
];

export default function OfficeGallery() {
  return (
    <div className="bg-[#0da9e1] relative shrink-0 w-full px-4 py-4 lg:px-6 lg:py-6">
      <div className="flex flex-row items-center justify-center size-full overflow-hidden">
        <div className="content-stretch flex items-center justify-center relative w-full gap-4 lg:gap-6">
          {officeImages.map((src, idx) => (
            <div
              key={idx}
              className="content-stretch flex flex-col items-start w-full min-w-0 flex-1 relative h-[280px] lg:h-[400px]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                <Image
                  alt={`Bureau Office ${idx + 1}`}
                  className="absolute h-full left-0 top-0 w-full object-cover"
                  src={src}
                  width={1366}
                  height={768}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

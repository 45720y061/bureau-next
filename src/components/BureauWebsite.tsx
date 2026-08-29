import Header from "./home/Header";
import Hero from "./home/Hero";
import ValuesAndServices from "./home/ValuesAndServices";
import Clients from "./home/Clients";
import Team from "./home/Team";
import OfficeGallery from "./home/OfficeGallery";
import Contact from "./home/Contact";
import Footer from "./home/Footer";

export default function BureauWebsite({ locale }: { locale?: string }) {
  return (
    <div className="bg-[#434343] content-stretch flex flex-col items-center relative size-full text-white scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
      <Header locale={locale} />
      <main className="w-full flex-grow flex flex-col items-center">
        <Hero />
        <ValuesAndServices locale={locale} />
        <Clients />
        <Team locale={locale} />
        <OfficeGallery />
        <Contact />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

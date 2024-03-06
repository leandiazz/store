import FooterAccordion from "./FooterAccordion";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-col items-center">
        <FooterAccordion />
      </div>
      <div className="mt-5 text-center leading-[3rem] opacity-70">
        © {new Date().getFullYear()} <span className="font-logo">Cruel Summer</span>
        <span className="font-primary"> · desarrollador: Leandro Diaz</span>
      </div>
    </footer>
  );
}

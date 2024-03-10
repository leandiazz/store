import FooterAccordion from "./FooterAccordion";

export default function Footer() {
  return (
    <footer className="mb-2 w-full">
      <div className="flex flex-col items-center">
        <FooterAccordion />
      </div>
      <div className=" flex flex-col justify-center text-center opacity-70 md:flex-row">
        <p className="md:mr-3">
          © {new Date().getFullYear()} <span className="font-logo text-base">Cruel Summer</span>
        </p>
        <p className="text-sm opacity-70">
          Desarrollador{" "}
          <span className="font-primary text-base hover:text-blue-600 hover:underline hover:dark:text-blue-500">
            <a
              href="https://www.linkedin.com/in/leandiaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leandro Diaz
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

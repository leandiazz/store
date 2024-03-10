import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FooterAccordion() {
  return (
    <Accordion type="single" collapsible className="my-5 mb-7 w-[300px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Como me puedo contactar?</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail mb-1 mr-2"
              width={25}
              height={25}
              viewBox="0 0 24 24"
              strokeWidth={1.25}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <a href="cruelsummer.ind@gmail.com" target="_blank" className="hover:opacity-40" rel="">
              <span> cruelsummer.ind@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram mr-2"
              width={26}
              height={26}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
            <a
              href="https://www.instagram.com/cruelsummer.ind/"
              target="_blank"
              className="hover:opacity-40"
              rel=""
            >
              <span>cruelsummer.ind</span>
            </a>
          </div>
          <div className="mt-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-whatsapp mr-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
            <a
              href="https://wa.me/5491134060366"
              target="_blank"
              className="hover:opacity-40"
              rel=""
            >
              <span>1134060366</span>
            </a>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>¿Puedo reservar productos?</AccordionTrigger>
        <AccordionContent>
          ​Agregar un producto disponible a tu carrito, no reserva el producto.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>¿La tienda online sigue funcionando?</AccordionTrigger>
        <AccordionContent>
          ¡Sí! Nuestra tienda sigue funcionando, podés comprar fácilmente sin moverte de tu casa.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

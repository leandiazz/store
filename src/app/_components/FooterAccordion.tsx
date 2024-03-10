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
          <p>
            Email:{" "}
            <a href="cruelsummer.ind@gmail.com" target="_blank" className="hover:opacity-40" rel="">
              cruelsummer.ind@gmail.com
            </a>
          </p>

          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/cruelsummer.ind/"
              target="_blank"
              className="hover:opacity-40"
              rel=""
            >
              @cruelsummer.ind
            </a>
          </p>
          <p>
            Whatsapp:{" "}
            <a
              href="https://wa.me/5491134060366"
              target="_blank"
              className="hover:opacity-40"
              rel=""
            >
              1134060366
            </a>
          </p>
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

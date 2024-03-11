"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { useMemo } from "react";
import { formatPrice } from "@/lib/utils";

const formSchema = z.object({
  email: z
    .string({
      required_error: "Campo requerido",
    })
    .email({
      message: "Ingresa un email valido",
    }),
  firstName: z.string({
    required_error: "Campo requerido",
  }),
  lastName: z.string({
    required_error: "Campo requerido",
  }),
  Address: z.string({
    required_error: "Campo requerido",
  }),
  PhoneNumber: z
    .string({
      required_error: "Campo requerido",
    })
    .min(10, { message: "Ingresa el número sin espacios (1134060366)" }),
  CP: z
    .string({
      required_error: "Campo requerido",
    })
    .min(4, { message: "Ingresa al menos 4 números" }),
});

export default function CHECKOUTFORM() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: undefined,
      firstName: undefined,
      lastName: undefined,
      Address: undefined,
      PhoneNumber: undefined,
      CP: undefined,
    },
  });

  const { items } = useCart();
  const router = useRouter();

  const text = useMemo(
    () =>
      items
        .reduce(
          (message, product) =>
            message.concat(
              `• ${product.quantity} *${product.name}*\ncolor: ${product.color}\nprecio: ${formatPrice(product.priceDiscounted * product.quantity)}\n\n`,
            ),
          "*Datos del pedido*\n",
        )
        .concat(
          `Total: ${formatPrice(
            items.reduce((total, product) => {
              const productTotal = product.quantity * product.priceDiscounted;
              return total + productTotal;
            }, 0),
          )}`,
        ),
    [items],
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    const infoText = `\n\n*Datos de envio*\nNombre y Apellido: ${values.lastName} ${values.firstName}\nEmail: ${values.email}\nTelefono: ${values.PhoneNumber}\nDireccion: ${values.Address} CP: ${values.CP}`;
    router.push(`https://wa.me/5491134060366?text=${encodeURIComponent(text.concat(infoText))}`);
  }
  return (
    <div className="h-full w-full min-w-fit lg:ml-5 lg:w-[50%]">
      <h1 className="mt-4 w-full text-start text-2xl lg:mt-0">Tus datos</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="lg:mt-3">
          <div className="mb-3 flex w-full">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="mr-5 w-[50%]">
                  <Label>Nombre</Label>
                  <FormControl>
                    <Input {...field} placeholder="cruel" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <Label>Apellido</Label>
                  <FormControl>
                    <Input {...field} placeholder="summer" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-3 flex w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mr-5 w-[60%]">
                  <Label className="whitespace-nowrap">Correo electrónico</Label>
                  <FormControl>
                    <Input placeholder="cruelsummer.ind@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="PhoneNumber"
              render={({ field }) => (
                <FormItem className="w-[40%]">
                  <Label>Teléfono</Label>
                  <FormControl>
                    <Input {...field} placeholder="1134060366" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full">
            <FormField
              control={form.control}
              name="Address"
              render={({ field }) => (
                <FormItem className="mr-5 w-[70%]">
                  <Label>Dirección (calle y número)</Label>
                  <FormControl>
                    <Input {...field} placeholder="calle y número" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="CP"
              render={({ field }) => (
                <FormItem className="w-[30%]">
                  <Label className="whitespace-nowrap">Código postal</Label>
                  <FormControl>
                    <Input {...field} placeholder="1879" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full flex-col items-center">
            <Button type="submit" className="mt-4 w-64">
              Ir a whatsapp
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

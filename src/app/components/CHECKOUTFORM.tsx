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
      required_error: "Campo requerido.",
    })
    .email(),
  firstName: z.string({
    required_error: "Campo requerido.",
  }),
  lastName: z.string({
    required_error: "Campo requerido.",
  }),
  Address: z.string({
    required_error: "Campo requerido.",
  }),
  PhoneNumber: z.string({
    required_error: "Campo requerido.",
  }),
  CP: z.string({
    required_error: "Campo requerido.",
  }),
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
              `• ${product.quantity} *${product.name}*\ncolor: ${product.color}\nprecio: ${formatPrice((product.price - (product.price * product.discount) / 100) * Number(product.quantity))}\n\n`,
            ),
          "",
        )
        .concat(
          `Total: ${formatPrice(
            items.reduce((total, product) => {
              const productTotal =
                Number(product.quantity) *
                (product.price - (product.price * product.discount) / 100);
              return total + productTotal;
            }, 0),
          )}`,
        )
        .concat("\n\nMis datos: ..."),
    [items],
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`https://wa.me/5491164477865?text=${encodeURIComponent(text)}`);
  }
  return (
    <div className="w-full">
      <h1 className="w-full text-center text-xl lg:my-5">Tus datos</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
                    <Input {...field} placeholder="1134060366" />
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
                  <Label>Dirección</Label>
                  <FormControl>
                    <Input {...field} placeholder="calle y numero" />
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

          <Button type="submit" className="mt-4">
            Ir a whatsapp
          </Button>
        </form>
      </Form>
    </div>
  );
}

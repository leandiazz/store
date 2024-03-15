"use client";

import { v4 as uuidv4 } from "uuid";
import {
  FormMessage,
  FormItem,
  FormField,
  FormControl,
  Form,
  FormLabel,
} from "@/components/ui/form";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
  SelectGroup,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import { ToastClose } from "@radix-ui/react-toast";
import { Product } from "@/lib/utils";

const FormSchema = z.object({
  color: z.string({
    required_error: "Elije el color",
  }),
  quantity: z.string({
    required_error: "Elije la cantidad",
  }),
});

export type SelectedProductData = z.infer<typeof FormSchema>;

export function SelectForm(producto: Product) {
  const { addProduct } = useCart();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      description: "Producto agregado al carrito",
      action: (
        <ToastAction altText="Goto cart" asChild>
          <ToastClose asChild>
            <Link href="/carrito">Carrito</Link>
          </ToastClose>
        </ToastAction>
      ),
    });
    addProduct({
      ...producto,
      color: data.color,
      quantity: parseInt(data.quantity),
      key: uuidv4(),
    });
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4" aria-label="contact form">
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem className="mb-3 w-32 space-y-0">
              <FormLabel>Color</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    {field.value ? <SelectValue placeholder="elegir" /> : "elegir"}
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {producto.colorArray.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="mb-3 w-32 space-y-0">
              <FormLabel>Cantidad</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    {field.value ? <SelectValue placeholder="elegir" /> : "elegir"}
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Comprar</Button>
      </form>
    </Form>
  );
}

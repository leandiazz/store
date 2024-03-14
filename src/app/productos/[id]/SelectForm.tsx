"use client";

import { v4 as uuidv4 } from "uuid";
import { FormMessage, FormItem, FormField, FormControl, Form } from "@/components/ui/form";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
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
    required_error: "Elije el color de prenda.",
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
            <FormItem className="mb-3 space-y-0">
              <Label>Color</Label>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="elije color" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {producto.colorArray.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
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
            <FormItem className="mb-5 space-y-0">
              <Label>Cantidad</Label>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="elije cantidad" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem key={1} value={"1"}>
                    1
                  </SelectItem>
                  <SelectItem key={2} value={"2"}>
                    2
                  </SelectItem>
                  <SelectItem key={3} value={"3"}>
                    3
                  </SelectItem>
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

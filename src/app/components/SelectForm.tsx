"use client";

import {
  FormMessage,
  FormLabel,
  FormItem,
  FormField,
  FormDescription,
  FormControl,
  Form,
} from "@/components/ui/form";
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
import { Product } from "@/lib/types";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

const FormSchema = z.object({
  color: z.string({
    required_error: "Elije un color de prenda.",
  }),
});

export type SelectedProductData = z.infer<typeof FormSchema>;

export function SelectForm({ producto }: { producto: Product }) {
  const { addProduct } = useCart();
  const coloresDisponibles = producto.color.split("-");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      description: "Producto agregado al carrito",
    });
    addProduct(producto, data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 w-40 space-y-6"
      >
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={"Elije un color"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {coloresDisponibles.map((item) => (
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
        <Button type="submit">Comprar</Button>
      </form>
    </Form>
  );
}

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
  quantity: z.string({
    required_error: "Elije una cantidad",
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
    addProduct({
      ...producto,
      ...data,
      key: Math.round(Math.random() * 3423),
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem className="mb-3 space-y-0">
              <FormLabel>Color</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="elije color" />
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
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="mb-5 space-y-0">
              <FormLabel>Cantidad</FormLabel>
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

"use client";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { annonceSchema } from "@/lib/validations";
import React, { useState } from "react";
import { createAnnonce } from "@/lib/actions/annonce.action";
import { usePathname, useRouter } from "next/navigation";

const type: any = "Create";

interface Props {
  mongoUserId: string
}

const Annonce = ({ mongoUserId } : Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter()
  const pathname = usePathname()
  const form = useForm<z.infer<typeof annonceSchema>>({
    resolver: zodResolver(annonceSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      category: "appartement",
      imageUrl: "",
    },
  });

  async function onSubmit(values: z.infer<typeof annonceSchema>) {
    setIsSubmitting(true);
    try {
      await createAnnonce({
        title: values.title,
        description: values.description,
        price: values.price,
        category: values.category,
        imageUrl: values.imageUrl,
        author: JSON.parse(mongoUserId),
        path: pathname
      });

      router.push('/')
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container mx-auto max-w-md space-y-8 rounded bg-white p-4 shadow-lg"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Title <span className="text-orange-500">*</span></FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full rounded border border-gray-300 p-2"
                />
              </FormControl>
              <FormDescription>
                Add a title that describes the product you sell
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Description <span className="text-orange-500">*</span></FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full rounded border border-gray-300 p-2"
                />
              </FormControl>
              <FormDescription>
                Add a description to this product
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Category <span className="text-orange-500">*</span></FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full rounded border border-gray-300 p-2">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="voiture">Voiture</SelectItem>
                    <SelectItem value="telephone">Telephone</SelectItem>
                    <SelectItem value="appartement">Appartement</SelectItem>
                    <SelectItem value="vetement">Vetement</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Price <span className="text-orange-500">*</span></FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </FormControl>
              <FormDescription>Add the price of this product</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Picture of your Product <span className="text-orange-500">*</span></FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full rounded border border-gray-300 p-2"
                />
              </FormControl>
              <FormDescription>Add the price of this product</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded bg-red-500 p-2 text-white hover:bg-blue-600"
        >
          {isSubmitting ? (
            <>{type === "Edit" ? "Edit Annonce" : "Posting..."}</>
          ) : (
            <>{type === "Create" ? "Create Annonce" : "Editing..."}</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default Annonce;

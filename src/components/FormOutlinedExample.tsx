"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormOutlinedInput,
} from "@/shared/ui/Form"
import Button from "@/shared/ui/Button"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Минимальная длина - 2 символа",
  }),
  password: z.string().min(8, {
    message: "Минимальная длина - 8 символов",
  }),
})

const FormOutlinedExample = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 border border-light-outlineVariant dark:border-dark-outlineVariant p-6 rounded-md w-[400px]"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FormOutlinedInput
                  className="w-full"
                  label="Имя пользователя"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FormOutlinedInput
                  className="w-full"
                  label="Пароль"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          appearance={"filled"}
          type="submit"
          className="self-end min-w-[120px]"
        >
          Отправить
        </Button>
      </form>
    </Form>
  )
}

export default FormOutlinedExample

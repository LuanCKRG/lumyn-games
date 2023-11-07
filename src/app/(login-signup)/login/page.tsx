"use client"

import { z } from "zod"
import { Form } from "@/components/Form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

const loginUserSchema = z.object({
  email: z.string()
    .trim()
    .toLowerCase()
    .min(1, "O e-mail é obrigatório")
    .max(60, "O limite de caracteres é 60")
    .email("Formato de e-mail inválido"),
  password: z.string()
    .min(8, "No mínimo 8 caracteres")
    .max(30, "No máximo 30 caracteres")
    // .regex(new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"), "Digite uma senha mais forte")
})
type loginUserFormData = z.infer<typeof loginUserSchema>

const Login = () => {
  const loginUserForm = useForm<loginUserFormData>({
    resolver: zodResolver(loginUserSchema)
  })
  const { handleSubmit } = loginUserForm

  const loginUser: SubmitHandler<loginUserFormData> = async (data) => {
    console.log(data)
  }

  return (
    <FormProvider {...loginUserForm}>
      <form onSubmit={handleSubmit(loginUser)} className="space-y-6">
        <h1 className="text-lg text-center">
        Lumyns Games
        </h1>

        <Form.Field >
          <Form.Input name="email" placeholder="luancamposck@gmail.com" text="E-mail" />
          <Form.ErrorMessage field="email" />
        </Form.Field>

        <Form.Field >
          <Form.Input name="password" placeholder="********" text="Senha" type="password" />
          <Form.ErrorMessage field="password" />
        </Form.Field>
        
        <Form.Button text="Enviar" />
      </form>
    </FormProvider>
  )
}

export default Login
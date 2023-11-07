"use client"

import { z } from "zod"
import { Form } from "@/components/Form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

const signupUserSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "O nome é obrigatório")
    .max(60, "O limite de caracteres é 60")
    .transform(
      (name) => {
        return name.split(" ").map(
          (word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
          }
        )
          .join(" ")
      }
    ),
  email: z.string()
    .trim()
    .toLowerCase()
    .min(1, "O e-mail é obrigatório")
    .max(60, "O limite de caracteres é 60")
    .email("Formato de e-mail inválido"),
  password: z.string()
    .min(8, "A senha precisa de no mínimo 8 caracteres")
    .max(30, "O limite de caracteres é 30")
    .regex(new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"), "Digite uma senha mais forte")
})
type SignupUserFormData = z.infer<typeof signupUserSchema>

const Signup = () => {
  const signupUserForm = useForm<SignupUserFormData>({
    resolver: zodResolver(signupUserSchema)
  })
  const { handleSubmit, watch } = signupUserForm

  const userPassword = watch("password")
  const isPasswordStrong = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})").test(userPassword)

  const signupUser: SubmitHandler<SignupUserFormData> = async (data) => {
    console.log(data)
  }

  return (
    <FormProvider {...signupUserForm}>
      <form onSubmit={handleSubmit(signupUser)} className="space-y-6">
        <h1 className="text-lg text-center">
        Lumyns Games
        </h1>

        <Form.Field >
          <Form.Input name="name" placeholder="Renata Miranda" text="Nome" />
          <Form.ErrorMessage field="name" />
        </Form.Field>

        <Form.Field >
          <Form.Input name="email" placeholder="luancamposck@gmail.com" text="E-mail" />
          <Form.ErrorMessage field="email" />
        </Form.Field>

        <Form.Field >
          <Form.Input name="password" placeholder="********" text="Senha" type="password" />
          {isPasswordStrong ?
            <span className="text-left text-xs text-emerald-600">Senha forte</span> :
            <span className="text-left text-xs text-red-500">Senha fraca</span>
          }
          <Form.ErrorMessage field="password" />
        </Form.Field>
        
        <Form.Button text="Cadastre-seE" />
      </form>
    </FormProvider>
  )
}

export default Signup
import { Form } from "@/components/Form"

const Login = () => {
  return (
    <form className="space-y-6">
      <h1 className="text-lg text-center">
        Lumyns Games
      </h1>

      <Form.Field >
        <Form.Input name="email" placeholder="luancamposck@gmail.com" text="E-mail" />
      </Form.Field>

      <Form.Field >
        <Form.Input name="password" placeholder="********" text="Senha" type="password" />
      </Form.Field>
        
      <Form.Button text="Enviar" />
    </form>
  )
}

export default Login
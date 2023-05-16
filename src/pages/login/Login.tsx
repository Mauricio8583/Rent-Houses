import { LoginContainer, Container, LoginForm, Label, Input, Button } from "./Styles"

export const Login = () => {
  return (
    <LoginContainer>
        <Container>
      <LoginForm >
        <Label htmlFor="username">Usuário:</Label>
        <Input type="text" id="username" />

        <Label htmlFor="password">Senha:</Label>
        <Input type="password" id="password" />

        <Button type="submit">Entrar</Button>
      </LoginForm>
    </Container>
    </LoginContainer>
  )
}

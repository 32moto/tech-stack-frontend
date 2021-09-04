interface Props {
  handleLogin:  () => Promise<void>
}

export const Login = ({ handleLogin }: Props) => {
  return (
    <button onClick={handleLogin}>login</button>
  )
}
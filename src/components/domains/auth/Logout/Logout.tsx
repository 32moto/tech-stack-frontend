interface Props {
  handleLogout:  () => Promise<void>
}

export const Logout = ({ handleLogout }: Props) => {
  return (
    <button onClick={handleLogout}>logout</button>
  )
}
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

function UsernameForm({
  initialUsername = '',
  onSubmitUsername,
}: {
  initialUsername?: string
  onSubmitUsername: (username: string) => void
}) {
  const [username, setUsername] = React.useState(initialUsername)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.currentTarget.value)
  }

  return (
    <form name="usernameForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`)
  return (
    <div style={{width: 400}}>
      <UsernameForm
        onSubmitUsername={onSubmitUsername}
        initialUsername="kody"
      />
    </div>
  )
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)

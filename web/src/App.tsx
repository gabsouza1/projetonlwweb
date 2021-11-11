import { useContext } from 'react'
import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageBox } from './components/MessageBox'
import { SendMessageBox } from './components/SendMessageBox'
import { AuthContext } from './contexts/auth'

export function App() {

  const  { user } = useContext(AuthContext)
  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}> 
      <MessageBox />
      { !!user ? <SendMessageBox /> : <LoginBox />}
    </main>
  )
}


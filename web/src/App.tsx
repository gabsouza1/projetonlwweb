import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageBox } from './components/MessageBox'

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageBox />
      <LoginBox />
    </main>
  )
}


import { useContext, useState, FormEvent} from 'react'
import { VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import styles from './style.module.scss'


export function SendMessageBox() {

    const [ message, setMessage ] = useState('') 
    const { user, signOut }= useContext(AuthContext)


    async function handleSendMessage(event: FormEvent ) {
        event.preventDefault()
        if(!message.trim()) {
            return 
        }

        await api.post('messages', { message })

        
       setMessage('')
        
    }

    return(
        <div className={styles.sendMessageFormWrapper}>
            <button onClick={signOut}
            className={styles.signOutButton}>
                <VscSignOut size='32' />
            </button>

            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img src={user?.avatar_url} alt={user?.name} />
                </div>
                <strong className={styles.userName}>{user?.name}</strong>
                <span className={styles.userGithub}>
                    {user?.login }
                </span>
            </header>


            <form onChange={handleSendMessage}className={styles.sendMessageForm}>
                <label htmlFor="message">Mensagem</label>
                <textarea  
                    name="message"
                    id="message"
                    placeholder="Qual a sua experiência para o evento?"
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                />
            </form>

            <button type="submit">Enviar mensagem</button>
        </div>
    )
}
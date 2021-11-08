import styles from './style.module.scss'
import logoImg from '../../assets/logo.svg'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'



type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

export function MessageBox() {


    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        api.get<Message[]>('messages/lastthree').then(response => {
            setMessages(response.data)
        }
            )}, 
        [])


    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="Do While 2021" />
        


        <ul className={styles.messageList}>
            {messages.map(messages => {
                return(
                    <li className={styles.message}>
                    <p className={styles.messageContent}>{messages.text}</p>
                    <div className={styles.messageUser}>
                    <div className={styles.userImage}>
                        <img src={messages.user.avatar_url} alt={messages.user.name} />
                    </div>
                    <span>{messages.user.name}</span>
                    </div>
                </li>
                )
            })}
            </ul>
        </div>
    )
}
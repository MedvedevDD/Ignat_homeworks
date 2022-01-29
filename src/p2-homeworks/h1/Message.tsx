import React from 'react'
import s from './Message.module.css'

type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messagePropsType) {
    return (
        <div className={s.item}>
    <img className={s.img} src={props.avatar}/>
            <div className={s.mes}>
            <div className={s.text}>
            <div className={s.name}> {props.name} </div>
            <div  className={s.message}> {props.message} </div>
            </div>
            <div className={s.date}>{props.time}</div>

        </div>
        </div>
    )
}

export default Message

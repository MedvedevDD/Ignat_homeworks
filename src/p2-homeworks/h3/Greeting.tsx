import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {Simulate} from "react-dom/test-utils";


type GreetingPropsType = {
    name: string // need to fix any!
    setNameCallback: (value: string) => void // need to fix any!
    addUser: () => void // need to fix any!
    error: boolean // need to fix any!
    totalUsers: number // need to fix any!
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ""// need to fix with (?:)!
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {addUser()}
    }

    return (
        <div>
            <input value={name}
                   onChange={(e) => setNameCallback(e.currentTarget.value)}
                   className={inputClass}
                   onKeyPress={onKeyPressAddTask}
            />
            <span>{error ? "Введи имя, балбес!" : ""}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting;

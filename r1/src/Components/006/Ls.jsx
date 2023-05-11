//local Storage - vietinis serveris. Perduodami, gaunami TIK stringai. Reikia JSON.stringify - masyvams ir skaiciams.

import { useState } from "react"

export default function Ls() {

    // const [title, setTitle] = useState('---')
    const [title, setTitle] = useState('animal', ['Racoon', 'Fox'])

    const add = _ => {
        // localStorage.setItem('animal', 'Racoon');
        // localStorage.setItem('animal', JSON.stringify(['Racoon', 'Fox', 'Beaver']));
        localStorage.setItem('animal', JSON.stringify('5'));
    }

    const get = _ => {
        // setTitle(localStorage.getItem('animal'));
        setTitle(JSON.parse(localStorage.getItem('animal')));
    }

    const kill = _ => {
        setTitle(localStorage.removeItem('animal'));
    }

    return (
        <>
        <h1>{title}</h1>

        <button className="yellow" onClick={add}>add</button>
        <button className="yellow" onClick={get}>get</button>
        <button className="red" onClick={kill}>kill</button>
        </>
    )


}
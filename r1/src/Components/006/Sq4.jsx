import { useState } from "react"

export default function Sq4() {

    const [sq, setSq] = useState([]);

    const add = _ => setSq(s => [...s, '']);

    return (
        <>
        <div className="sq-bin">
            {
                sq.map((_, i) => <div className="sq" style={{
                    backgroundColor: '#87ceeb70',
                    borderColor: '#87ceeb'
                }} key={i}></div>)
            }
        </div>
        <button className="red" onClick={add}>add []</button>
        </>
    )
    
}
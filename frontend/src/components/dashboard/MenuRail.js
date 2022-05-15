import React, {useEffect,useState} from 'react'
export const MenuRail = () => {
    const [data, setData] = useState([
        {title:'Dashboard item'},
        {title:'Dashboard item'},
        {title:'Dashboard item'},
    ])

    useEffect(()=> {
        console.log(data)
    })

    return (
        <>
            <ul>
                <li>Nodes</li>
                {data.map(item => (<li>{item.title}</li>))}
            </ul>
        </>
    )
}
import React, { useState } from 'react'
import Card from './Card'
import CardControl from './CardControl/CardControl'

const Stack = () => {
    const [cards, setCards] = useState([])

    return (
        <div>
            <Card />
            <CardControl />
        </div>
    )
}

export default Stack
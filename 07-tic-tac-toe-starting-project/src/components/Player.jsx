import { useState } from 'react';

export default function Player({ name, symbol }) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    let plyerName = <span className="player-name" >{name}</span>

    if (isEditing) {
        plyerName = <input type="text" />
    }

    return (
        <li>
            <span className="player" >
                {plyerName}
                <span className="player-symbol" >{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    )

}
import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {


    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value)  
    }

    let editablePlyerName = <span className="player-name" >{playerName}</span>
    // let buttonName = 'Edit'

    if (isEditing) {
        editablePlyerName = <input type="text" required value={playerName} onChange={handleChange} />
        // buttonName='Save'
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player" >
                {editablePlyerName}
                <span className="player-symbol" >{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )

}
import { useState } from "react";

export default function Player({ initialName = '', symbol = '', isActive, onNameChange }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(editing => !editing);
        if(isEditing) {
            onNameChange(symbol, playerName);
        }
    }

    const handleChange = (event) => {
        const name = event.target.value;
        setPlayerName(name);
    }

    return (
        <li className={`${isActive ? 'active' : ''}`}>
            <span className="player">
                {!isEditing ?
                    <span className="player-name">{playerName}</span> :
                    <input
                        type="text"
                        value={playerName}
                        name="player-name"
                        onChange={handleChange}
                        required
                    />
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button
                onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    )
}
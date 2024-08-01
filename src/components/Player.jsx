import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleEdit = () => {
    setIsEditing((isEditing) => !isEditing);
    setPlayerName(playerName);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  let player = <span className="player-name">{playerName}</span>;
  let buttonCaption = "EDIT";
  if (isEditing) {
    player = (
      <input
        value={playerName}
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
        type="text"
        autoFocus
      ></input>
    );
    buttonCaption = "SAVE";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">{player}</span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEdit}>{buttonCaption}</button>
    </li>
  );
}

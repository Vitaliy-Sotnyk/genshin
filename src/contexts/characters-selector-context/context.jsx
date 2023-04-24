import { createContext, useContext, useEffect, useState } from "react";
import data from "../../assets/characterData.json";

const defaultCharacterSelectorContext = {
  selectCharacter: '',
  handleSelectorChange: () => { },
  characterSelectionStatus: false,
  handleListItemClick: () => { },
  charactersData: [{}],
}

const CharacterSelectorContext = createContext(defaultCharacterSelectorContext);
export const useCharacterSelectorContext = () => useContext(CharacterSelectorContext);

export const CharacterSelectorContextProvider = ({ children }) => {
  const parseJson = () => {
    try {
      return JSON.parse(JSON.stringify(data));
    } catch (error) {
      return [];
    }
  };

  const getName = () => {
    try {
      const result = JSON.parse(JSON.stringify(data));
      return result[2].name;
    } catch (error) {
      return "";
    }
  }

  const [charactersData, setCharactersData] = useState(parseJson());
  const [selectCharacter, setSelectCharacter] = useState(getName()); //Дех'я
  const [characterSelectionStatus, setCharacterSelectionStatus] = useState(false);

  const handleSelectorChange = () => {
    setCharacterSelectionStatus((state) => !state);
  }

  const handleListItemClick = (characterName) => {
    setSelectCharacter(characterName);
    setCharacterSelectionStatus(false);
  }

  return (
    <CharacterSelectorContext.Provider value={{
      selectCharacter,
      characterSelectionStatus,
      charactersData,
      handleSelectorChange,
      handleListItemClick
    }}>
      {children}
    </CharacterSelectorContext.Provider>
  );
};
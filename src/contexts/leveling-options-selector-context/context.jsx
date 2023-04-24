import { createContext, useContext, useState } from "react";

export const CharacterLevelingOptions = Object.freeze({
  ascension: 'Вознесіння',
  talents: 'Таланти',
});

const defaultLevelingOptionsContext = {
  selectLevelingOptionValue: CharacterLevelingOptions.ascension,
  handleSelectLevelingOptionChange: () => { },
  levelingOptionSelectionStatus: false,
  handleLevelingOptionClick: () => { },
}

const LevelingOptionsContext = createContext(defaultLevelingOptionsContext);
export const useLevelingOptionsContext = () => useContext(LevelingOptionsContext);

export const LevelingOptionsContextProvider = ({ children }) => {
  const [selectLevelingOptionValue, setSelectLevelingOptionValue] = useState(CharacterLevelingOptions.ascension);
  const [levelingOptionSelectionStatus, setLevelingOptionSelectionStatus] = useState(false);

  const handleSelectLevelingOptionChange = () => {
    setLevelingOptionSelectionStatus((state) => !state);
  }

  const handleLevelingOptionClick = (optionName) => {
    setSelectLevelingOptionValue(optionName);
    setLevelingOptionSelectionStatus(false);
  }

  return (
    <LevelingOptionsContext.Provider value={{
      selectLevelingOptionValue,
      levelingOptionSelectionStatus,
      handleSelectLevelingOptionChange,
      handleLevelingOptionClick
    }}>
      {children}
    </LevelingOptionsContext.Provider>
  );
};
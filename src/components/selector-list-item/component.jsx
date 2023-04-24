import { useCharacterSelectorContext } from "../../contexts/characters-selector-context";
import { useLevelingOptionsContext } from "../../contexts/leveling-options-selector-context";
import { SelectorTypes } from "../selector/component";

export const SelectorListItem = ({ itemName, selectorType }) => {
  const { handleListItemClick, selectCharacter } = useCharacterSelectorContext();
  const { handleLevelingOptionClick, selectLevelingOptionValue } = useLevelingOptionsContext();
  return (
    <li className="select-container__options__item"
      onClick={() => selectorType === SelectorTypes.characterSelector
        ? handleListItemClick(itemName)
        : handleLevelingOptionClick(itemName)
      }>
      <h3>{itemName}</h3>
      {
        selectorType === SelectorTypes.characterSelector &&
        <div className={`select-container__options__item__image ${selectCharacter === itemName ? "options-selected" : ""}`}>
          <img src="../images/switch.png" alt="Button" />
        </div>
      }
      {
        selectorType === SelectorTypes.levelingOptionsSelector &&
        <div className={`select-container__options__item__image ${selectLevelingOptionValue === itemName ? "options-selected" : ""}`}>
          <img src="../images/switch.png" alt="Button" />
        </div>
      }
    </li>
  );
};
import { useCharacterSelectorContext } from "../../contexts/characters-selector-context";
import { v4 as uuidv4 } from "uuid";
import { SelectorListItem } from "../selector-list-item/component";
import { CharacterLevelingOptions, useLevelingOptionsContext } from "../../contexts/leveling-options-selector-context";

export const SelectorTypes = Object.freeze({
  characterSelector: 'header__character__name',
  levelingOptionsSelector: 'select-resourse__selected',
});

export const Selector = ({ nameOfClass }) => {
  const { selectCharacter, characterSelectionStatus, charactersData, handleSelectorChange } = useCharacterSelectorContext();
  const { selectLevelingOptionValue, levelingOptionSelectionStatus, handleSelectLevelingOptionChange } = useLevelingOptionsContext();

  return (
    <div className={`${nameOfClass} select-container`}>
      <input type="checkbox" id={`${nameOfClass}-arrow`}
        checked={nameOfClass === SelectorTypes.characterSelector ? characterSelectionStatus : levelingOptionSelectionStatus}
        onChange={nameOfClass === SelectorTypes.characterSelector ? handleSelectorChange : handleSelectLevelingOptionChange} />
      <label className={`${nameOfClass}__value  select-container__value`} htmlFor={`${nameOfClass}-arrow`}>
        {
          nameOfClass === SelectorTypes.characterSelector ? <h2>{selectCharacter}</h2> : <h3>{selectLevelingOptionValue}</h3>
        }
        <div className={`${nameOfClass}__value__image select-container__value__image`}>
          <img src="../images/switch.png" alt="Button" />
        </div>
      </label>
      <ul className={`${nameOfClass}__options select-container__options`}>
        {
          nameOfClass === SelectorTypes.characterSelector &&
          charactersData.map(character =>
            <SelectorListItem key={uuidv4()} selectorType={nameOfClass} itemName={character.name} />
          )
        }
        {
          nameOfClass === SelectorTypes.levelingOptionsSelector &&
          Object.values(CharacterLevelingOptions).map(option =>
            <SelectorListItem key={uuidv4()} selectorType={nameOfClass} itemName={option} />
          )
        }
      </ul>
    </div>
  );
};
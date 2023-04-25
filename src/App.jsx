import { useState, useEffect } from "react"
import expBooksData from "./assets/expBooks.json"
import "./App.scss"
import { useCharacterSelectorContext } from "./contexts/characters-selector-context";
import { Selector, SelectorTypes } from "./components/selector";
import { ResourceArray } from "./components/resource-array";

function App() {
  // const [characterInfo, setCharacterInfo] = useState();
  // const [buttonState, setButtonState] = useState(false);
  const { charactersData } = useCharacterSelectorContext();
  const [currentCharacterInfo, setCurrentCharacterInfo] = useState({});
  // const changeStyle = () => {
  //   if (buttonState) return (["active-button", "active-list"]);
  //   return (["", ""]);
  // }

  const expBooks = JSON.parse(JSON.stringify(expBooksData)).exp_book;

  useEffect(() => {
    setCurrentCharacterInfo(charactersData.filter(character => character.name === "Дех'я")[0]);
  }, [charactersData]);

  return (
    <div className="App">
      <div className="container">
        {
          Object.keys(currentCharacterInfo).length > 0 &&
          <>
            <div className="background-video">
              <video className="background-video__video" src={`${currentCharacterInfo?.element.background}`} autoPlay muted loop>
                Your browser does not support the video tag.
              </video>
            </div>
            <header className="header">
              <div className="header__character">
                <img className="header__character__full-img" src={currentCharacterInfo?.images.full} alt={currentCharacterInfo?.name} />
                <Selector nameOfClass={SelectorTypes.characterSelector} />
              </div>
              <div className="header__level">
                <h3 className="header__level__value"> Поточний рівень:
                  <input type="" className="numerical-value" placeholder={0} />
                </h3>
                <h3 className="header__level__value"> Цільовий рівень:
                  <input type="" className="numerical-value" placeholder={90} />
                </h3>
              </div>
            </header>
            {/* <nav>
          <div className={`navbar__menu-button ${changeStyle()[0]}`} onClick={() => setButtonState(!buttonState)}>
            <button ></button>
          </div>
          <ul className={`navbar__menu-list ${changeStyle()[1]}`}>
            <li></li>
          </ul>
        </nav> */}
            <main >
              <section className="select-resourse">
                <Selector nameOfClass={SelectorTypes.levelingOptionsSelector} />
              </section>

              <section className="resourse">
                <ResourceArray title={'Книги досвіду'} resourceList={expBooks} />
                {/*далі не переписувала, бо змінений json на іншій гілці*/}
                <section className="resourse__array">
                  <h3 className="resourse__array__title resourse-title">Кристали</h3>
                  <div className="resourse__array__elements upgrade-materials">
                    <div className="upgrade-materials__element">
                      <img className="upgrade-materials__element__backgroung" src={currentCharacterInfo?.ascension_materials.ascension_gems.agnidus_agate_sliver.icon} alt={currentCharacterInfo?.ascension_materials.ascension_gems.agnidus_agate_sliver.name} />
                      <input type="" className="numerical-value" placeholder={0} />
                    </div>
                    <div className="upgrade-materials__element">
                      <img className="upgrade-materials__element__backgroung" src={currentCharacterInfo?.ascension_materials.ascension_gems.agnidus_agate_fragment.icon} alt={currentCharacterInfo?.ascension_materials.ascension_gems.agnidus_agate_fragment.name} />
                      <input type="" className="numerical-value" placeholder={0} />
                    </div>
                    <div className="upgrade-materials__element">
                      <img className="upgrade-materials__element__backgroung" src={currentCharacterInfo?.ascension_materials.ascension_gems.agnidus_agate_chunk.icon} alt={currentCharacterInfo?.ascension_materials.ascension_gems.agnidus_agate_chunk.name} />
                      <input type="" className="numerical-value" placeholder={0} />
                    </div>
                    <div className="upgrade-materials__element">
                      <img className="upgrade-materials__element__backgroung" src={currentCharacterInfo?.ascension_materials.ascension_gems.agnidus_agate_gemstone.icon} alt={currentCharacterInfo?.ascension_materials.ascension_gems.agnidus_agate_gemstone.name} />
                      <input type="" className="numerical-value" placeholder={0} />
                    </div>
                  </div>
                </section>
                <section className="resourse__array">
                  <h3 className="resourse__array__title resourse-title">Лут з монстрів</h3>
                  <div className="resourse__array__elements upgrade-materials">
                    <div className="upgrade-materials__element">
                      <img className="upgrade-materials__element__backgroung" src={currentCharacterInfo?.ascension_materials.enemy_drops.faded_red_satin.icon} alt={currentCharacterInfo?.ascension_materials.enemy_drops.faded_red_satin.name} />
                      <input type="" className="numerical-value" placeholder={0} />
                    </div>
                    <div className="upgrade-materials__element">
                      <img className="upgrade-materials__element__backgroung" src={currentCharacterInfo?.ascension_materials.enemy_drops.trimmed_red_silk.icon} alt={currentCharacterInfo?.ascension_materials.enemy_drops.trimmed_red_silk.name} />
                      <input type="" className="numerical-value" placeholder={0} />
                    </div>
                    <div className="upgrade-materials__element">
                      <img className="upgrade-materials__element__backgroung" src={currentCharacterInfo?.ascension_materials.enemy_drops.rich_red_brocade.icon} alt={currentCharacterInfo?.ascension_materials.enemy_drops.rich_red_brocade.name} />
                      <input type="" className="numerical-value" placeholder={0} />
                    </div>
                  </div>
                </section>
                <section className="resourse__array small-arrea">
                  <h3 className="resourse__array__title resourse-title">Диковинка</h3>
                  <div className="resourse__array__elements upgrade-materials">
                    <div className="upgrade-materials__element">
                      <img className="upgrade-materials__element__backgroung" src={currentCharacterInfo?.ascension_materials.daily_boss_drop.icon} alt={currentCharacterInfo?.ascension_materials.daily_boss_drop.name} />
                      <input type="" className="numerical-value" placeholder={0} />
                    </div>
                  </div>
                </section>
                <section className="resourse__array small-arrea">
                  <h3 className="resourse__array__title resourse-title">Лут з боса</h3>
                  <div className="resourse__array__elements upgrade-materials">
                    <div className="upgrade-materials__element">
                      <img className="upgrade-materials__element__backgroung" src={currentCharacterInfo?.ascension_materials.local_specialty.icon} alt={currentCharacterInfo?.ascension_materials.local_specialty.name} />
                      <input type="" className="numerical-value" placeholder={0} />
                    </div>
                  </div>
                </section>
                <section className="resourse__array small-arrea">
                  <h3 className="resourse__array__title resourse-title">Мора</h3>
                  <div className="resourse__array__elements upgrade-materials">
                    <div className="upgrade-materials__element">
                      <img className="upgrade-materials__element__backgroung" src={currentCharacterInfo?.ascension_materials.mora.icon} alt={currentCharacterInfo?.ascension_materials.mora.name} />
                      <input type="" className="numerical-value" placeholder={0} />
                    </div>
                  </div>
                </section>
              </section>
              <section className="calculate">
                <button className="calculate__button">Розрахувати</button>
              </section>
            </main>
          </>
        }
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import data from './assets/characterData.json'
import './App.scss'

function App() {
  // const [characterInfo, setCharacterInfo] = useState();
  // const [buttonState, setButtonState] = useState(false);
  const [selectResourseValue,setSelectResourseValue] = useState('Вознесіння')
  // const [selectionProcess, setSelectionProcess] = useState(false);
  // const changeStyle = () => {
  //   if (buttonState) return (['active-button', 'active-list']);
  //   return (['', '']);
  // }

  /* */
  const characterData = JSON.parse(JSON.stringify(data));
  const expBooks = characterData.filter(character => character.exp_book)[0].exp_book;
  const dehyaInfo = characterData.filter(character => character.name === "Дех'я")[0];
  /* */

  return (
    <div className="App">
      <div className="container">
        <div className='background-video'>
          <video className='background-video__video' src={`${dehyaInfo.element.background}`} autoPlay muted loop>
            Your browser does not support the video tag.
          </video>
        </div>
        <header className='header'>
          <div className='header__character'>
            <img className="header__character__full-img" src={dehyaInfo.images.full} alt={dehyaInfo.name} />
            <div className="header__character__name">
              <img src="../images/switch.png" alt="Button" />
              <h1>{dehyaInfo.name}</h1>
            </div>
          </div>
          <div className='header__level'>
            <h3 className='header__level__value'> Поточний рівень:
              <input type='' className='numerical-value' placeholder={0} />
            </h3>
            <h3 className='header__level__value'> Цільовий рівень:
              <input type='' className='numerical-value' placeholder={90} />
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
          <section className='select-resourse'>
            <div className='select-resourse__selected'>
              <input type="checkbox" id='select-resourse-arrow' />
              <label className='select-resourse__selected__image' htmlFor='select-resourse-arrow'>
                <h3>{selectResourseValue}</h3>
                <img src="../images/switch.png" alt="Button" />
              </label>
              {/* <div className='select-resourse__selected__options'>
                <input type="radio" id="upgrade" name/>
                  <label id="en_language" htmlFor="upgrade">Вознесіння</label>
                <input type="radio" id="talants"/>
                  <label id="ua_language" htmlFor="talants">Таланти</label>
              </div> */}
            </div>
          </section>
          <section className='resourse'>
            <section className='resourse__array'>
              <h3 className="resourse__array__title resourse-title">Книги досвіду</h3>
              <div className="resourse__array__elements upgrade-materials">
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={expBooks.wanderer_book.icon} alt={expBooks.wanderer_book.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={expBooks.adventurer_book.icon} alt={expBooks.adventurer_book.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={expBooks.hero_book.icon} alt={expBooks.hero_book.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
              </div>
            </section>
            <section className='resourse__array'>
              <h3 className="resourse__array__title resourse-title">Кристали</h3>
              <div className="resourse__array__elements upgrade-materials">
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={dehyaInfo.ascension_materials.ascension_gems.agnidus_agate_sliver.icon} alt={dehyaInfo.ascension_materials.ascension_gems.agnidus_agate_sliver.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={dehyaInfo.ascension_materials.ascension_gems.agnidus_agate_fragment.icon} alt={dehyaInfo.ascension_materials.ascension_gems.agnidus_agate_fragment.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={dehyaInfo.ascension_materials.ascension_gems.agnidus_agate_chunk.icon} alt={dehyaInfo.ascension_materials.ascension_gems.agnidus_agate_chunk.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={dehyaInfo.ascension_materials.ascension_gems.agnidus_agate_gemstone.icon} alt={dehyaInfo.ascension_materials.ascension_gems.agnidus_agate_gemstone.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
              </div>
            </section>
            <section className='resourse__array'>
              <h3 className="resourse__array__title resourse-title">Лут з монстрів</h3>
              <div className="resourse__array__elements upgrade-materials">
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={dehyaInfo.ascension_materials.enemy_drops.faded_red_satin.icon} alt={dehyaInfo.ascension_materials.enemy_drops.faded_red_satin.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={dehyaInfo.ascension_materials.enemy_drops.trimmed_red_silk.icon} alt={dehyaInfo.ascension_materials.enemy_drops.trimmed_red_silk.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={dehyaInfo.ascension_materials.enemy_drops.rich_red_brocade.icon} alt={dehyaInfo.ascension_materials.enemy_drops.rich_red_brocade.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
              </div>
            </section>
            <section className='resourse__array small-arrea'>
              <h3 className="resourse__array__title resourse-title">Диковинка</h3>
              <div className="resourse__array__elements upgrade-materials">
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={dehyaInfo.ascension_materials.daily_boss_drop.icon} alt={dehyaInfo.ascension_materials.daily_boss_drop.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
              </div>
            </section>
            <section className='resourse__array small-arrea'>
              <h3 className="resourse__array__title resourse-title">Лут з боса</h3>
              <div className="resourse__array__elements upgrade-materials">
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={dehyaInfo.ascension_materials.local_specialty.icon} alt={dehyaInfo.ascension_materials.local_specialty.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
              </div>
            </section>
            <section className='resourse__array small-arrea'>
              <h3 className="resourse__array__title resourse-title">Мора</h3>
              <div className="resourse__array__elements upgrade-materials">
                <div className='upgrade-materials__element'>
                  <img className="upgrade-materials__element__backgroung" src={dehyaInfo.ascension_materials.mora.icon} alt={dehyaInfo.ascension_materials.mora.name} />
                  <input type='' className='numerical-value' placeholder={0} />
                </div>
              </div>
            </section>
          </section>
          <section className='calculate'>
            <button className='calculate__button'>Розрахувати</button>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

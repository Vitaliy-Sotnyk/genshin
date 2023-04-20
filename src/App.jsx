import { useState } from 'react'
import data from './assets/characterData.json'
import './App.scss'


function App() {
  const [characterInfo, setCharacterInfo] = useState();
  const [buttonState, setButtonState] = useState(false);
  const changeStyle = () => {
    if (buttonState) return (['active-button', 'active-list']);
    return (['', '']);
  }

  /* */
  const characterData = JSON.parse(JSON.stringify(data));
  const dehyaInfo = characterData.filter(character => character.name === "Дех'я")[0];
  /* */

  return (
    <div className="App">
      <div className='background-video'>
        <video className='background-video__video' src={`${dehyaInfo.element.background}`} autoPlay muted loop>
          Your browser does not support the video tag.
        </video>
      </div>
      <header>
        <section className='character'>
          <div className="character__backgroung" style={{ backgroundImage: `url(${dehyaInfo.images.full})` }}></div>
          <h1 className="character__name">Дех'я</h1>
        </section>
        <section className='level'>
          <h3 className='level__actual'>
            <div className='numerical-value'>1</div>
          </h3>
          <h3 className='level__goal'>
            <div className='numerical-value'>90</div>
          </h3>
        </section>
      </header>
      <nav>
        <div className={`navbar__menu-button ${changeStyle()[0]}`} onClick={() => setButtonState(!buttonState)}>
          <button ></button>
        </div>
        <ul className={`navbar__menu-list ${changeStyle()[1]}`}>
          <li></li>
        </ul>
      </nav>
      <main >
        <section className='select-resourse'>
          <select className='select-resourse__select' name="select-resourse">
            <option data-count="1" defaultValue >Вознесіння</option>
            <option data-count="2" >Таланти</option>
          </select>
        </section>
        <section className='resourse resourse-upgrade'>
          <section className='resourse__array'>
            <h3 className="resourse__array__title resourse-title">Книги досвіду</h3>
            <div className="resourse__array__elements upgrade-materials">
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
            </div>
          </section>
          <section className='resourse__array'>
            <h3 className="resourse__array__title resourse-title">Кристали</h3>
            <div className="resourse__array__elements upgrade-materials">
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
            </div>
          </section>
          <section className='resourse__array'>
            <h3 className="resourse__array__title resourse-title">Лут з монстрів</h3>
            <div className="resourse__array__elements upgrade-materials">
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
            </div>
          </section>
          <section className='resourse__array'>
            <h3 className="resourse__array__title resourse-title">Диковинка</h3>
            <div className="resourse__array__elements upgrade-materials">
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
            </div>
          </section>
          <section className='resourse__array'>
            <h3 className="resourse__array__title resourse-title">Лут з боса</h3>
            <div className="resourse__array__elements upgrade-materials">
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
            </div>
          </section>
          <section className='resourse__array'>
            <h3 className="resourse__array__title resourse-title">Мора</h3>
            <div className="resourse__array__elements upgrade-materials">
              <div className='upgrade-materials__element'>
                <div className="upgrade-materials__element__backgroung" style={{ backgroundImage: `url('')` }}></div>
                <div className='numerical-value'>0</div>
              </div>
            </div>
          </section>
        </section>
        <section className='calculate'>
          <button className='calculate__button'>Розрахувати</button>
        </section>
      </main>
    </div>
  )
}

export default App

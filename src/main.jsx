import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { CharacterSelectorContextProvider } from './contexts/characters-selector-context'
import { LevelingOptionsContextProvider } from './contexts/leveling-options-selector-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharacterSelectorContextProvider>
      <LevelingOptionsContextProvider>
        <App />
      </LevelingOptionsContextProvider>
    </CharacterSelectorContextProvider>
  </React.StrictMode>,
)

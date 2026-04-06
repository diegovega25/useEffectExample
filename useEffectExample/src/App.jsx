import { createElement } from 'react'
import { EjemploUseEffect } from '@/features'
import { HTML_TAGS } from '@/shared/constants'
import './App.css'
/*“

@ en los import es como decir:
‘empezá desde la carpeta principal del proyecto’”

*/
function App() {
  return createElement(
    HTML_TAGS.MAIN,
    null,
    createElement(EjemploUseEffect)
  )
}

export default App

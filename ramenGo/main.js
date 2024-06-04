import './style.css'
import { setupCounter } from './lib/main.js'
import { setupPostComponent } from './lib/PostComponent.js';

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>

    <button id="PostComponent" type="button"></button>
  </div>
`

setupCounter(document.querySelector('#counter'))
setupPostComponent(document.querySelector('#PostComponent'))

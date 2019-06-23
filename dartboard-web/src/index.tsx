import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield/component';
import { MDCSlider } from '@material/slider';
import { MDCRadio } from '@material/radio';

import App from './App/App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Button
const buttonEls = Array.from(document.querySelectorAll('.mdc-button'));
buttonEls.forEach((el) => new MDCRipple(el));

// Text field
const textFieldEls = Array.from(document.querySelectorAll('.mdc-text-field'));
textFieldEls.forEach((el) => {
  let textField = new MDCTextField(el);
  if (el.classList.contains('text-field-with-input')) {
    textField.value = 'Input text';
  }
});

// Sliders
const sliderEls = Array.from(document.querySelectorAll('.mdc-slider'));
sliderEls.forEach((el) => new MDCSlider(el));

// Radios
const radioFieldEls = Array.from(document.querySelectorAll('.mdc-form-field'));
radioFieldEls.forEach((el) => {
  
  // let radio = new MDCRadio(el.getElementsByClassName('.mdc-radio')[0]);

})
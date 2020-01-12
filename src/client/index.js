import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/results.scss'
import frogLogo from './img/Mesmerizing-Frog-Logo.png'

var siteLogo = document.getElementById('logo');
siteLogo.src = frogLogo;

console.log("CHANGE!!");

export {
    handleSubmit
}

import { state } from './model';
import view from './views/view';
import View from './views/view';








const controlStrengthIndicator = function(){

    View.controlRangeDisplay()

    View.updateStrengthIndicator(state.pwStrenght);

}

const generatePassword = function(){
    const options = View.getAllInputDAta()

    const newPw = state.generatePW(options)

    View.updateGeneratedPwords(newPw)
}

const copyTxtToCLipBoard = async function(){

    if(View._generatedPW.value === '') return

    const pwTxt = View._generatedPW.value

    try {
        await navigator.clipboard.writeText(pwTxt);

        View.controllCopiedPWAlert()
      } catch (err) {
        console.error('Failed to copy: ', err);
        /* Rejected - text failed to copy to the clipboard */
      }
}

const init = function(){

    View.addHandlerOnRangeInput(controlStrengthIndicator)
    View.addHandlerOnpageLoad(controlStrengthIndicator)
    View.addHandlerOnformSubmit(generatePassword)
    View.addHandlerOnCopyBtn(copyTxtToCLipBoard)

}

init()



class View {

    // DOM selectors

    _appContainer = document.querySelector('.app-container')
    _generatedPW = document.querySelector('.generated-password')
    _copyBtn = document.querySelector('.generated-password-copy')
    _passwordGeneratorForm = document.querySelector('.password-generator')
    _charLengthDisplay = document.querySelector('.character-length__count')
    _rangeInput = document.querySelector('.range-input')
    _rangeInputProgressBar = document.querySelector('.progress-bar')
    _strenghtIndicatorText = document.querySelector('.strenght-indicator__text')
    _strenghtIndicatorBars = document.querySelectorAll('.indicator-bar')
    _generateBtn = document.querySelector('.generate-btn')
    _checkboxUpper = document.querySelector('.checkbox__uppercase')
    _checkboxlower = document.querySelector('.checkbox__lowercase')
    _checkboxNumber = document.querySelector('.checkbox__number')
    _checkboxSymbol = document.querySelector('.checkbox__symbol')
    _copiedPWToltip = document.querySelector('.generated-password-copy__text')


    _appData

    constructor(){
    }

    controllCopiedPWAlert(){
        
        this._copiedPWToltip.classList.add('visible')

        const addClass = function(){

            this._copiedPWToltip.classList.add('fade-out')

        }
        const removeClass = function(){

            this._copiedPWToltip.classList.remove('fade-out')
            this._copiedPWToltip.classList.remove('visible')

        }

        setTimeout(addClass.bind(this),800)

        setTimeout(removeClass.bind(this),1600)


    }

    controlRangeDisplay(){
        this.updateCharLengthCount()
        const widthPecentage = `${(this._rangeInput.value / this._rangeInput.max) * (100 / 1)}%`
        this._rangeInputProgressBar.style.width = widthPecentage
        
    }

    updateCharLengthCount(){
        this._charLengthDisplay.textContent = `${this._rangeInput.value}`
    }

    updateStrengthIndicator(indicator){

        
        this._strenghtIndicatorBars.forEach(function(bar){
            
            bar.style.borderColor = '#E6E5EA'
            bar.style.backgroundColor = 'transparent'
            

        })
        
        if(+this._rangeInput.value <= 5 ) this.updateIdicatorUI(indicator.tooWeak)
        if(+this._rangeInput.value > 5 && +this._rangeInput.value <= 8 ) this.updateIdicatorUI(indicator.weak)
        if(+this._rangeInput.value > 8 && +this._rangeInput.value <= 11 ) this.updateIdicatorUI(indicator.medium)
        if(+this._rangeInput.value >= 12 ) this.updateIdicatorUI(indicator.strong)
    }

    updateIdicatorUI(pwMode){
        this._strenghtIndicatorText.textContent = pwMode.text
        const strenghtIDBoxsArr = Array.from(this._strenghtIndicatorBars).slice(0, pwMode.bar)

        strenghtIDBoxsArr.forEach(function(bar){
            bar.style.borderColor = pwMode.color
            bar.style.backgroundColor = pwMode.color

        })
    }

    getAllInputDAta(){

        const generatOpts = {
            length: +this._rangeInput.value,
	        numbers: this._checkboxNumber.checked,
            uppercase: this._checkboxUpper.checked,
            lowercase: this._checkboxlower.checked,
            symbols: this._checkboxSymbol.checked,
            strict: true
        }

        return generatOpts
    }

    updateGeneratedPwords(newPass){
        this._generatedPW.value = newPass
    }



    addHandlerOnpageLoad(handler){
        window.addEventListener('load', handler)
    }
    addHandlerOnRangeInput(handler){
        this._rangeInput.addEventListener('input', handler)
    }
    addHandlerOnformSubmit(handler){
        this._generateBtn.addEventListener('click', function(e){

            e.preventDefault()
            console.log('active');
            handler()


        })
    }

    addHandlerOnCopyBtn(handler){
        this._copyBtn.addEventListener('click', handler)
    }
}

export default new View()

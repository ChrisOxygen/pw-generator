import { generate } from "generate-password"


export const state = {

    pwStrenght: {
        tooWeak: {text: 'Too Weak', color: '#F64A4A', bar: 1},
        weak: {text: 'Weak', color: '#FB7C58', bar: 2},
        medium: {text: 'Medium', color: '#F8CD65', bar: 3},
        strong: {text: 'Strong', color: '#A4FFAF', bar: 4}
    },

    generatePW: generate
    
    
}




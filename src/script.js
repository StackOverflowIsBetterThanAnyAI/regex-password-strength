const input = document.getElementById('password')

document.addEventListener('keydown', (e) => {
    if (e.key === ' ') e.preventDefault()
    else if (e.key !== 'Tab') return

    const focusableElements = document.querySelectorAll('button, input')

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (e.shiftKey) {
        if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
        }
    } else {
        if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
        }
    }
})

function togglePassword() {
    const password = document.getElementById('password')
    const toggle = document.getElementById('toggle')
    const type = password.type
    const visible = type === 'text'
    password.setAttribute('type', visible ? 'password' : 'text')
    toggle.innerHTML = visible ? 'Show Password' : 'Hide Password'
}

function handleInput() {
    const password = document.getElementById('password').value
    const strength = document.getElementById('strength')

    const checkCharacters = document.getElementById('checkCharacters')
    const checkLowerCase = document.getElementById('checkLowerCase')
    const checkUppercase = document.getElementById('checkUppercase')
    const checkNumber = document.getElementById('checkNumber')
    const checkSpecial = document.getElementById('checkSpecial')

    const veryWeak = document.getElementById('very-weak')
    const weak = document.getElementById('weak')
    const medium = document.getElementById('medium')
    const strong = document.getElementById('strong')
    const veryStrong = document.getElementById('very-strong')

    const lowerCase = password.match(/[a-zäöü]/g) || []
    const upperCase = password.match(/[A-ZÄÖÜ]/g) || []
    const number = password.match(/\d/g) || []
    const special = password.match(/[^a-zäöü0-9 ]/gi) || []

    const lowerCaseCounter = lowerCase.length
    const upperCaseCounter = upperCase.length
    const numberCounter = number.length
    const specialCounter = special.length
    const charCounter = password.length

    const distinctLowerCaseCounter = [...new Set(lowerCase)].length
    const distinctUpperCaseCounter = [...new Set(upperCase)].length
    const distinctNumberCounter = [...new Set(number)].length
    const distinctSpecialCounter = [...new Set(special)].length

    if (charCounter === 0) {
        veryWeak.style.backgroundColor = '#585656'
        weak.style.backgroundColor = '#585656'
        medium.style.backgroundColor = '#585656'
        strong.style.backgroundColor = '#585656'
        veryStrong.style.backgroundColor = '#585656'
        strength.style.display = 'none'
    } else {
        if (
            !lowerCaseCounter ||
            !upperCaseCounter ||
            !numberCounter ||
            !specialCounter
        ) {
            veryWeak.style.backgroundColor = '#ec0505'
            weak.style.backgroundColor = '#585656'
            medium.style.backgroundColor = '#585656'
            strong.style.backgroundColor = '#585656'
            veryStrong.style.backgroundColor = '#585656'
            strength.style.display = 'block'
            strength.innerHTML = 'Password Strength: Very Weak'
        }
        if (
            charCounter < 8 &&
            lowerCaseCounter &&
            upperCaseCounter &&
            numberCounter &&
            specialCounter
        ) {
            veryWeak.style.backgroundColor = '#df4e0a'
            weak.style.backgroundColor = '#df4e0a'
            medium.style.backgroundColor = '#585656'
            strong.style.backgroundColor = '#585656'
            veryStrong.style.backgroundColor = '#585656'
            strength.innerHTML = 'Password Strength: Weak'
        }
        if (
            charCounter >= 8 &&
            lowerCaseCounter &&
            upperCaseCounter &&
            numberCounter &&
            specialCounter
        ) {
            veryWeak.style.backgroundColor = '#f1d51f'
            weak.style.backgroundColor = '#f1d51f'
            medium.style.backgroundColor = '#f1d51f'
            strong.style.backgroundColor = '#585656'
            veryStrong.style.backgroundColor = '#585656'
            strength.innerHTML = 'Password Strength: Medium'
        }
        if (
            charCounter >= 11 &&
            lowerCaseCounter > 1 &&
            upperCaseCounter > 1 &&
            numberCounter > 1 &&
            specialCounter > 1
        ) {
            veryWeak.style.backgroundColor = '#86e610'
            weak.style.backgroundColor = '#86e610'
            medium.style.backgroundColor = '#86e610'
            strong.style.backgroundColor = '#86e610'
            veryStrong.style.backgroundColor = '#585656'
            strength.innerHTML = 'Password Strength: Strong'
        }
        if (
            charCounter >= 15 &&
            distinctLowerCaseCounter > 1 &&
            distinctUpperCaseCounter > 1 &&
            distinctNumberCounter > 1 &&
            distinctSpecialCounter > 1
        ) {
            veryWeak.style.backgroundColor = '#06ed06'
            weak.style.backgroundColor = '#06ed06'
            medium.style.backgroundColor = '#06ed06'
            strong.style.backgroundColor = '#06ed06'
            veryStrong.style.backgroundColor = '#06ed06'
            strength.innerHTML = 'Password Strength: Very Strong'
        }
    }

    checkCharacters.innerHTML =
        charCounter >= 15
            ? '✔️ Use at least 15 characters.'
            : '❌ Use at least 15 characters.'

    checkLowerCase.innerHTML =
        distinctLowerCaseCounter >= 2
            ? '✔️ Use two different lowercase letters.'
            : '❌ Use two different lowercase letters.'

    checkUppercase.innerHTML =
        distinctUpperCaseCounter >= 2
            ? '✔️ Use two different uppercase letters.'
            : '❌ Use two different uppercase letters.'

    checkNumber.innerHTML =
        distinctNumberCounter >= 2
            ? '✔️ Use two different numbers.'
            : '❌ Use two different numbers.'

    checkSpecial.innerHTML =
        distinctSpecialCounter >= 2
            ? '✔️ Use two different special characters.'
            : '❌ Use two different special characters.'
}

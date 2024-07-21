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

    const veryWeak = document.getElementById('very-weak')
    const weak = document.getElementById('weak')
    const medium = document.getElementById('medium')
    const strong = document.getElementById('strong')
    const veryStrong = document.getElementById('very-strong')

    const lowerCase = password.match(/[a-z]/g) || []
    const upperCase = password.match(/[A-Z]/g) || []
    const number = password.match(/\d/g) || []
    const special = password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []

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
}

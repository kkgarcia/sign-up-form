const password = document.querySelector('.error')
const confirmPassword = document.querySelector('.confirm')
const root = document.querySelector(':root')

password.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
        root.style.setProperty("--danger-text", "'*Passwords do not match'")
        password.classList.add('danger')
        confirmPassword.classList.add('danger')
    } else {
        password.classList.remove('danger')
        confirmPassword.classList.remove('danger')
        root.style.setProperty("--danger-text", " ")
    }
})

confirmPassword.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
        root.style.setProperty("--danger-text", "'*Passwords do not match'")
        password.classList.add('danger')
        confirmPassword.classList.add('danger')
    } else {
        password.classList.remove('danger')
        confirmPassword.classList.remove('danger')
        root.style.setProperty("--danger-text", " ")
    }
})
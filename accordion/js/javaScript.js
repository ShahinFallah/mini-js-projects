let accordion = document.querySelectorAll(".accordion .wrapper")

accordion.forEach(value => {
    value.firstElementChild.addEventListener('click', () => {
        value.classList.toggle('show')
        let div = value.querySelector('div');
        value.classList.contains('show') ?
            div.style.maxHeight = `${div.scrollHeight + 30}px` : div.style.maxHeight = null
        accordion.forEach(closeValue => {
            if (closeValue != value) {
                closeValue.classList.remove('show')
                closeValue.querySelector("div").style.maxHeight = null
            }
        })
    })
})

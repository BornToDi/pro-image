const img = document.querySelectorAll('.img-wrapper')

img.forEach((items) => {
    items.addEventListener('mouseover', () => {
        const currentActive = document.querySelector('[data-active="true"]')
        console.log(currentActive)
        const dataActive = items.getAttribute('data-active')
        const index = items.getAttribute('data-index')
        if (dataActive !== 'true') {
            items.classList.replace('w-1/6', 'w-3/6')
            currentActive.classList.replace('w-3/6', 'w-1/6')
            currentActive.setAttribute('data-active', 'false')
            items.setAttribute('data-active', 'true')
        }
    })
})

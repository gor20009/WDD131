const themeSelector = document.querySelector('#theme-selector')

function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('img').src = 'byui-logo_white.png'
    } else {
        document.body.classList.remove('dark');
        document.querySelector('img').src = 'byui-logo_blue.png'
    }
}

themeSelector.addEventListener('change', changeTheme);
const toggle = document.querySelector('.toggle__wrapper');
const darkBtn = document.getElementById('dark');
const lightBtn = document.getElementById('light');

const getColorModeFromLocalStorage = () => {
    return localStorage.getItem('colorMode');
};

const getColorModeFromPreferences = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
};

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
    localStorage.setItem('colorMode', 'dark');
};

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
    localStorage.setItem('colorMode', 'light');
};

const setColorMode = () => {
    const color = getColorModeFromLocalStorage() || getColorModeFromPreferences();
    color === 'dark' 
        ? darkBtn.click()
        : lightBtn.click();
};

toggle.addEventListener('click', () => {
    darkBtn.checked ? setDarkMode() : setLightMode();
});

window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
            e.matches ? darkBtn.click() : lightBtn.click();
        });

setColorMode();
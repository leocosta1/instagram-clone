// Set Initial Theme based on localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.documentElement.classList.add('darkMode');
}


//  Switch Theme
const btnTheme = document.getElementById('btnTheme');

btnTheme.addEventListener('click', () => {
    let theme = 'light';
    document.documentElement.classList.toggle('darkMode');

    // Save Theme on localStorage
    if(document.documentElement.classList.contains('darkMode')) {
        theme = 'dark';
    }
    else {
        theme = 'light';
    }
    localStorage.setItem("theme", theme);
})
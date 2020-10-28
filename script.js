// Elements
const btnTheme = document.getElementById('btnTheme');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');


// Set Initial Theme based on localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme == 'dark') {
    document.documentElement.classList.add('darkMode');
    sun.style.display = 'block';
    moon.style.display = 'none';
}
else {
    document.documentElement.classList.remove('darkMode');
    sun.style.display = 'none';
    moon.style.display = 'block';
}


//  Switch Theme
btnTheme.addEventListener('click', () => {
    let theme;
    document.documentElement.classList.toggle('darkMode');

    // Save Theme on localStorage
    if(document.documentElement.classList.contains('darkMode')) {
        theme = 'dark';
        sun.style.display = 'block';
        moon.style.display = 'none';
    }
    else {
        theme = 'light';
        sun.style.display = 'none';
        moon.style.display = 'block';
    }

    localStorage.setItem('theme', theme);
})
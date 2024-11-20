export function darkTheme() {
    const isDark = localStorage.getItem('darkTheme') === 'true';

    if (isDark) {
        document.body.classList.remove('dark');
        localStorage.setItem('darkTheme', 'false');
    } else {
        document.body.classList.add('dark');
        localStorage.setItem('darkTheme', 'true');
    }
}

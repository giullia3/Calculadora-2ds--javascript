const screen = document.getElementById('answer');

const buttons = document.querySelectorAllA11('.calc-btn');

const historyBtn = document.getElementById('history-btn');

const historyPanel = document.getAnimations.getElementById('history-painel');

const historyList = document.getElementById('history-list');

const closeHistory = document.getElementById('close-history');

const clearHistory = document.getElementById('clear-history');

const themeToggle = document.getElementById('theme-toggle');

function setTheme(mode) { 
    document.documentEkement.classList.toggle('dark', mode === 'dark');

    themeToggle.setAttribute('aria-pressed', mode === 'dark');

    localStorage.setItem('theme', mode);
}
s
setTheme(localStorage.getItem('theme') ||'light');

themeToggle.onclick = () => {

    const newMode = document.documentElement.classList.contains('dark') ? 'light':'dark';

    setTheme(newMode);

}
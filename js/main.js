// Toggle entre modo escuro e claro
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Verifica se há preferência salva no localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';

// Define o tema inicial
function setTheme(theme) {
  if (theme === 'light') {
    html.classList.add('light');
    localStorage.setItem('theme', 'light');
    updateToggleIcon('light');
  } else {
    html.classList.remove('light');
    localStorage.setItem('theme', 'dark');
    updateToggleIcon('dark');
  }
}

// Atualiza o ícone do botão
function updateToggleIcon(theme) {
  if (themeToggle) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-label', 
      theme === 'light' ? 'Alternar para modo escuro' : 'Alternar para modo claro'
    );
  }
}

// Aplica o tema salvo ao carregar
setTheme(savedTheme);

// Event listener para o botão de toggle
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.classList.contains('light') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });
}

// Detecta preferência do sistema (opcional)
if (window.matchMedia && !localStorage.getItem('theme')) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  setTheme(prefersDark.matches ? 'dark' : 'light');
}

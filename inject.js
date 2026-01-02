(function() {
  if (document.getElementById('better-ui-wrapper')) return;
  
  const themes = {
    light: {
      bg: '#F7F6F4',
      text: '#424242',
      overlay: 'rgba(0, 0, 0, 0.4)',
      icon: '◐',
      btnBg: '#E8E7E5',
      btnHover: '#DCDBD9'
    },
    dark: {
      bg: '#131314',
      text: '#BCBCBC',
      overlay: 'rgba(0, 0, 0, 0.7)',
      icon: '◯',
      btnBg: '#232325',
      btnHover: '#2E2E30'
    }
  };
  
  const fonts = [
    { name: 'sans', family: 'system-ui, -apple-system, sans-serif', label: 'Sans' },
    { name: 'serif', family: '"New York", Cambria, "Libertinus Serif", Georgia, serif', label: 'Serif' },
    { name: 'mono', family: '"SF Mono", "Cascadia Mono", "Liberation Mono", Consolas, monospace', label: 'Mono' }
  ];
  
  let isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = isDark ? themes.dark : themes.light;
  let currentFontIndex = 0;
  
  const wrapper = document.createElement('div');
  wrapper.id = 'better-ui-wrapper';
  wrapper.style.position = 'fixed';
  wrapper.style.top = '0';
  wrapper.style.left = '0';
  wrapper.style.width = '100vw';
  wrapper.style.height = '100vh';
  wrapper.style.backgroundColor = currentTheme.overlay;
  wrapper.style.display = 'flex';
  wrapper.style.alignItems = 'center';
  wrapper.style.justifyContent = 'center';
  wrapper.style.zIndex = '2147483647';
  wrapper.style.transition = 'background-color 0.4s ease';
  
  const modal = document.createElement('div');
  modal.id = 'better-modal-body';
  modal.style.width = '80%';
  modal.style.maxWidth = '900px';
  modal.style.height = '80%';
  modal.style.maxHeight = '700px';
  modal.style.backgroundColor = currentTheme.bg;
  modal.style.borderRadius = '12px';
  modal.style.padding = '40px';
  modal.style.display = 'flex';
  modal.style.flexDirection = 'column';
  modal.style.boxSizing = 'border-box';
  modal.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
  modal.style.transition = 'background-color 0.4s ease';
  
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'flex-end';
  header.style.gap = '12px';
  header.style.marginBottom = '20px';
  header.style.alignItems = 'center';
  
  const fontBtn = document.createElement('button');
  fontBtn.id = 'font-toggle-ui';
  fontBtn.textContent = fonts[currentFontIndex].label;
  fontBtn.style.backgroundColor = currentTheme.btnBg;
  fontBtn.style.border = 'none';
  fontBtn.style.color = currentTheme.text;
  fontBtn.style.cursor = 'pointer';
  fontBtn.style.fontSize = '13px';
  fontBtn.style.fontWeight = '500';
  fontBtn.style.width = '52px';
  fontBtn.style.height = '36px';
  fontBtn.style.borderRadius = '8px';
  fontBtn.style.display = 'flex';
  fontBtn.style.alignItems = 'center';
  fontBtn.style.justifyContent = 'center';
  fontBtn.style.transition = 'background-color 0.2s ease, transform 0.1s ease';
  fontBtn.style.fontFamily = fonts[currentFontIndex].family;
  
  const themeBtn = document.createElement('button');
  themeBtn.id = 'theme-toggle-ui';
  themeBtn.textContent = currentTheme.icon;
  themeBtn.style.backgroundColor = currentTheme.btnBg;
  themeBtn.style.border = 'none';
  themeBtn.style.color = currentTheme.text;
  themeBtn.style.cursor = 'pointer';
  themeBtn.style.fontSize = '18px';
  themeBtn.style.width = '36px';
  themeBtn.style.height = '36px';
  themeBtn.style.borderRadius = '8px';
  themeBtn.style.display = 'flex';
  themeBtn.style.alignItems = 'center';
  themeBtn.style.justifyContent = 'center';
  themeBtn.style.transition = 'background-color 0.2s ease, transform 0.1s ease';
  
  const closeBtn = document.createElement('button');
  closeBtn.id = 'close-better-ui';
  closeBtn.textContent = '×';
  closeBtn.style.backgroundColor = currentTheme.btnBg;
  closeBtn.style.border = 'none';
  closeBtn.style.color = currentTheme.text;
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontSize = '24px';
  closeBtn.style.width = '36px';
  closeBtn.style.height = '36px';
  closeBtn.style.borderRadius = '8px';
  closeBtn.style.display = 'flex';
  closeBtn.style.alignItems = 'center';
  closeBtn.style.justifyContent = 'center';
  closeBtn.style.transition = 'background-color 0.2s ease, transform 0.1s ease';
  closeBtn.style.opacity = '0.8';
  
  const textarea = document.createElement('textarea');
  textarea.id = 'better-ui-textarea';
  textarea.placeholder = 'Start typing...';
  textarea.style.flexGrow = '1';
  textarea.style.width = '100%';
  textarea.style.backgroundColor = currentTheme.bg;
  textarea.style.color = currentTheme.text;
  textarea.style.border = 'none';
  textarea.style.padding = '0';
  textarea.style.fontSize = '22px';
  textarea.style.lineHeight = '1.6';
  textarea.style.outline = 'none';
  textarea.style.resize = 'none';
  textarea.style.fontFamily = fonts[currentFontIndex].family;
  textarea.style.transition = 'background-color 0.4s ease, color 0.4s ease, font-family 0.2s ease';
  
  // Hover effects for font button
  fontBtn.addEventListener('mouseenter', function() {
    fontBtn.style.backgroundColor = currentTheme.btnHover;
    fontBtn.style.transform = 'scale(1.05)';
  });
  
  fontBtn.addEventListener('mouseleave', function() {
    fontBtn.style.backgroundColor = currentTheme.btnBg;
    fontBtn.style.transform = 'scale(1)';
  });
  
  // Hover effects for theme button
  themeBtn.addEventListener('mouseenter', function() {
    themeBtn.style.backgroundColor = currentTheme.btnHover;
    themeBtn.style.transform = 'scale(1.05)';
  });
  
  themeBtn.addEventListener('mouseleave', function() {
    themeBtn.style.backgroundColor = currentTheme.btnBg;
    themeBtn.style.transform = 'scale(1)';
  });
  
  // Hover effects for close button
  closeBtn.addEventListener('mouseenter', function() {
    closeBtn.style.backgroundColor = currentTheme.btnHover;
    closeBtn.style.transform = 'scale(1.05)';
    closeBtn.style.opacity = '1';
  });
  
  closeBtn.addEventListener('mouseleave', function() {
    closeBtn.style.backgroundColor = currentTheme.btnBg;
    closeBtn.style.transform = 'scale(1)';
    closeBtn.style.opacity = '0.8';
  });
  
  header.appendChild(fontBtn);
  header.appendChild(themeBtn);
  header.appendChild(closeBtn);
  modal.appendChild(header);
  modal.appendChild(textarea);
  wrapper.appendChild(modal);
  document.body.appendChild(wrapper);
  
  textarea.focus();
  
  // Font toggle functionality
  fontBtn.addEventListener('click', function() {
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    const currentFont = fonts[currentFontIndex];
    textarea.style.fontFamily = currentFont.family;
    fontBtn.style.fontFamily = currentFont.family;
    fontBtn.textContent = currentFont.label;
  });
  
  // Theme toggle functionality
  themeBtn.addEventListener('click', function() {
    isDark = !isDark;
    currentTheme = isDark ? themes.dark : themes.light;
    
    wrapper.style.backgroundColor = currentTheme.overlay;
    modal.style.backgroundColor = currentTheme.bg;
    textarea.style.backgroundColor = currentTheme.bg;
    textarea.style.color = currentTheme.text;
    fontBtn.style.color = currentTheme.text;
    fontBtn.style.backgroundColor = currentTheme.btnBg;
    themeBtn.style.color = currentTheme.text;
    themeBtn.style.backgroundColor = currentTheme.btnBg;
    themeBtn.textContent = currentTheme.icon;
    closeBtn.style.color = currentTheme.text;
    closeBtn.style.backgroundColor = currentTheme.btnBg;
  });
  
  // Close functionality
  closeBtn.addEventListener('click', function() {
    wrapper.remove();
  });
  
  // Escape key handler
  const escapeHandler = function(e) {
    if (e.key === 'Escape') {
      wrapper.remove();
      document.removeEventListener('keydown', escapeHandler);
    }
  };
  
  document.addEventListener('keydown', escapeHandler);
})();
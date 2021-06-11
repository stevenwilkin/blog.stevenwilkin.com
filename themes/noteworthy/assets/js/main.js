window.onload = function() {
  document
    .querySelectorAll('a.social-icon[title="Email"]')
    .forEach((link) => {
        link.href = 'mailto:steve@stevenwilkin.com';
    });
};

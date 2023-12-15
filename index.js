function shareOnFacebook() {
    // Facebook share URL
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
  }

  function shareOnInstagram() {
    // Instagram share URL
    window.open('https://www.instagram.com/');
  }

  function shareOnWhatsApp() {
    // WhatsApp share URL
    window.open('https://wa.me/?text=' + encodeURIComponent(window.location.href));
  }

  function shareOnViber() {
    // Viber share URL
    window.open('viber://forward?text=' + encodeURIComponent(window.location.href));
  }
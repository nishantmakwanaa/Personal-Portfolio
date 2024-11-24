const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Follow Me On Social Media :</p>
      <div className="footer__social">
        <a
          href="https://github.com/nishantmakwanaa"
          className="footer__icon"
          aria-label="GitHub"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.instagram.com/nishantmakwanaa/"
          className="footer__icon"
          aria-label="Instagram"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nishantmakwanaa/"
          className="footer__icon"
          aria-label="LinkedIn"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://www.snapchat.com/add/nishantworldwid"
          className="footer__icon"
          aria-label="SnapChat"
        >
          <i className="bx bxl-snapchat"></i>
        </a>
        <a
          href="https://twitter.com/nishantmakwanaa/"
          className="footer__icon"
          aria-label="X (Twitter)"
        >
          <i className="bx bxl-twitter"></i>
        </a>
        <a
          href="https://www.youtube.com/@nishantmakwanaa"
          className="footer__icon"
          aria-label="YouTube"
        >
          <i className="bx bxl-youtube"></i>
        </a>
      </div>
      <p className="footer__copy">
        &#169; Nishant Makwana, 2024 All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

import "../Style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 madhuTech pvt.lmt. All Rights Reserved.</p>

      <div className="footer-links">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn<br></br>
          <strong>Ph:9392567285</strong><br></br>
          <strong>email:madhutech@gmail.com</strong>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
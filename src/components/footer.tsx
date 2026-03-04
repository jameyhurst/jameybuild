export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-left">
            <h3>Let&apos;s connect</h3>
            <p>jamey@jamey.build</p>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="https://github.com/jameyhurst" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/jameyhurst/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <p className="copyright">
              &copy; {new Date().getFullYear()} Jamey Hurst. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.footerBasic}>
      <footer>
        <p className={styles.copyright}>
          Omeo Search Bar © 2023 | Tictactrip frontend assessment |{' '}
          <a
            href="https://github.com/jesuisstan/OmeoSearchBar"
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            @github
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;

import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div
      className={styles._20286}
      style={{
        background:
          "url('https://www.omio.com/gcs-proxy/static_content_repo/web/content/rest/hero/front_page-dw.jpg') no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center 39%',
        height: '351px'
      }}
    >
      <div className={styles.header}>
        <h2 className={styles._e757d}>Travel that moves you</h2>
        <h1 className={styles._f0efd}>
          Book train, bus, flight and ferry tickets
        </h1>
      </div>
    </div>
  );
};

export default Header;

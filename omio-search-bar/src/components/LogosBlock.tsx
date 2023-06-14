import styles from '../styles/LogosBlock.module.css';

const LogosBlock = () => {
  return (
    <div className={styles.basicCard}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 className={styles.allYour}>All your travel options in one place</h2>
        <h1 className={styles.moreThan}>
          More than 1,000 trusted travel partners across trains, buses, flights,
          ferries, and airport transfers, so that you can focus on the journey.
        </h1>
      </div>
      <img
        className={styles.picture}
        src="https://www.omio.com/gcs-proxy/static_content_repo/web/content/rest/hp-providers-logos/dw/com.png?v=5"
      />
    </div>
  );
};

export default LogosBlock;

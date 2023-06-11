import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import * as color from '../styles/colors';
import * as MUI from '../styles/MUIstyles';
import styles from '../styles/SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.basicCard}>
      <div className={styles.lobbyCard}>
        <Box sx={MUI.boxStyle}>
          <Typography
            textColor={color.OMEO_ORANGE}
            level="body3"
            textTransform="uppercase"
            fontWeight="lg"
          >
            Solo
          </Typography>

          <Typography>Practise with artificial intelligence</Typography>
        </Box>

        <Box sx={MUI.boxStyle}>
          <Typography
            textColor={color.OMEO_ORANGE}
            level="body3"
            textTransform="uppercase"
            fontWeight="lg"
          >
            Random online game
          </Typography>

          <Typography>
            Play classic Ping-Pong with random online player
          </Typography>
        </Box>

        <Box sx={MUI.boxStyle}>
          <Typography
            textColor={color.OMEO_ORANGE}
            level="body3"
            textTransform="uppercase"
            fontWeight="lg"
          >
            Custom online game
          </Typography>

          <Typography>
            Invite any player to join your customised game
          </Typography>
        </Box>

        <Box sx={MUI.boxStyle}>
          <Typography
            textColor={color.OMEO_ORANGE}
            level="body3"
            textTransform="uppercase"
            fontWeight="lg"
          >
            Player Vault
          </Typography>

          <Typography>Check your results and achievements</Typography>
        </Box>
      </div>
    </div>
  );
};

export default SearchBar;

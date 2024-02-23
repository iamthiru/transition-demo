import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './Styles';

const ReportPage = () => {
  const classes = useStyles();
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const openChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.chatbox}>
        <Box
          className={`${classes.icoon} ${
            isChatboxOpen ? classes.transimageOpen : ''
          }`}
        >
          <img
            className={`${classes.image}`}
            src="https://via.placeholder.com/150.png"
            alt="Image"
            onClick={openChatbox}
          />
        </Box>
        <Typography variant="h6">Chatbox</Typography>
      </Box>
    </Box>
  );
};

export default ReportPage;

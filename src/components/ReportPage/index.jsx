import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './Styles';
import FormContainer from './FormContainer';
import ProgressBar from './ProgressBar';

const ReportPage = () => {
  const classes = useStyles();
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const openChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.chatbox}>
        <ProgressBar />
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
        <FormContainer />
      </Box>
    </Box>
  );
};

export default ReportPage;

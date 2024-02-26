/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Box, Container } from "@mui/material";
import FormContainer from "./FormContainer";
import ProgressBar from "./ProgressBar";
import {
  MainContainer,
  StyledChatBox,
  StyledChatBoxContainer,
  StyledIconBox,
  StyledImage,
} from "./StylesMain";

const ReportPage = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [progressValue, setProgressValue] = useState(40);

  const openChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <MainContainer>
      <StyledIconBox
        style={{
          top: isChatboxOpen ? "5%" : "50%",
        }}
        minHeight={isChatboxOpen ? "9%" : ""}
      >
        <StyledImage
          src="https://via.placeholder.com/150.png"
          alt="Image"
          onClick={openChatbox}
        />
      </StyledIconBox>
      <StyledChatBox style={{ opacity: isChatboxOpen ? 1 : 0 }}>
        {isChatboxOpen && (
          <>
            <ProgressBar progressValue={progressValue} />

            <StyledChatBoxContainer>
              <Container disableGutters>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  veritatis commodi quos rem officiis reprehenderit facere rerum
                  enim esse sint? Ducimus nisi animi optio nemo tenetur et
                  dolore voluptatem incidunt.
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  veritatis commodi quos rem officiis reprehenderit facere rerum
                  enim esse sint? Ducimus nisi animi optio nemo tenetur et
                  dolore voluptatem incidunt.
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  veritatis commodi quos rem officiis reprehenderit facere rerum
                  enim esse sint? Ducimus nisi animi optio nemo tenetur et
                  dolore voluptatem incidunt.
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  veritatis commodi quos rem officiis reprehenderit facere rerum
                  enim esse sint? Ducimus nisi animi optio nemo tenetur et
                  dolore voluptatem incidunt.
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  veritatis commodi quos rem officiis reprehenderit facere rerum
                  enim esse sint? Ducimus nisi animi optio nemo tenetur et
                  dolore voluptatem incidunt.
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  veritatis commodi quos rem officiis reprehenderit facere rerum
                  enim esse sint? Ducimus nisi animi optio nemo tenetur et
                  dolore voluptatem incidunt.
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  veritatis commodi quos rem officiis reprehenderit facere rerum
                  enim esse sint? Ducimus nisi animi optio nemo tenetur et
                  dolore voluptatem incidunt.
                </Box>
                <Box>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  veritatis commodi quos rem officiis reprehenderit facere rerum
                  enim esse sint? Ducimus nisi animi optio nemo tenetur et
                  dolore voluptatem incidunt.
                </Box>
              </Container>
            </StyledChatBoxContainer>

            <FormContainer />
          </>
        )}
      </StyledChatBox>
    </MainContainer>
  );
};

export default ReportPage;

import { useState } from "react";
import { Box, Container } from "@mui/material";
import { ChatBox, ChatItems, Icon, Image, Wrapper } from "./Styles";
import FormContainer from "./FormContainer";
import ProgressBar from "./ProgressBar";

const ReportPage = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [progressValue, setProgressValue] = useState(40);

  const openChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <Wrapper>
      <Icon style={{ top: isChatboxOpen ? "10%" : "50%" }}>
        <Image
          src="https://via.placeholder.com/150.png"
          alt="Image"
          onClick={openChatbox}
        />
      </Icon>
      <ChatBox style={{ opacity: isChatboxOpen ? 2 : 0 }}>
        {isChatboxOpen && (
          <>
            <ProgressBar progressValue={progressValue} />

            <ChatItems>
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
            </ChatItems>

            <FormContainer />
          </>
        )}
      </ChatBox>
    </Wrapper>
  );
};

export default ReportPage;

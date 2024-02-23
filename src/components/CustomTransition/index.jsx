/* eslint-disable no-unused-vars */
import { Button, IconButton, TextField } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import "./styles.css";
import { useEffect, useState } from "react";
const CustomTransition = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [renderedItem, setRenderedItem] = useState(<></>);
  const [renderedFormItems, setRenderedFormItem] = useState(<></>);
  const [customStyles, setCustomStyles] = useState('')

  useEffect(() => {
    let timer;
    if (isButtonClicked) {
      timer = setTimeout(() => {
        setRenderedItem(renderModal());
        setRenderedFormItem(renderForm());
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isButtonClicked]);

  useEffect(() => {
    let timer;
    if (isButtonClicked) {
      timer = setTimeout(() => {
        setCustomStyles("buttonClicked")
      }, 500)
    } else {
      setCustomStyles("")
    }
  }, [isButtonClicked])

  const handleButtonClicked = () => {
    if (isButtonClicked) {
      setRenderedItem(<></>);
      setRenderedFormItem(<></>);
    }
    setIsButtonClicked((prevState) => !prevState);
  };

  const renderModal = () => {
    return (
      <div
        className="modalContainer"
        style={{ display: isButtonClicked ? "flex" : "none" }}
      >
        <div className="closeContainer">
          <IconButton
            aria-label="close"
            onClick={() => isButtonClicked && handleButtonClicked()}
          >
            <CloseFullscreenIcon />
          </IconButton>
        </div>
        <div className="customModal">
          <div className="text">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.`}
          </div>
          <div className="action">
            <Button variant="contained">Take ACtion</Button>
          </div>
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div className="formContainer">
        <TextField id="outlined-basic" variant="outlined" />
        <Button variant="contained" size="medium">
          Send
        </Button>
      </div>
    );
  };

  return (
    <div className="wrapper">
      <div className={`container ${isButtonClicked ? "containerClicked" : ""}`}>
        {isButtonClicked ? renderedItem : <></>}
        <div id="btnId" className={`btnWrapper`}>
          <div
            onClick={() => !isButtonClicked && handleButtonClicked()}
            className={`btn ${customStyles}`}
          >
            K
          </div>
          {isButtonClicked ? renderedFormItems : <></>}
        </div>
      </div>
    </div>
  );
};

export default CustomTransition;

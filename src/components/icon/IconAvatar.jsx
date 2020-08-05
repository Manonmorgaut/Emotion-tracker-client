import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function IconAvatar({ clbk, avatar = "" }) {
  const fileInput = React.createRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <React.Fragment>
      {avatar && <img src={avatar} alt="user avatar" />}
      <input ref={fileInput} type="file" onChange={clbk} />
      <FontAwesomeIcon onClick={handleClick} icon={faCog} />
    </React.Fragment>
  );
}

export default IconAvatar;

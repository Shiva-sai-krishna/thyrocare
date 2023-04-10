import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Popup = ({ info }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id="button-tooltip"><p>{info}</p></Tooltip>}
    >
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <FontAwesomeIcon
          icon={faInfoCircle}
          size="lg"
          color="white"
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
      </div>
    </OverlayTrigger>
  );
};

export default Popup;
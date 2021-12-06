import React from "react";
import PropTypes from "prop-types";

const Tabitem = (props) => {
  return (
    <>
      {props.childern};
    </>
  );
};
Tabitem.propTypes = {
  name: PropTypes.string
};

export default Tabitem;
import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";


const ButtonGoogle = ({ text, onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-4 mb-5 font-semibold border dark:text-white dark:border-darkStroke gap-x-3 border-strock rounded-xl text-text2"
      onClick={onClick}
    >
      <img src="./google.png" alt="google" className="w-[32px] h-[32px]"></img>
      <span>{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
    text: PropTypes.string,
    onClick:PropTypes.func
  }
  

export default withErrorBoundary(ButtonGoogle,{FallbackComponent:ErrorComponent});

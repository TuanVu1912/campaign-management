import PropTypes from "prop-types";
import React from "react";
import { withErrorBoundary } from "react-error-boundary"; //thông báo lỗi chỉ khi component lỗi mà không ảnh hưởng tới component khác
import { Link } from "react-router-dom";
import ErrorComponent from "components/common/ErrorComponent";

const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;

  return (
    <div className="relative w-full min-h-screen p-10 pt-0 bg-lite dark:bg-darkbg isolate">
      <img
        src="/bg.jpg"
        alt="bg"
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16 ">
        <img
          src="./logo_single.svg"
          alt="crowfungding-app"
          className="h-[62px] w-[62px]"
        ></img>
      </Link>
      <div className="w-[556px] rounded-xl bg-white dark:bg-darkSecondary px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center dark:text-white lg:text-xl lg:mb-3 text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});

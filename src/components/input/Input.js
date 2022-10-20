import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import classNames from "utils/classNames";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    children,
    error = "",
    placeholder = "",
    ...rest
  } = props;

  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <div className="relative">
      <input
        id="name"
        type={type}
        className={classNames(
          "w-full px-6 py-4 text-sm font-medium dark:text-white dark:placeholder:text-text2 dark:bg-transparent border rounded-xl border-strock  placeholder:text-text4",
          error
            ? "border-error text-error"
            : "border-strock text-text1 dark:border-darkStroke",
          children ? "pr-16" : ""
        )}
        placeholder={`${error.length <= 0 ? placeholder : ""}`}
        {...rest}
        {...field}
      ></input>

      {error.length > 0 && (
        <span className="ml-2 text-sm font-medium text-error">{error}</span>
      )}
      {children && (
        <div className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
        </div>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  control: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default withErrorBoundary(Input, { FallbackComponent: ErrorComponent });

import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const {
    control,
    name,
    children,
    placeholder = "",
    ...rest
  } = props;

  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea className="w-full px-6 py-4 text-sm font-medium dark:text-white dark:placeholder:text-text2 dark:bg-transparent border rounded-xl border-strock resize-none min-h-[140px] outline-none placeholder:text-text4" placeholder={placeholder}{...field}{...rest}></textarea>
  );
};

export default Textarea;

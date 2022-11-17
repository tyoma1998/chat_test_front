import React from "react";
import cn from "classnames";
import st from "./Text.module.scss";

function Text({
  className,
  inherit,
  variant,
  bold,
  color,
  truncated,
  children,
  currentRef,
  uppercase,
  ...props
}) {
  return (
    <span
      {...props}
      ref={currentRef}
      className={cn(st.text, className, {
        [st.normal]: variant === "normal",
        [st.normal2]: variant === "normal2",
        [st.normal3]: variant === "normal3",
        [st.upper1]: variant === "upper1",
        [st.semibold]: bold,
        [st.colorInherit]: inherit,
        [st.truncated]: truncated,
        [st.isUpper]: uppercase,
      })}
      style={{
        color,
      }}
    >
      {children}
    </span>
  );
}

export default Text;

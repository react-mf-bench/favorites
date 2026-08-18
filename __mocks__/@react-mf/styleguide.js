import React from "react";

export function Button(props) {
  const { children, loading, disabled, ...rest } = props;
  return (
    <button disabled={disabled || loading} {...rest}>
      {loading ? "Loading..." : children}
    </button>
  );
}

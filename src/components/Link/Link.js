import * as React from "react";
import { Link as GatsbyLink } from "gatsby";

function isValidUrl(url) {
  try {
    new URL(url); // throws on invalid url
  } catch {
    return false;
  }

  return true;
}

export default function Link({
  children,
  to,
  activeClassName,
  partiallyActive = to !== "/",
  target = "_blank",
  rel = "noopener noreferrer",
  ...params
}) {
  // if to is defined or href is relative path then use GatsbyLink
  const internal = to || (!isValidUrl(params.href) && params.href);

  if (internal) {
    return (
      <GatsbyLink to={internal} activeClassName={activeClassName} partiallyActive={partiallyActive} {...params}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a {...params} target={target} rel={rel}>
      {children}
    </a>
  );
}

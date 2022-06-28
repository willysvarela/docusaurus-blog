import React from "react";
import Link from "@docusaurus/Link";
import PropTypes from "prop-types";

function Button({ children, href, className, ...props }) {
  return (
    <Link
      href={href}
      className={`px-5 py-3 rounded-lg bg-purple-900 no-underline hover:no-underline hover:bg-purple-700 text-white hover:text-white ppπ ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export default Button;

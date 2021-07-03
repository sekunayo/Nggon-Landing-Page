import React from "react";
import { ReactComponent as ErrorLogo } from "../../assets/svgs/404.svg";
export default function ErrorPage() {
  return (
    <div className="error">
      <ErrorLogo />
    </div>
  );
}

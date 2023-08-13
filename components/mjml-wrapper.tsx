import React from "react";
import { render } from "mjml-react";

interface MJMLWrapperProps {
  mjml: JSX.Element;
}

export const MJMLWrapper = ({ mjml }: MJMLWrapperProps) => {
  const { html } = render(mjml);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

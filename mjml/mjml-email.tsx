import React from "react";

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlText,
  MjmlButton,
  MjmlStyle,
} from "mjml-react";

export const MjmlEmail = () => {
  return (
    <Mjml>
      {/* I don't think you should use MjmlHead alongside React-email Head */}
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
        <MjmlStyle>{`
        .blue-column {
          background-color: blue;
        }
      `}</MjmlStyle>
        <MjmlStyle inline>{`
        .red-column {
          background-color: red;
        }
      `}</MjmlStyle>
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlColumn>
            <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlButton
              padding="20px"
              backgroundColor="#346DB7"
              href="https://www.wix.com/"
            >
              I like it!
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn cssClass="blue-column">
            <MjmlText>I am blue</MjmlText>
          </MjmlColumn>
          <MjmlColumn cssClass="red-column">
            <MjmlText>I am red</MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

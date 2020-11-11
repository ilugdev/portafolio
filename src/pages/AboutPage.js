import React from "react";

import About from "components/About";

export default function AboutPage() {
  return (
    <About>
      <About.Title>Hi I'm Ilug</About.Title>
      <About.Paragraph>
        I'm Front-end developer with 3 years experience. And I love React.
      </About.Paragraph>
      <About.Wrapper>
        <About.Paragraph>
          You can check out some of my work in my
        </About.Paragraph>
        <About.Github />
      </About.Wrapper>
    </About>
  );
}

import React from "react";

import About from "components/About";

export default function AboutPage() {
  return (
    <About>
      <About.Title>About me</About.Title>
      <About.Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quibusdam
        sapiente, pariatur, dolor voluptates cum mollitia aliquid error
        consequatur deleniti eius? Quo laboriosam autem qui ipsum ut
        reprehenderit animi fuga.
      </About.Paragraph>
      <About.Separator />
      <About.Title>Experience</About.Title>
      <About.ExpirienceList>
        {[0, 1, 2, 3].map((key) => (
          <About.Expirience key={key}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </About.Expirience>
        ))}
      </About.ExpirienceList>
    </About>
  );
}

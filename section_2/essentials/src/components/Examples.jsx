import { useState } from "react";

import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [content, setContent] = useState();

  const selectHandler = (selectedButton) => {
    setContent(selectedButton);
  };

  const tabContent = !content ? (
    <p>Please select a topic.</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[content].title}</h3>
      <p>{EXAMPLES[content].description}</p>
      <pre>
        <code>{EXAMPLES[content].code}</code>
      </pre>
    </div>
  );

  const tabButtons = Object.keys(EXAMPLES).map((id) => (
    <TabButton
      key={id}
      isSelected={content === id}
      onClick={() => selectHandler(id)}
    >
      {EXAMPLES[id].title}
    </TabButton>
  ));

  return (
    <Section id="examples" title="Examples">
      <Tabs buttons={tabButtons}>{tabContent}</Tabs>
    </Section>
  );
};

export default Examples;

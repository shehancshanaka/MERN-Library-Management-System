import React, { useState } from "react";
import Spinner from "../components/Spinner";
import { Content, Tab, TabContend, Tabs } from "../components/Tabs";

export const Dashboard = () => {
  const [active, setActive] = useState(0);

  const handleClick = (event) => {
    const index = parseInt(event.abc.id, 0);

    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <>
      <Tabs>
        <Tab id={0} onclick={handleClick} active={active === 0}>
          content1
        </Tab>

        <Tab id={1} onclick={handleClick} active={active === 1}>
          Content2
        </Tab>
        <TabContend>
          <Content active={active === 0}>
            <h1> content1</h1>
          </Content>
          <Content active={active === 1}>
            <h1> content2 </h1>
          </Content>
        </TabContend>
      </Tabs>
    </>
  );
};

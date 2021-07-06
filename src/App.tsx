import { hot } from "react-hot-loader/root";
import React from "react";
import { Reset } from "styled-reset";
import { Element } from "@components/Element";

const App = hot(() => {
  return (
    <>
      <Reset />
      <Element label="Parent">
        <Element label="Child">
          <Element label="SubChild" />
          <Element label="SubChild" />
        </Element>
        <Element label="Child" />
      </Element>
    </>
  );
});

export { App };

import { hot } from "react-hot-loader/root";
import React, { StrictMode } from "react";
import { Reset } from "styled-reset";

const App = hot(() => {
  return (
    <StrictMode>
      <Reset />
      <div>toto</div>
    </StrictMode>
  );
});

export { App };

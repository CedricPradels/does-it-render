import { hot } from "react-hot-loader/root";
import React, { StrictMode, useState } from "react";
import { Reset } from "styled-reset";

const App = hot(() => {
  return (
    <StrictMode>
      <Reset />
    </StrictMode>
  );
});

export { App };

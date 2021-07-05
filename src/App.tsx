import { hot } from "react-hot-loader/root";
import React, { StrictMode, useState } from "react";
import { Reset } from "styled-reset";
import { useRenderCount } from "@hooks/useRenderCount";

const App = hot(() => {
  return (
    <StrictMode>
      <Reset />
    </StrictMode>
  );
});

export { App };

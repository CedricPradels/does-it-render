import React from "react";
import { useRenderCount } from "@hooks/useRenderCount";
import { useRerender } from "@hooks/useRerender";

import { ChildrenWrapper, Container, Label, RenderCount } from "./styles";
import { ElementProps } from "./types";

const Element = (props: ElementProps) => {
  const { children, label } = props;
  const renderCount = useRenderCount();
  const rerender = useRerender();
  console.log("in Comp", renderCount);

  return (
    <Container>
      <Label onClick={rerender}>
        <RenderCount>{renderCount}</RenderCount>
        {label}
      </Label>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};

export { Element };

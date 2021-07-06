import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
`;

const Label = styled.div`
  padding: 5px;
  display: flex;
  align-items: baseline;
  background-color: silver;
  margin: 5px;
  cursor: pointer;
`;

const RenderCount = styled.div`
  padding: 5px;
  background-color: black;
  margin-right: 5px;
  color: white;
`;

const ChildrenWrapper = styled.div`
  display: flex;
`;

export { Container, Label, ChildrenWrapper, RenderCount };

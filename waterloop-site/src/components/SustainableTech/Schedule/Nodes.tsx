import React from 'react';
import styled from 'styled-components';

const nodeHeight = 52;
const nodeBorderWidth = 4;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Node = styled.div`
  display: flex;
  height: ${nodeHeight}px;
  width: ${nodeHeight}px;
  border-radius: 50%;
  background-color: #a3c7e1;
  border: ${nodeBorderWidth}px solid #203d7a;
`;

const Edge = styled.div<{ height: number; sectionBottomMargin: number }>`
  border-left: 6px dotted #6e9dbe;
  height: ${(props) =>
    props.height +
    props.sectionBottomMargin -
    (nodeHeight + nodeBorderWidth * 2) / 2}px;
`;

const Nodes: React.FC<{
  sectionHeights: number[];
  sectionBottomMargin: number;
}> = ({ sectionHeights, sectionBottomMargin }) => (
  <Container>
    {sectionHeights.map((height) => (
      <>
        <Node />
        <Edge height={height} sectionBottomMargin={sectionBottomMargin} />
      </>
    ))}
  </Container>
);

export default Nodes;

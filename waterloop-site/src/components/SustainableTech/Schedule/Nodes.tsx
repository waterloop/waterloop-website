import React from 'react';
import styled from 'styled-components';

const nodeHeight = 52;
const nodeBorderWidth = 4;
const edgeBorderWidth = 3;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Node = styled.div`
  height: ${nodeHeight}px;
  width: ${nodeHeight}px;
  border-radius: 50%;
  background-color: #ffffff;
  border: ${nodeBorderWidth}px solid #80a773;
`;

const Edge = styled.div<{
  height: number;
  sectionBottomMargin: number;
  last: boolean;
}>`
  border-width: ${edgeBorderWidth}px;
  border-style: solid;
  border-image: ${(props) =>
    props.last ? 'linear-gradient(to bottom, #80a773, #e7f1e4) 1 100%' : ''};
  border-color: ${(props) => (props.last ? '' : '#80a773')};
  height: ${(props) =>
    props.height +
    props.sectionBottomMargin -
    (nodeHeight + nodeBorderWidth * 2) -
    edgeBorderWidth * 2}px;
`;

const Nodes: React.FC<{
  sectionHeights: number[];
  sectionBottomMargin: number;
}> = ({ sectionHeights, sectionBottomMargin }) => (
  <Container>
    {sectionHeights.map((height, idx) => (
      <React.Fragment key={`ste-node-edge-${idx}`}>
        <Node />
        <Edge
          height={height}
          sectionBottomMargin={sectionBottomMargin}
          last={idx === sectionHeights.length - 1}
        />
      </React.Fragment>
    ))}
  </Container>
);

export default Nodes;

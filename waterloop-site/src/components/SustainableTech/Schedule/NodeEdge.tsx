import React from 'react';
import styled from 'styled-components';

const nodeHeight = 52;
const nodeBorderWidth = 4;
const edgeBorderWidth = 3;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  @media screen and (max-width: 768px) {
    margin-right: 20px;
  }
`;

const Node = styled.div`
  height: ${nodeHeight}px;
  width: ${nodeHeight}px;
  border-radius: 50%;
  background-color: #ffffff;
  border: ${nodeBorderWidth}px solid #80a773;
`;

const Edge = styled.div<{
  isLast: boolean;
}>`
  border-width: ${edgeBorderWidth}px;
  border-style: solid;
  border-image: ${(props) =>
    props.isLast ? 'linear-gradient(to bottom, #80a773, #e7f1e4) 1 100%' : ''};
  border-color: ${(props) => (props.isLast ? '' : '#80a773')};
  height: calc(100% - ${nodeHeight + 2 * nodeBorderWidth}px);
`;

const NodeEdge: React.FC<{
  isLast: boolean;
}> = ({ isLast }) => (
  <Container>
    <Node />
    <Edge isLast={isLast} />
  </Container>
);

export default NodeEdge;

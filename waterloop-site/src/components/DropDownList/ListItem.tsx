import React, { FC } from 'react';
import styled from 'styled-components';

interface ListItemProps {
  className?: string;
  text: string;
  onClick: (value: string) => void;
}

const Container = styled.li`
  list-style: none;
  border-top: 0.75px solid rgba(214, 220, 227, 0.5);
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;

  cursor: pointer;
`;

const Text = styled.div`
  font: 14px IBM Plex Sans;
  color: #000;
`;

const ListItem: FC<ListItemProps> = ({ className, text, onClick }) => (
  <Container className={className} onClick={() => onClick(text)}>
    <Text>{text}</Text>
  </Container>
);

export default ListItem;

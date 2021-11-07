import React from 'react';
import styled from 'styled-components';
import RemoveSvg from './assets/remove.svg';

const RemoveIcon = styled.img.attrs({
  src: RemoveSvg,
})`
  cursor: pointer;
`;

const AddNewText = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.medium12};
  color: ${({ theme }) => theme.colours.blacks.black2};
`;

const Container = styled.li`
  list-style: none;
  border-top: ${({ theme }) => theme.borders.solidGrey2};
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`;

const Text = styled.div`
  font: ${({ theme }) => theme.fonts.medium14};
`;

const ListItem = ({
  className,
  onAddNew = undefined,
  addNew = false,
  text,
  onRemove,
}) => (addNew ? (
  <Container className={className} >
    <AddNewText onClick={onAddNew}>+ Add New</AddNewText>
  </Container>
) : (
  <Container className={className}>
    <Text>{text}</Text>
    <RemoveIcon onClick={onRemove}/>
  </Container>
));

export default ListItem;

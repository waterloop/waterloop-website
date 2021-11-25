import React, { useMemo, useState, useCallback, FC } from 'react';
import styled, { css } from 'styled-components';

import ListOpenSvg from './assets/list-open.svg';
import ListClosedSvg from './assets/list-closed.svg';
import UnstyledListItem from './ListItem';

interface DropDownListProps {
  className?: string;
  items: string[];
  title: string;
  handleClickItem?: () => void;
}

const ListItem = styled(UnstyledListItem)``;

const ListOpenIcon = styled.img.attrs({
  src: ListOpenSvg,
})``;

const ListClosedIcon = styled.img.attrs({
  src: ListClosedSvg,
})``;

const Container = styled.div`
  overflow: visible;
  z-index: 10;
  ${'' /** Hides the top of the list under the List name container */}
  background-color: #fff;
  width: 443px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

const ListNameContainer = styled.div`
  border-radius: 10px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  cursor: pointer;
`;

const TitleText = styled.div`
  font: 14px IBM Plex Sans;
  color: #00000080;
`;

// Good practice to not pass props like "open" to a root element
const List = styled(({ open, ...props }) => <ul {...props} />)`
  border-radius: 5px;

  margin-top: -20px;
  padding-top: 8px;
  position: relative;
  width: calc(100% - 10px);
  margin-left: 6px;
  padding-inline-start: 0;

  ${
    '' /* Cannot Use Transitions with "height: auto", so this calculates the height of the list based on the number of children */
  }
  ${'' /* ${({ open, children }) => (open ? css` */}
    ${({ open }) =>
    open
      ? css`
          ${
            '' /* height: calc(37px * ${Children.toArray(children).length} ); */
          }
          ${
            '' /* This does not transition, but the above does not work well with text wrapping */
          }
      ${'' /*  TODO: This needs to get relooked at when I have more time */}
      height: max-content;
        `
      : css`
          height: 0px;
        `}
    overflow-y: hidden;

  transition: height 0.15s;
`;

const DropDownList: FC<DropDownListProps> = ({
  className /* Allows for external styles to be applied to the component using
                  the styled components library
                  className prop needs to be passed to the parent JSX element */,
  items /* an Array of items to be displayed in the selector dropdown */,
  title /* Name of the drop down list */,
  handleClickItem,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenToggle = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const ListStateIcon = useMemo(() => (open ? ListOpenIcon : ListClosedIcon), [
    open,
  ]);
  const listItems = items.map((item) => (
    <ListItem text={item} key={item} onClick={handleClickItem} />
  ));

  return (
    <Container>
      <ListNameContainer onClick={handleOpenToggle} className={className}>
        <TitleText>{title}</TitleText>
        <ListStateIcon />
      </ListNameContainer>
      <List open={open}>{listItems}</List>
    </Container>
  );
};

export default DropDownList;

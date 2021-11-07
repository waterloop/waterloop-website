import React, {
  useMemo,
  useState,
  useCallback,
  Children,
} from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ListOpenSvg from './assets/list-open.svg';
import ListClosedSvg from './assets/list-closed.svg';
import UnstyledListItem from './ListItem';

const ListItem = styled(UnstyledListItem)``;

const ListOpenIcon = styled.img.attrs({
  src: ListOpenSvg,
})``;

const ListClosedIcon = styled.img.attrs({
  src: ListClosedSvg,
})``;

const Container = styled.div`
  overflow: visible;
  z-index: 10; ${''/** Hides the top of the list under the List name container */}
  background-color: ${({ theme }) => theme.colours.white};
`;

const ListNameContainer = styled.div`
  border: ${({ theme }) => theme.borders.solidGrey1};
  border-radius: 10px;
  height: 47px;
  background-color: ${({ theme }) => theme.colours.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;

  cursor: pointer;
`;

const TitleText = styled.div`
  font: ${({ theme }) => theme.fonts.medium18};
  color: ${({ theme }) => theme.colours.greys.grey2};
`;

// Good practice to not pass props like "open" to a root element
const List = styled(({ open, ...props }) => <ul {...props}/>)`
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  margin-top: -8px;
  padding-top: 8px;
  position: relative;
  width: calc(100% - 10px);
  margin-left: 6px;
  padding-inline-start: 0;

  ${''/* Cannot Use Transitions with "height: auto", so this calculates the height of the list based on the number of children */}
  ${'' /* ${({ open, children }) => (open ? css` */}
  ${({ open }) => (open ? css`
    ${'' /* height: calc(37px * ${Children.toArray(children).length} ); */}
    ${'' /* This does not transition, but the above does not work well with text wrapping */}
    ${'' /*  TODO: This needs to get relooked at when I have more time */}
    height: max-content;
  ` : css`
    height: 0px;
  `)}
  overflow-y: hidden;

  transition: height 0.15s;
`;

const DropDownList = ({
  className, /* Allows for external styles to be applied to the component using
                the styled components library
                className prop needs to be passed to the parent JSX element */
  onAdd, /*   () => void
              Callback to be called each time that
              the user clicks add */
  onRemove, /* (number id) => void
               Callback to be called each time that
               the user clicks remove on an item */
  items, /* an Array of items to be displayed in the selector dropdown */
  title, /* Name of the drop down list */
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenToggle = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const ListStateIcon = useMemo(() => (open ? ListOpenIcon : ListClosedIcon), [open]);
  const listItems = items.map(
    (item) => (
      <ListItem
        text={item.text}
        key={item.id}
        onRemove={() => onRemove(item.id)}
      />
    ),
  );

  const handleAdd = () => {
    console.log('Add');
    onAdd();
  }

  return (
    <Container>
      <ListNameContainer onClick={handleOpenToggle} className={className}>
        <TitleText>{title}</TitleText><ListStateIcon/>
      </ListNameContainer>
      <List open={open}>
        {listItems}
        <ListItem addNew onAddNew={handleAdd} />
      </List>
    </Container>
  );
};

export default DropDownList;

DropDownList.propTypes = {
  className: PropTypes.string,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
  })),
  title: PropTypes.string,
};

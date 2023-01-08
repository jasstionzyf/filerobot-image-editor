/** External Dependencies */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowLeftOutline from '@scaleflex/icons/arrow-left-outline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

/** Internal Dependencies */
import {
  StyledMainButton,
  StyledButtonWrapper,
  StyledMenuButton,
} from './ButtonWithMenu.styled';

let isFieButtonWithMenuMounted = true;

const ButtonWithMenu = ({
  label,
  onClick,
  title,
  color,
  variant,
  menuFromBtn,
  menuItems,
  arrowColor,
  disabled = false,
  className,
  menuStyle,
  wrapperStyle,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const buttonSize = 'md';
  const open = Boolean(anchorEl);

  const openMenu = (e) => {
    if (isFieButtonWithMenuMounted) {
      e.stopPropagation();
      setAnchorEl(e.currentTarget);
    }
  };

  const closeMenu = () => {
    if (isFieButtonWithMenuMounted) {
      setAnchorEl(null);
    }
  };

  const handleMenuItemClick = (onItemClick) => {
    if (typeof onItemClick === 'function') {
      onItemClick();
    }

    closeMenu();
  };

  const handleButtonClick = (e) => {
    if (menuFromBtn) {
      openMenu(e);
    }

    if (typeof onClick === 'function') {
      onClick();
    }
  };

  useEffect(() => {
    isFieButtonWithMenuMounted = true;

    return () => {
      isFieButtonWithMenuMounted = false;
    };
  }, []);

  const hasMenuItems = menuItems.length > 0;

  return (
    <>
      <StyledButtonWrapper
        className={`${className}-wrapper`}
        onClick={disabled ? undefined : handleButtonClick}
        style={wrapperStyle}
      >
        <StyledMainButton
          className={`${className}-button`}
          variant={variant}
          size={buttonSize}
          title={title}
          // keepBorderRadius={!hasMenuItems}
          disabled={disabled}
        >
          {label}
        </StyledMainButton>
        {hasMenuItems && (
          <StyledMenuButton
            className={`${className}-menu-opener`}
            color={color}
            size={buttonSize}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={menuFromBtn || disabled ? undefined : openMenu}
            disabled={disabled}
          >
            <ArrowLeftOutline color={arrowColor} />
          </StyledMenuButton>
        )}
      </StyledButtonWrapper>
      {hasMenuItems && (
        <Menu
          id="basic-menu"
          className={`${className}-menu`}
          anchorEl={anchorEl}
          onClose={closeMenu}
          open={open}
          style={menuStyle}
        >
          {menuItems.map(
            (item) =>
              item && (
                <MenuItem
                  className={`${className}-menu-item`}
                  key={item.key}
                  active={item.isActive}
                  onClick={() => handleMenuItemClick(item.onClick)}
                  size={buttonSize}
                >
                  {item.icon && (
                    <ListItemIcon size={buttonSize}>
                      {typeof item.icon === 'string' ? (
                        // eslint-disable-next-line react/no-danger
                        <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                      ) : (
                        <item.icon />
                      )}
                    </ListItemIcon>
                  )}
                  <ListItemText>{item.label}</ListItemText>
                </MenuItem>
              ),
          )}
        </Menu>
      )}
    </>
  );
};

ButtonWithMenu.defaultProps = {
  title: '',
  color: 'primary',
  variant: 'contained',
  menuFromBtn: false,
  onClick: undefined,
  disabled: false,
  arrowColor: undefined,
  menuStyle: undefined,
  wrapperStyle: undefined,
};

ButtonWithMenu.propTypes = {
  label: PropTypes.string.isRequired,
  menuItems: PropTypes.instanceOf(Array).isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  menuFromBtn: PropTypes.bool,
  disabled: PropTypes.bool,
  arrowColor: PropTypes.string,
  menuStyle: PropTypes.instanceOf(Object),
  wrapperStyle: PropTypes.instanceOf(Object),
};

export default ButtonWithMenu;

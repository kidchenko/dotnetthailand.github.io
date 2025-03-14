// import Link from "../Link";
import React from 'react';
import styled from '@emotion/styled';
import { Link } from '../';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { onMobile, onTablet } from '../../styles/responsive';

const logoStyle = (theme) => css`
  padding: 0 0;
  display: flex;
  align-items: center;
  ${onMobile} {
    min-height: 40px;
  }
  img {
    height: 40px;
    margin-right: 16px;
    display: inline-block;
    ${onTablet} {
      height: 40px;
    }
    ${onMobile} {
      margin-right: 8px;
      height: 32px;
    }
  }

  span {
    height: auto;
    font-size: 26px;
    line-height: 1.5;
    color: ${theme.header.font.base};
    ${onTablet} {
      font-size: 21px;
    }
    ${onMobile} {
      font-size: 19px;
      flex: initial;
      padding: 0 15px 0 0;
    }
    &:hover {
      text-decoration: none;
      opacity: 0.8;
    }
  }
`;

const LogoWrapper = styled.div`
  margin-left: ${(props) => props.theme.layout.leftMargin};
  ${onMobile} {
    margin-left: 10px;
  }
`;

const Logo = styled(({ className, link, img, title }) => {
  const theme = useTheme();
  return (
    <div className={className}>
      <LogoWrapper>
        <Link to={link} css={logoStyle(theme)}>
          <img css={{display: 'inline-block'}} src={img} alt={'logo'} loading={'lazy'} />
          <span css={{display: 'inline-block'}} dangerouslySetInnerHTML={{ __html: title }} />
        </Link>
      </LogoWrapper>
    </div>
  );
})`
  min-width: ${(props) => props.theme.layout.leftWidth};
  display: flex;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.header.border};
  ${onMobile} {
    border-right: none;
    min-width: auto;
    padding-right: 0;
  }
`;

export default Logo;

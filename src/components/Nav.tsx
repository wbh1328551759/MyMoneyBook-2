import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './icon';


const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  color: #6d707a;
  & > ul{
    display: flex;
    >li{
      width:25%;
      text-align: center;     
      >a{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px 0;
        .icon{
          width: 24px;
          height: 24px;
          fill:#6d707a;
        }
        &.selected{
          color:#0ac774;
          background: #eeeeee;
          .icon{
             fill:#0ac774;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="dataSheet"/>
            详情页
          </NavLink>
        </li>
        <li>
          <NavLink to="/dataSheet" activeClassName="selected">
            <Icon name="chart"/>
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
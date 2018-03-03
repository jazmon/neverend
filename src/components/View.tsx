import * as React from 'react';

import styled , { css, ThemedStyledProps } from 'styled-components';

interface MyTheme {

}

interface ViewProps {
  padding?: 'none' | 'heavy',
  foo?: boolean,
}

const View = styled.div`
  padding: 0.25em;
  ${(props: ViewProps) => props.padding === 'none' ? css`padding: 0;` : ''}
  ${(props: ViewProps) => props.padding === 'heavy' ? css`padding: 0.5em;` : ''}
  ${(props: ViewProps) => props.foo ? css`
    background: red;
    display: flex;
    border: 1px solid blue;
  ` : ''}
`;

export default View;

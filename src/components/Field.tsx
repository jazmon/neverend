import * as React from 'react';
import styled from 'styled-components';
import Label from './Label';
import Input from './Input';

const Field = styled.div`
  ${Label} + ${Input} {
    margin-left: 1em;
  }
`;

export default Field;

// Type definitions for redux-devtools-dispatch 2.2.1
// Project: https://github.com/YoruNoHikage/redux-devtools-dispatch
// Definitions by: Atte Huhtakangas <https://github.com/jazmon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4.2

/// <reference types="react" />
/// <reference types="redux" />

import * as React from 'react';
import { Action } from 'redux';

interface DispatcherProps {
  theme?: string;
  initEmpty?: boolean;
  actionCreators?: Object | Function[];
  dispatchFn?: (action: Action) => void;
}

export default class Dispatcher extends React.Component<DispatcherProps> {}

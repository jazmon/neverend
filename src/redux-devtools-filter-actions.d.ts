// Type definitions for redux-devtools-filter-actions 1.2.2
// Project: https://github.com/zalmoxisus/redux-devtools-filter-actions
// Definitions by: Atte Huhtakangas <https://github.com/jazmon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4.2

/// <reference types="react" />
/// <reference types="redux" />

import * as React from 'react';
import { Action } from 'redux';

interface FilterMonitorProps {
  blackList?: string[];
  whitelist?: string[];
  actionsFilter?: (action: Action, id: number) => Action;
  statesFilter?: <S>(state: S) => S;
}

export default class FilterMonitor extends React.Component<FilterMonitorProps> {}

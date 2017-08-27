// Type definitions for redux-devtools-chart-monitor 1.6.1
// Project: https://github.com/romseguy/redux-devtools-chart-monitor
// Definitions by: Atte Huhtakangas <https://github.com/jazmon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4.2

/// <reference types="react" />

import * as React from 'react';

interface ChartMonitorProps {
  state?: Object;
  rootKeyName?: string;
  pushMethod?: 'push' | 'unshift';
  tree?: { name: string; children: React.ReactChildren };
  id?: string;
  defaultIsVisible?: boolean;
  transitionDuration?: number;
  heightBetweenNodesCoeff?: number;
  widthBetweenNodesCoeff?: number;
  isSorted?: boolean;
  style?: {
    node?: {
      colors?: {
        'default'?: string;
        parent?: string;
        collapsed?: string;
      };
      radius?: number;
    };
    text?: {
      colors?: {
        'default'?: string;
        hover?: string;
      };
    };
    link?: Object;
  };
  size?: number;
  aspectRatio?: number;
  margin?: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };

  onClickText?: (node: Object) => void;
  tooltipOptions?: {
    disabled?: boolean;
    left?: number;
    top?: number;
    offset?: {
      left?: number;
      top?: number;
    };
    indentationStyle?: number;
    style?: Object;
  };
}

export default class ChartMonitor extends React.Component<ChartMonitorProps> {}

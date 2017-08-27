// Type definitions for redux-slider-monitor 2.0.0
// Project: https://github.com/calesce/redux-slider-monitor
// Definitions by: Atte Huhtakangas <https://github.com/jazmon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react" />

import * as React from 'react';

interface SliderMonitorProps {
  keyboardEnabled?: boolean;
}

export default class SliderMonitor extends React.Component<
  SliderMonitorProps
> {}

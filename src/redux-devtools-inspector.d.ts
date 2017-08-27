// Type definitions for redux-devtools-inspector 0.11.3
// Project: https://github.com/alexkuz/redux-devtools-inspector
// Definitions by: Atte Huhtakangas <https://github.com/jazmon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4.2

/// <reference types="react" />

import * as React from 'react';

interface DevToolsTab {
  name: string;
  component: React.Component;
}
interface DiffContext {
  left: DiffContext;
  right: DiffContext;
}

interface DevToolsInspectorProps {
  theme?: string;
  invertTheme?: boolean;
  supportImmutable?: boolean;
  tabs?: ((defaultTabs: DevToolsTab[]) => DevToolsTab[]) | DevToolsTab[];
  diffObjectHash?: (obj: Object, index: number) => string | number;
  diffPropertyFilter?: (name: string, context: DiffContext) => boolean;
}

export default class Inspector extends React.Component<
  DevToolsInspectorProps
> {}

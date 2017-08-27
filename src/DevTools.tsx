import * as React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';
import Inspector from 'redux-devtools-inspector';
import ChartMonitor from 'redux-devtools-chart-monitor';
import FilterMonitor from 'redux-devtools-filter-actions';
import Dispatcher from 'redux-devtools-dispatch';
import MultipleMonitors from 'redux-devtools-multiple-monitors';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m"
    defaultIsVisible={false}
  >
    <MultipleMonitors>
      <LogMonitor theme="tomorrow" />
      <Dispatcher />
    </MultipleMonitors>

    <SliderMonitor keyboardEnabled />
    <Inspector />
    <FilterMonitor blackList={[]}>
      <ChartMonitor />
    </FilterMonitor>
  </DockMonitor>,
);

export default DevTools;
  
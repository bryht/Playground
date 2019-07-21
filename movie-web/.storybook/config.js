import { configure } from '@storybook/react';
import '../src/index';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);

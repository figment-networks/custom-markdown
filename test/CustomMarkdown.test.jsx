import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as CustomMarkdown } from '../stories/CustomMarkdown.stories';

describe('GitbookMarkdownRenderer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CustomMarkdown># This is a test</CustomMarkdown>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

import { render } from '@testing-library/react';

import UiElements from './ui-elements';

describe('UiElements', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiElements />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Sobre from './index';

describe('<Sobre />', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Sobre />);

    expect(asFragment()).toMatchSnapshot();
  });
});

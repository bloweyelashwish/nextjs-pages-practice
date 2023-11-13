import { render } from '~/lib/test-utils';

import Login from '~/pages/login';

describe('Login page tests', () => {
  it('Login page renders', () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});

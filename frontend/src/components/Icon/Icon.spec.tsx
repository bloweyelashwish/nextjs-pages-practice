import { render } from '~/lib/test-utils';

import { Icon } from './Icon';

describe('Icon test cases', () => {
  it('Icon renders in the document', () => {
    const { asFragment } = render(<Icon name="Moon" />);

    expect(asFragment()).toMatchSnapshot();
  });
});

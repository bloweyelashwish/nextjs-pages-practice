import userEvent from '@testing-library/user-event';
import { render, screen } from '~/lib/test-utils';

import { Checkbox } from './Checkbox';

describe('Checkbox test cases', () => {
  it('Checkbox renders', () => {
    const onChange = jest.fn();
    jest.spyOn(Math, 'random').mockReturnValue(0.9999999999);
    const { asFragment } = render(<Checkbox onChange={onChange} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('onChange handler is called', async () => {
    const onChange = jest.fn();
    render(<Checkbox onChange={onChange} />);
    const element = screen.getByText('✓');

    await userEvent.click(element);

    expect(onChange).toHaveBeenCalled();
  });
});

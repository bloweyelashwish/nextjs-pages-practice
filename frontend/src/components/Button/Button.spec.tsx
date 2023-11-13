import { render, screen } from '~/lib/test-utils';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button test cases', () => {
  it('Button renders', () => {
    const clickHandler = jest.fn();
    const { asFragment } = render(
      <Button onClick={clickHandler}>Test button</Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it('onClick handler fires on user click', async () => {
    const clickHandler = jest.fn();
    render(<Button onClick={clickHandler}>Test button</Button>);
    const element = screen.getByRole('button');

    await userEvent.click(element);

    expect(clickHandler).toHaveBeenCalled();
  });
});

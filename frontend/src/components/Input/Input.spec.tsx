import { ChangeEventHandler } from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from '~/lib/test-utils';

import { Input } from './Input';

describe('Input test cases', () => {
  it('Render check', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.9999999999);
    const onChange = jest.fn();
    const { asFragment } = render(
      <Input
        onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
        label="Label"
        placeholder="Plaiceholder"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Render check with icon', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.9999999999);
    const onChange = jest.fn();
    const { asFragment } = render(
      <Input
        onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
        icon="Search"
        label="Label"
        placeholder="Plaiceholder"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Check onChange callback', async () => {
    const onChange = jest.fn();
    render(
      <Input
        onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
        label="Label"
        placeholder="Plaiceholder"
      />
    );
    const element = screen.getByRole('textbox');
    await userEvent.type(element, 'String');
    expect(onChange).toHaveBeenCalledTimes(6);
  });
});

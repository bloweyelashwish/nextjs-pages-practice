import { render } from '~/lib/test-utils';

import { Tile } from './Tile';

describe('Tile test cases', () => {
  it('Tile renders on the page', () => {
    const { asFragment } = render(
      <Tile header="Tile header">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        cumque ad corrupti? Maxime vero dolor quibusdam eius corporis.
        Asperiores, nemo!
      </Tile>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

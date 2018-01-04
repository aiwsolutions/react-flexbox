import React from 'react';
import renderer from 'react-test-renderer';
import {Box} from '../src/index';

test('<Box> - default', () => {
    const comp = renderer.create(
        <Box/>
    );
    expect(comp.toJSON()).toMatchSnapshot();
})

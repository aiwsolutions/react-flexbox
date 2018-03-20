import React from 'react';
import renderer from 'react-test-renderer';
import { Box } from '../src';

test('<Box> - basic settings', () => {
    const comp = renderer.create(
        <Box
            style={{ backgroundColor: '#ff0000' }}
            m={1}
            p={1}
        >
            Title
        </Box>
    );
    expect(comp.toJSON()).toMatchSnapshot();
});

test('<Box> - className should be passed correctly', () => {
    const comp = renderer.create(
        <Box
            className="test"
        />
    );
    expect(comp.toJSON()).toMatchSnapshot();
    expect(comp.root.findByType('div').props.className).toEqual('test');
});

test('<Box> - update on property changes', () => {
    const comp = renderer.create(
        <Box
            align="center"
        />
    );
    const shouldComponentUpdate = comp.getInstance().shouldComponentUpdate.bind(comp.getInstance());
    expect(shouldComponentUpdate({ align: 'flex-start' })).toBeTruthy();
});

test('<Box> - update on layout changes', () => {
    const comp = renderer.create(
        <Box
            m={1}
        />
    );
    const shouldComponentUpdate = comp.getInstance().shouldComponentUpdate.bind(comp.getInstance());
    expect(shouldComponentUpdate({ m: 2 })).toBeTruthy();
});

test('<Box> - should not update if nothing changes', () => {
    const comp = renderer.create(
        <Box
            align="center"
            style={{ backgroundColor: '#fff' }}
            p={1}
        >
            Title
        </Box>
    );
    const shouldComponentUpdate = comp.getInstance().shouldComponentUpdate.bind(comp.getInstance());
    expect(shouldComponentUpdate(comp.getInstance().props)).toBeFalsy();
});

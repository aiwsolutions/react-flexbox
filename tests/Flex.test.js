import React from 'react';
import renderer from 'react-test-renderer';
import { Flex } from '../dist';

test('<Flex> - basic settings', () => {
    const comp = renderer.create(
        <Flex
            style={{ backgroundColor: '#ff0000' }}
            m={1}
            p={1}
            column
        >
            Title
        </Flex>
    );
    expect(comp.toJSON()).toMatchSnapshot();
});

test('<Flex> - className should be passed correctly', () => {
    const comp = renderer.create(
        <Flex
            className="test"
            inline
        />
    );
    expect(comp.toJSON()).toMatchSnapshot();
    expect(comp.root.findByType('div').props.className).toEqual('inline-flex test');
});

test('<Flex> - update on property changes', () => {
    const comp = renderer.create(
        <Flex
            align="center"
        />
    );
    const shouldComponentUpdate = comp.getInstance().shouldComponentUpdate.bind(comp.getInstance());
    expect(shouldComponentUpdate({ align: 'flex-start' })).toBeTruthy();
});

test('<Flex> - update on layout changes', () => {
    const comp = renderer.create(
        <Flex
            m={1}
        />
    );
    const shouldComponentUpdate = comp.getInstance().shouldComponentUpdate.bind(comp.getInstance());
    expect(shouldComponentUpdate({ m: 2 })).toBeTruthy();
});

test('<Flex> - should not update if nothing changes', () => {
    const comp = renderer.create(
        <Flex
            justify="center"
            style={{ backgroundColor: '#fff' }}
            p={1}
        >
            Title
        </Flex>
    );
    const shouldComponentUpdate = comp.getInstance().shouldComponentUpdate.bind(comp.getInstance());
    expect(shouldComponentUpdate(comp.getInstance().props)).toBeFalsy();
});

import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

const defaultProps = {
    item: {
        itemId: 24,
        itemTitle: "asldfj;adlskja",
        type: "asd;lkfja;sdlkjf",
        description: "a;sdlkfj;adf",
        priority: 1,
        version: 1,
        mockUpLink: ";ldsfkja;dslkfj.com",
        orderInLane: 1
   } 
}

/**
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setUp = (props={}) => {
    const setUpProps = {...defaultProps, ...props}
    return shallow(<Item {...setUpProps} />)
}

test('renders item container without error', () => {
    const wrapper = setUp();
    const component = wrapper.find('.itemContainer')
    expect(component.length).toBe(1);
});

test('renders item name and description', () => {
    const wrapper = setUp();
    console.log(wrapper.debug())
    const title = wrapper.find('.itemTitle')
    expect(title.length).toBe(1);
    const description = wrapper.find('.itemDescription')
    expect(description.length).toBe(1);
});
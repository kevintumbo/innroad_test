import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

const defaultProps = { heading: 'InnRoad' };

/**
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setUp = (props={}) => {
    const setUpProps = {...defaultProps, ...props}
    return shallow(<Header {...setUpProps} />)
}

test('renders header bar error', () => {
    const wrapper = setUp();
    const component = wrapper.find('.header')
    expect(component.length).toBe(1);
});
   
test('renders heading text', () => {
    const wrapper = setUp();
    const component = wrapper.find('.header_text')
    expect(component.text()).toContain('InnRoad');
});
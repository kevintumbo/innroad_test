import React from 'react';
import { createStore,  applyMiddleware } from 'redux';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';

import { rootReducer } from '../../store'
import BucketList from './BucketList';

const updateState = {
        bucketlists: [
            {
                bucketId: 1,
                description: "Bucket 1",
                orderInVertical: 1,
                items: [
                    {
                    itemId: 24,
                    itemTitle: "asldfj;adlskja",
                    type: "asd;lkfja;sdlkjf",
                    description: "a;sdlkfj;adf",
                    priority: 1,
                    version: 1,
                    mockUpLink: ";ldsfkja;dslkfj.com",
                    orderInLane: 1
                    },
                ]
            },
            {
                bucketId: 2,
                description: "Bucket 2",
                orderInVertical: 2,
                items: [
                    {
                    itemId: 29,
                    itemTitle: "asd;lfkajsd;lfkj",
                    type: "asd;lfkja;dlkfj",
                    description: "as;dlkfja;dslkj",
                    priority: 2,
                    version: 2,
                    mockUpLink: "as;dlkfja.com",
                    orderInLane: 2
                    },
                ]
            },
        ]
}


const storeFactory = initialState => {
    const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
    return createStoreWithMiddleWare(rootReducer, initialState);
  }


/**
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setUp = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<BucketList store={store} />).dive().dive();
    return wrapper
}

test('renders Bucketlist container without error', () => {
    const wrapper = setUp();
    const component = wrapper.find('.bucketlist_Container')
    expect(component.length).toBe(1);
});

test('renders two seperate lists from props', () => {
    const wrapper = setUp();
    wrapper.setState(updateState);
    const component = wrapper.find('.single_bucketlist')
    expect(component.length).toBe(2);
});

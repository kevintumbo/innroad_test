// ======================
// Constants
// ======================

export const FETCH_BUCKETLISTS = 'FETCH_BUCKETLISTS';
export const FETCH_BUCKETLISTS_SUCCESS = 'FETCH_BUCKETLISTS_SUCCESS';
export const FETCH_BUCKETLISTS_FAILURE = 'FETCH_BUCKETLISTS_FAILURE';

// =====================
// ACTION CREATORS
// =====================

export const fetchBucketList = () => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_BUCKETLISTS,
            message: 'fetching bucketlists',
        });
        const response = await fetch('http://bucketsanditems.azurewebsites.net/api/BucketsItems/getAllBucket');
        const list = await response.json();
        dispatch({
            type: FETCH_BUCKETLISTS_SUCCESS,
            message: 'Successful fetch of bucketlist',
            list

        })
        console.log('response', list);
    }catch (error) {
        console.log('error', error);
        dispatch({
            type: FETCH_BUCKETLISTS_FAILURE,
            message: 'Failure to fetch bucketlist'
        })
    }
};

// ====================
// Initial State
// ====================

export const initialState = {
    bucketlists: [],
    message: '',
}

export const bucketlist = ( state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_BUCKETLISTS': 
            return Object.assign({}, state, {
                ...state,
                message: action.message 
            });
        case 'FETCH_BUCKETLISTS_SUCCESS': 
            return Object.assign({}, state, {
                ...state,
                bucketlists: action.list,
                message: action.message 
            });
        case 'FETCH_BUCKETLISTS_FAILURE': 
            return Object.assign({}, state, {
                ...state,
                message: action.message  
            });
        default: 
            return state;
        }
}

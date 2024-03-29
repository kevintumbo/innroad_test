import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBucketList } from '../../redux/reducers/bucketlist';
import Item from '../item/Item';
import './bucketlist.sass';
class BucketList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bucketlists: []
        }
    }

    componentDidMount() {
        const {fetchBucketList, } = this.props;
        fetchBucketList();
    }

    componentDidUpdate(prevProps) {
        if(this.props.bucketlists !== prevProps.bucketlists){
            this.setState({
                bucketlists: this.props.bucketlists
            })
        }
    }

    render(){
        const { bucketlists } = this.state;
        return(
            <div className="bucketlist_Container">
                {bucketlists.map(bucketlist => {
                return (
                    <div key={bucketlist.orderInVertical} className="single_bucketlist">
                        <h2>{bucketlist.description}</h2>
                        {bucketlist.items.map(item => 
                            <Item key={item.itemId} item={item}/>
                        )}
                    </div>
                )
            })}
            </div>
            
        )
            
    }
    
}
 
const mapStateToProps = state => {
    return {
        bucketlists: state.bucketlist.bucketlists 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBucketList: () => {
            dispatch(fetchBucketList())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BucketList);

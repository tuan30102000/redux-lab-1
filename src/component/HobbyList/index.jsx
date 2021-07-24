import React from 'react';
import PropTypes from 'prop-types';

HobbyList.propTypes = {
    hobbyList: PropTypes.object,
};

function HobbyList(props) {
    const { hobbyList } = props
    return (
        <ul>
            {hobbyList.list.map((item,index)=><li key='index'>{item.hobby}</li>)}
        </ul>
    );
}

export default HobbyList;
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import HobbyList from '../HobbyList';

HomePage.propTypes = {

};

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby)
    console.log(hobbyList)
    return (
        <div>
            <HobbyList hobbyList={hobbyList} />
        </div>
    );
}

export default HomePage;
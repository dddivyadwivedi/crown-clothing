import React from 'react';
import './homepage.styles.scss'
import {Link} from 'react-router-dom';
import DirectoryItem from '../../directory/directory.component'

const HomePage = (props)=>{
    console.log(props)
    return(
        <div className="homepage">
            <DirectoryItem />
        </div>
    )
}
export default HomePage
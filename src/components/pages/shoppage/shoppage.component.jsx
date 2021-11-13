import React from 'react';
import SHOP_DATA from './shopdata';
import CollectionPreview from '../../collection-preview/collection.preview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections : SHOP_DATA,
        }
    }

    render(){
        const {collections} = this.state;
        return <div>{collections.map((({id ,...otherSectionProps})=><CollectionPreview key={id} {...otherSectionProps} />))}</div>
    }
}


export default ShopPage;
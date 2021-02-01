import React, { Component } from 'react';
import axios from 'axios';

import CollectionItem from '../../components/collection-item/collection-item.component';
import Spinner from '../../components/spinner/spinner';
import Search from '../../components/search/search.component';

class Collection extends Component {
    constructor(props){
        super(props);

    this.state = {
      items: "",
      searchKey: ""
    }
}

    handleChange = (event) => {
        this.setState({searchKey: event.target.value})
    }

    componentDidMount() {
        axios.get("https://api.thecatapi.com/v1/breeds?limit=10")
        .then(response => {
            console.log(response.data);
            this.setState({ items: response.data })
        })
        .catch(err => {
            console.error(err);
        });
        }

    render() {
        const { items, searchKey } = this.state;

        return (
            <>
            <Search 
                searchKey={searchKey} 
                handleChange={this.handleChange} 
            />
            { 
                !items ? <Spinner /> :
                    Object.keys(items)
                        .filter(key => items[key].name.toLowerCase().includes(searchKey.toLowerCase()))
                        .map((item, idx) => <CollectionItem key={idx} item={items[item]} />)
            }
            </>
        )
    }
}

export default Collection;
import React from 'react';

import './search-panel.css'

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        
    }
    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Search in your posts"
                onChange={this.onUpdateSearch}
            />  
        )
    }
}



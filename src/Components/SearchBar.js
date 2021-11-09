import React from "react"
import Axios from "axios"

class SearchBar extends React.Component {
    constructor() {
        super()
        this.state = {
            result: [],
            title: "",
            filteredResult: []
        }
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        const result = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => this.setState({
                result: json
            }))


    }


    handleChange(event) {
        let {
            value
        } = event.target;
        const filteredResult = this.state.result.filter(result => value === result.title)
        this.setState({
            title: value,
            filteredResult
        });
    };



    render() {
        return ( 
            <>
            <label htmlFor = "search-input" > Search: </label> 
            <input type = "text"
                id = "search"
                name = "search-input"
                required onChange = {
                    this.handleChange
                } > 
            </input>
            </>
        )

    }
}

export default SearchBar
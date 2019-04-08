import React from 'react';
import Search from '../Components/Search';
import RecipeList from '../Components/RecipeList';
import { recipeData } from '../data/tempList';

class Recipes extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        recipes: recipeData,
        search: '',
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    h

    render() {
        return (
            <div>
                <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <RecipeList recipes={this.state.recipes} />
            </div>
        )
    }
}

export default Recipes;
import React, {Component} from 'react'

import './people-page.css'
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";


export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 4
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}
            >
                { i => (`${i.name}, (${i.birthYear})`)}
            </ItemList>
        )
        const personList = (
            <ItemDetails personId={this.state.selectedPerson}/>
        )

        return(
            <div>
                <ErrorBoundry>
                    <Row left={itemList} right={personList} />
                </ErrorBoundry>
            </div>
        )
    }
}
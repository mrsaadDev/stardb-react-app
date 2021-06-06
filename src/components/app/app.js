import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from "../people-page";
import Row from '../row'
// import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";

export default class App extends Component {

    swapiService = new SwapiService()

    state = {

    }

    render() {

        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImgUrl={getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="EyeColor " />
            </ItemDetails>
        )
        const starshipsDetails = (
            <ItemDetails
                itemId={11}
                getData={getStarship}
                getImgUrl={getStarshipImage}
            >
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost " />

            </ItemDetails>
        )
        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    <RandomPlanet />
                    <PeoplePage />

                    <Row left={personDetails} right={starshipsDetails} />

                    {/*<br/>*/}

                    {/*<div className="row mb2">*/}
                    {/*    <div className="col-md-6">*/}
                    {/*        <ItemList onItemSelected={this.onPersonSelected}*/}
                    {/*                  getData={this.swapiService.getAllPlanets}*/}
                    {/*                  renderItem={(item) => item.name}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="col-md-6">*/}
                    {/*        <ItemDetails personId={this.state.selectedPerson}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<br/>*/}

                    {/*<div className="row mb2">*/}
                    {/*    <div className="col-md-6">*/}
                    {/*        <ItemList onItemSelected={this.onPersonSelected}*/}
                    {/*                  getData={this.swapiService.getAllStarships}*/}
                    {/*                  renderItem={(item) => item.name}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="col-md-6">*/}
                    {/*        <ItemDetails personId={this.state.selectedPerson}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </ErrorBoundry>
        );
    }
}
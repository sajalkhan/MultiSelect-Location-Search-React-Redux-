import React from 'react';
import { Grid, Form, Segment, Header, Icon } from 'semantic-ui-react';
// import { Dropdown } from 'semantic-ui-react';

import './App.css';
import SearchBox from './Components/SearchBox';

//Redux
import { connect } from 'react-redux';
import { SearchLocation, AddLocation } from './Action/LocationSearch';

const App = ({ SearchLocation, AddLocation, location, selectedLocation1, selectedLocation2, selectedLocation3, selectedLocation4 }) => {

  const handleInputChange = (e) => {
    SearchLocation(e);
  }

  const handleChange = (value, indx) => {
    AddLocation(value, indx);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 700 }}>
        <Header as="h2" icon color="orange" textAlign="center">
          <Icon name="map marker alternate" color="orange" />
                    MultiSelect Location Search
        </Header>

        <Form size="large">
          <Segment stacked>
            <Grid divided="vertically" verticalAlign="middle">
              <Grid.Row columns={2}>
                <Grid.Column floated="left" style={{ height: 100 }}>
                  <SearchBox value={selectedLocation1} options={location} onChange={(e) => handleChange(e, 1)} onInputChange={handleInputChange} />
                </Grid.Column>
                
                <Grid.Column floated="left" style={{ height: 100 }}>
                  <SearchBox value={selectedLocation2} options={location} onChange={(e) => handleChange(e, 2)} onInputChange={handleInputChange} />
                </Grid.Column>

                <Grid.Column>
                  <SearchBox value={selectedLocation3} options={location} onChange={(e) => handleChange(e, 3)} onInputChange={handleInputChange} />
                </Grid.Column>
                
                <Grid.Column>
                  <SearchBox value={selectedLocation4} options={location} onChange={(e) => handleChange(e, 4)} onInputChange={handleInputChange} />
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    location: state.SearchLocation,
    selectedLocation1: state.AddLocation_1,
    selectedLocation2: state.AddLocation_2,
    selectedLocation3: state.AddLocation_3,
    selectedLocation4: state.AddLocation_4,

  }
}

export default connect(mapStateToProps, { SearchLocation, AddLocation })(App);
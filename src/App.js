import './App.css';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import { Translate } from './components/Translate';
import { useState } from 'react';
import Search from './components/Search';
import { Route } from './components/Route';
import { Header } from './components/Header';
//import { Divider, Grid, Segment } from 'semantic-ui-react'

const items = [
  {
    title: 'what is React',
    content: 'somtheing something something'
  },
  {
    title: 'why?',
    content: 'cause why not'
  },
  {
    title: '3 arrays',
    content: 'szBDPxuizsfd'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
]

function App() {

  const [selected, setSelected] = useState(options[0]);
  //const [showDropdown, setShowDropdown] = useState(true);


  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>

      <Route path='/dropdown'>
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path='/search'>
        <Search />
      </Route>

      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  )






  /*
    return (
      <Segment>
        <Grid columns={2} relaxed='very '>
          <Grid.Column>
            <div >
              <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
              {showDropdown ? (
                <Dropdown
                  options={options}
                  onSelectedChange={setSelected}
                  selected={selected} />) : null}
            </div>
          </Grid.Column>
          <Grid.Column>
            <div >
              <Accordion
                items={items} />
            </div>
          </Grid.Column>
        </Grid>
  
        <Divider vertical />
      </Segment>
    )
  */
}

export default App;

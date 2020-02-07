import React,{Component} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'


class App extends Component { 

    constructor() {
        super();
        this.state = {
            robots:[],
            searchField: ''
        } 
    } 

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users =>{this.setState({robots: users})});  
}

// methed create to catct the event when something is typed into the search box
onSearchChange=(event) =>{
    this.setState({searchField: event.target.value}) //To change a value in the state object, use the this.setState() method
    } 
   

    render(){ 
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
   
        return !robots.length ?
        <h1>Loading</h1> :
        ( 
            <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>  
            <CardList robots = {filteredRobots}/>
            </Scroll>  
            </div>
        )
    } 
}

export default App;
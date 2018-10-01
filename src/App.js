import React, { Component } from 'react';
import Hello from './Hello';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {

    constructor() {

        super();
        this.state = {
            BlogSource: [],
            searchfield:''
        }
    }

    
    componentDidMount(){
        fetch('https://spreadsheets.google.com/feeds/list/1a8UxamriUs9IMXcFdSOl8VaS0S3GIwXcoO9j0UaQt4I/od6/public/values?alt=json')
            .then(response=> {
               return response.json();
        }).then(Blogs => {
            let entry  = Blogs.feed.entry; 
            let newData =[];
            entry.map(item => {
                  newData.push({
                      'title' : item.gsx$title.$t,
                      'content' : item.gsx$content.$t
                                    });
                return newData;
            });
            this.setState({ BlogSource: newData })
            
        });

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
       
    }

    render() {  
        const filteredBlog = this.state.BlogSource.filter(BlogSource => {
            return BlogSource.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
        <div className='tc'>
            <Hello />
            <SearchBox searchChange={this.onSearchChange} />
            <CardList BlogSource={ filteredBlog } />        
        </div>
    );
    }

   }

export default App;
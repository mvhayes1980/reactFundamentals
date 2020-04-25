import React, { useState } from 'react'; // import JS Library for building user interfaces, iport hook
import NytResults from './NytResults'; // import display/child component
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; // declaring and initializing variable from which we will fetch results
const key = 'Hbl6HpuAsWYt9NG5egEjMtO0RWy4RDeR'; // allows us access to the API


const NytApp = () => {
    //  useState is a Hook utilizing array destructuring: state variable, followed by a function that changes value of state variable and signals to React that component needs to be re-fired due to the change of the variable; initial value of state variable equal to value within ( ) of string/index/array
    const [ search, setSearch ] = useState('');         // user input determines new value of these first
    const [ startDate, setStartDate ] = useState('');   // three
    const [ endDate, setEndDate ] = useState('');       // useState Hooks
    const [ pageNumber, setPageNumber ] = useState(0);  // enhances usability, orients user
    const [ results, setResults ] = useState([]);       // results come from NYT api and will vary due to the request
 
        const fetchResults = () => {                   // create method to fetch results
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`; // modifying base url to include api key, state values of search and pageNumber
        url = startDate ? url + `&begin_date=${startDate}` : url;   // ternary operator: if there is a startDate, append it to the modified url...if not, the url's value does not change
        url = endDate ? url + `&end_date=${endDate}` : url;         // ternary operator for end date, same as above

        fetch(url)                                      // here we pass the url into the fetch GET request
        .then(res => res.json())                        // returns promise, response is jsonified
        .then(data => setResults(data.response.docs))   // returns another promise; out of the returned object/array, setResults to data within docs
        .catch(err => console.log(err));                // include catch in case of error, let user know there has been an error
        };

        const handleSubmit = (event) => {               // event listener on how to interpret user input
        event.preventDefault();                         // prevent page from refreshing
        setPageNumber(0);                               // fire function as pageNumber variable changes from 0
        fetchResults();                                 // fire our method
        };
                                                            // PAGINATION
        const changePageNumber = (event, direction) => { // allow user to go to next page of results
        event.preventDefault();
        if(direction === 'down') {
            if(pageNumber > 0) {
            setPageNumber(pageNumber + 1);
                fetchResults();                         // DOES THIS MEAN WE DO ANOTHER FETCH EVERY TIME USER CHANGES PAGE???
            }
            }

        if(direction === 'up') {                            // allow user to go to previous page results
        setPageNumber(pageNumber + 1);
        fetchResults();
        }
        };

        return (
        <div className="main">
            <div className="mainDiv">
            <form onSubmit={(e) => handleSubmit(e)}>
                <span>Enter a single search term (required) : </span>
                <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
                <br />
                <span>Enter a start date: </span>
                <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStartDate(e.target.value)} />
                <br />
                <span>Enter an end date: </span>
                <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value)} />
                <br />
                <button className="submit">Submit search</button>
            </form> 
            {
            results.length > 0 ? <NytResults results={ results } changePage={ changePageNumber } /> : null 
            }
            </div>
        </div>
  );
};

export default NytApp;


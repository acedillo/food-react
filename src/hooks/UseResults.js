import {useEffect, useState} from 'react'
import Yelp from "../api/Yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            console.log("starting call")
            const response = await Yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('something went wrong, try again')
        }
    };

    useEffect(() => {
        // searchApi('pasta')
    }, []);

    return [searchApi, results, errorMessage];
}
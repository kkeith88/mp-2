import useSWR from 'swr'
import DogBreeds from './components/DogBreeds'
import './App.css'

export default function App() {
    // Using the Dog API breeds endpoint
    const{data, error}=useSWR("https://dogapi.dog/api/v2/breeds",
        (url)=>fetch(url).then(res=>res.json())
    )

    if (!data && !error) return <h2>Loading dog breeds...</h2>;

    if (error) return <h2>Something went wrong: {error.message}</h2>;

    return (
        <div className="App">
            <h1>Dog Breeds Directory From Dogs V2</h1>
            <h2>Showing the first 30 breeds from the API</h2>
            <DogBreeds breeds={data.data} />
        </div>
    );
}

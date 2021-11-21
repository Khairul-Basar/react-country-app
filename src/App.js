import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function Loadcountries(){
//   const [countries,setCountries] = useState([])

//   useEffect(()=>{
//     fetch(`https://restcountries.com/v3.1/all`)
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])

//   return(
//     <div>
//       <h3>Countries Available: {countries.length}</h3>
//       {
//         countries.map((country)=>{
//           return <Country ></Country>
//         })
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>

//     </div>
//   )
// }

export default App;

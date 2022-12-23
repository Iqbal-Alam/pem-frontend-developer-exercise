export {CREATE_PETS, FETCH_PETS} from '../Constants';

export const createPets = (petPostData) => dispatch =>{
    const jsonServerUrl = "http://localhost:4000/pets";
    
    fetch(jsonServerUrl,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(petPostData)
    })
    .then(res => res.json())
    .then(pets=>
        dispatch({
            type: 'CREATE_PETS',
            payload: pets
        })
    )
    
}

export const fetchPets = () => dispatch =>{
    const jsonServerUrl = "http://localhost:4000/pets";
    fetch(jsonServerUrl)
    .then(res => res.json())
    .then(pets=>{
        dispatch({
            type: 'FETCH_PETS',
            payload: pets
        })
    }
    )
}
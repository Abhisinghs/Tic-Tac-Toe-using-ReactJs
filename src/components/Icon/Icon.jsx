import {FaPen, FaRegCircle, FaTimes} from 'react-icons/fa';


//define function 
function Icon({name}){
    if(name == 'circle'){
        return <FaRegCircle/>
    }else if(name == 'cross'){
        return <FaTimes/>
    }else{
        return <FaPen/>
    }
}

// export 
export default Icon;
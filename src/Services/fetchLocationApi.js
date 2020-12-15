import axios from "axios"


const fetchLocation = async() => {

     return  await axios.get("https://raw.githubusercontent.com/marwein/tunisia/master/tunisia.json")
            .then(request => {
               return request.data
                                          
            })


}

export default{fetchLocation} ;
// This is the fetcher function for the useQuery
import axios from "axios";

const fetcher = async () => {
    const response = await axios.get("http://localhost:1337/api/medical-cards/")
        if(!response.status >= 200 && !request.status < 300){
            console.log("You have an error")
            throw new Error('Error you have fetched rubbush')
        }else{
            console.log("You have fetched well")
        }
    return response.data
}

export {fetcher}

// fetcher()

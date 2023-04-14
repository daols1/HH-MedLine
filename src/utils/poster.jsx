import axios from "axios";

const poster  = async (data) => {
    const response = await axios.post("http://localhost:1337/api/doctor-details/", data)
        if(!response.status >= 200 && !request.status < 300){
            console.log("You have an error")
            throw new Error('Error you have posted rubbish')
        }else{
            console.log("You have fetched well")
        }
    return response
}

export { poster }
import axios from "axios";
const searchimage= async (text)=>{
    const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
         Authorization:'Client-ID 6YXzeOckr-wbTbqnzrPDWoJ8ZhizRMgGjZcXb-eR4HM'
        },
        params:{
          query:text,
        },
    });
    return response.data.results;
};
export default searchimage;
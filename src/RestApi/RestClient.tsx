import axios from 'axios';


export const GetRequest = (getUrl: string) =>{
  return axios.get(getUrl).then(response=>{
    return response.data;
  }).catch(error=>{
    return null;
  });
}

export const PostRequest = (postUrl: string, postJson: string)=>{
  let config={
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
  }

  return axios.post(postUrl,postJson,config).then(response=>{
       return response.data;
  }).catch(error=>{
       return null;
  });
}
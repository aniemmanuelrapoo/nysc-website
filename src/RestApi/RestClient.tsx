import axios from 'axios';
import * as React from 'react';
import "@capaj/videojs-youtube";


interface IPost {
  home_title: string
  home_subtitle: string
}

const defaultPosts:IPost[] = [];

export function GetRequest(getUrl: string){
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");
  axios
      .get<IPost[]>(getUrl, {
          headers: {
            "Content-Type": "application/json"
          },
        })
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(ex => {
        const err =
        ex.code === "ECONNABORTED"
          ? "A timeout has occurred"
          : ex.response.status === 404
            ? "Resource not found"
            : '';
        setError(err);
        setLoading(false);
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


// {/* <Row>
// {/* <h1>{posts[0]['home_subtitle']}</h1> */}
// {posts.map((post) => (
// <Col className='text-center'>
//   <h1 className='top__title'>{post.home_title}</h1>
//   <h4 className='top__subTitle'>{post.home_subtitle}</h4>
//   <Button variant="primary">Explore All</Button>
// </Col>
// ))}
// </Row> */}
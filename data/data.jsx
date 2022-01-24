// import react,{useState,useEffect} from "react"
// import axios from "axios"

// export function Data() {
//     const[post,setPost] = useState([])
//     const getData = () => {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => {
//             console.log('Response')
//             const myData = response.data
//             setPost(myData)
//         })
//     }
//     useEffect(() => getData(),[])  
//     return(
//         <div>
//             {post.map((posts,index) =>(
//                 <div key = {index}>id = {posts.id}: title : {posts.title}</div>
//             ))}
//         </div>
//     )
// }

import { useQuery } from "react-query"
import axios from "axios"

const fetchData = () => {
    return axios.get(' https://jsonplaceholder.typicode.com/posts')
}
export const Data = () => {
    const { data, isLoading } = useQuery('posts',fetchData)

    if (isLoading) {
        return <h2> Loading Data.. </h2>
    }

    return (
        <>
        <div>
            {data?.data.map((user,index) => (
                <div key = {index}>title = {user.title}</div>
            ))}
        </div>
        </>
    )
} 

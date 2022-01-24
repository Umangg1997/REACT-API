

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

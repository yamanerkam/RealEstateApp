import axios from "axios"

export const singlePageLoader = async ({ request, params }) => {
    const res = await axios.get(`http://localhost:3001/api/post/${params.id}`)
    return res.data
}

export const listPageLoader = async ({ request, params }) => {
    const query = request.url.split('?')[1]
    console.log(query)
    const res = await axios.get(`http://localhost:3001/api/post?${query}`)
    console.log(res.data)
    return res.data

}
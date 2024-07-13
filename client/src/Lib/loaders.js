import axios from "axios"

export const singlePageLoader = async ({ request, params }) => {
    const res = await axios.get(`http://localhost:3001/api/post/${params.id}`)
    return res.data
}

export const listPageLoader = async ({ request, params }) => {
    const querry = request.url.split('?')[1]
    console.log(querry)
    const res = await axios.get(`http://localhost:3001/api/post?${querry}`)
    console.log(res.data)
    return res.data

}
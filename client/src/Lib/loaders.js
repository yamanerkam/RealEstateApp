import axios from "axios"

export const singlePageLoader = async ({ request, params }) => {
    const res = await axios.get(`http://localhost:3001/api/post/${params.id}`)
    return res.data
}
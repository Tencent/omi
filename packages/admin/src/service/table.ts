import axios from 'axios'

export async function getTable() {
    const res = await axios.get('/api/getTable')
    console.log(res.data.data)
    return res.data.data
}


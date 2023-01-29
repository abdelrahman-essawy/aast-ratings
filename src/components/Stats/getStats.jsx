const getStats = async () => await fetch('http://localhost:3000/api/getStats',
    { next: { revalidate: 10 } }).then(res => res.json())

export default getStats
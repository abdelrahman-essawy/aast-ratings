const getStats = async () => await fetch('https://aast-ratings.vercel.app//api/getStats',
    { next: { revalidate: 10 } }).then(res => res.json())

export default getStats
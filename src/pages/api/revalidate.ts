export default async function handler(req, res) {
    // Check for secret to confirm this is a valid request
    // if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    //     return res.status(401).json({ message: 'Invalid token' });
    // }



    try {
        const { path } = req.query;
        
        console.log('Revalidating: ' + path);
        const result = await res.revalidate(path)
        res.status(200).json('Revalidating: ' + path + result);
    } catch (err) {
        console.error(err);
        return res.status(500).json('Error revalidating');
    }
}
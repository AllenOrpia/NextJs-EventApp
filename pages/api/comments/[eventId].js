

function handler(req, res) {
    const eventId = req.query.eventId;
    if (req.method === 'POST') {
        //  Add server side validation

        const { email, name, text } = req.body;
        if (!email.includes('@') || !name || !name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({ message: 'Invalid Input' })
            return;
        }

        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text
        }
        console.log(email, name, text);
        res.status(201).json({ message: 'Added comment', comment: newComment })
    }

    if (req.method === 'GET') {
        const dummyList = [
            { id: 'c1', name: 'allon', comment: 'asdadasdasdasd' },
            { id: 'c2', name: 'Yoh', comment: 'asdadasdasdasd' }
        ]


        res.status(200).json({ comments: dummyList })
    }
}
export default handler;
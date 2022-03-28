import {notes} from '../../cache/data'

export default (req,res) => {
    const results = req.query.q ?
        notes.filter(note => note.data.includes(req.query.q)) : []
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({results:results.map(result=>result.id)}))
}
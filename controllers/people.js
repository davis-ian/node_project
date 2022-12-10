const { Deta } = require('deta');
const deta = Deta(process.env.PROJECT_KEY)
const db = deta.Base('simple_db')


const testPerson = (req, res, next) => {
    res.json({message: "POST new person"})
}

const getPerson = async (req, res, next) => {
    const id = req.params.id

    const item = await db.get(id)

    res.status(200).send(item);
}

const getAll = async (req, res, next) => {
    let dbRes = await db.fetch();
    let allItems = dbRes.items;

    res.status(200).send(allItems);
}

const updatePerson = async (req, res, next) => {
    const id    = req.params.id;
    const name  = req.body.name;
    const age   = req.body.age;

    if(!id){
        res.send({message: 'An ID is required for this action!'})
    }
    if(!name){
        res.send({message: 'A person needs a name!'})
    }
    if(!age){
        res.send({message: 'A person needs a age!'})
    }

    const result = await db.put({
        key: id, 
        name: name, 
        age: age
    })

    res.status(200).send(result)
}

const newPerson = (req, res, next) => {
    const name  = req.body.name;
    const age   = req.body.age;

    if(!name){
        res.send({message: 'A person needs a name!'})
    }
    if(!age){
        res.send({message: 'A person needs a age!'})
    }

    db.put({
        name: name, 
        age: age
    })

    res.status(200).send(`Person added! ${name} : ${age}`)
}

const deletePerson = async (req, res, next) => {
    const id = req.params.id;

    if(!id){
        res.send({message: 'An ID is required for this action!'})
    }

    const result = await db.delete(id);

    res.status(200).send('Person deleted')
}


module.exports = {
    testPerson, 
    getPerson,
    getAll,
    updatePerson,
    newPerson,
    deletePerson,
}
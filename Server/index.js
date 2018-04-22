// Source ==> https://github.com/wwarodom/monday

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router()
 
let users = [{id: 1, firstname: 'Chakerit', lastname: 'TwoCee', age: '20'}];

app.use(cors())
app.use(express.static('public'))

app.use('/api', bodyParser.json() , router);   
router.route('/users')
    .get((req, res) => {
        res.send(users)
    })

    .post(
        (req, res) => {
            const user = {}
            user.id = user.length + 1
            user.firstname = req.body.firstname
            user.lastname = req.body.lastname
            user.age = req.body.age
            users.push(user)
            res.send(users)
            console.log('POST : '+ req.body.firstname);
    })

router.route('/users/:id')
    .get( (req,res) => {
        res.send(users[req.params.id])
    })

    .put((req,res ) =>  {
        const id = req.params.id
        users[id].name = req.body.name
        users[id].weight = req.body.weight
        res.send( users)
    })

    .delete( (req,res) => {
        const id = req.params.id
        delete users[id]
        res.send(users)
    })

app.listen(8888)
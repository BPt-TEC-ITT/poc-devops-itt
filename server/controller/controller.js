const Userdb = require('../model/model')

//create and same new user
exports.create = (req,res) =>{
    //validate request
    if(!req.body){
        res.status(400)
        return; 
    }

    //new user
    const user = new Userdb({
        name : req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save user in databse
    user
        .save(user)
        .then(data=>{
            //res.send(data)
            res.redirect('/add-user')
        })
        .catch(err=>{
            res.status(500)
        })
    

}

//retrieve and return all users/retrieve and return a single user

exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
}
//update a new identified user by user id

exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400)
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404)
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

//Delete a user with speicified user 
exports.delete =(req,res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot delete with id ${id}. Maybe id is wrong`})
            }
        })
        .catch(err=>{
            res.status(500).send({
                message:"Could not delete User with id= "+id
            });
        });
}

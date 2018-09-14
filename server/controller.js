module.exports={
    register: (req,res)=>{
    const db = req.app.get('db')    
    let {username, password} = req.body
    db.insert_user(username,password).then(user=>res.status(200).send(user))
    },
    login: (req,res)=>{
    const db = req.app.get('db')
      let {username,password} = req.body
      db.login_user(username,password).then(user=>res.status(200).send(user))
    }
}
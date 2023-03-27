//metodos: index. show, update, store e destroy

/*
index: listagem de sessões. 
store: Criar uma sessão.
show: Quando queremos lista uma unica sessão.
update: Quando queremos alterar alguma sessão.
destroy: Quando queremos deletar uma sessão

*/ 

import User from '../models/User';

class SessionController{

    async store(req, res){

        const { email } = req.body;
        //verificando se esse usuário sá existe.
        let user = await User.findOne({ email })

        if(!user){
             user = await User.create({ email });
        }

        return res.json(user);
    }
}

export default new SessionController();
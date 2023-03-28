import House from '../models/House';
import User from '../models/User';

class HouseController{

    async index(req, res){
        const { status } = req.query;
                                        //ou status: status
        const houses = await House.find({ status });

        return res.json(houses)
    }


    async story(req,res){   
        const { filename } = req.file;
        const { description, price, location, status } = req.body;
        const { user_id } = req.headers

        const house = await House.create({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status,
        });
        return res.json(house)
    }

    async update(req,res){
        const { filename } = req.file;
        const {house_id } = req.params;
        const { description, price, location, status } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);
        const houses = await House.findById(house_id);

        // !==   ->    diferente
        if(String(user._id) !== String(houses.user)){
            return res.status(401).json({
                error: "Não autorizado!"
            })
        }

        await House.updateOne({_id: house_id}, {
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status,
        });
        return res.json({
            status: 'Casa alterar com sucesso!'
        })
    }

    async destroy(req, res){
        const { house_id } = req.body;
        await House.findByIdAndRemove({ _id: house_id})

        return res.json({ok: true});
    }

}

export default new HouseController();

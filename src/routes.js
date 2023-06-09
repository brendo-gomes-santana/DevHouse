import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';


import { Router } from 'express';

import multer from 'multer';
import uploadConfig from './config/upload';


const routes = new Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);
routes.post('/houses', upload.single('thumbnail') ,HouseController.story);
routes.get('/houses', HouseController.index);
routes.put("/houses/:house_id", upload.single('thumbnail'), HouseController.update);
routes.delete("/houses", HouseController.destroy);
export default routes;
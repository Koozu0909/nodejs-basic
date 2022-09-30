import express from "express";
import homeController from "../controller/homeController"

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:userID', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.get('/about',homeController.getAboutPage);


      return app.use('/', router)
}

export default initWebRoute;
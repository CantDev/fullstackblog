import * as express from "express";
import router from "./chirps";

const router: express.Router = express.Router();

router.use("/chirps", router);

export default router;
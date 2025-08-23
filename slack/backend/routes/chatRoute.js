import express from 'express';

import {getStreamToken} from "../controllers/chatController.js"
import {protectRoute} from "../middleware/authMiddleware.js";

const router = express.Router();



router.get('/token',protectRoute, getStreamToken)

export default router;

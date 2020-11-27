// const router = require('express');
// app.set("router", router);

import { Router } from "express";
const router = Router();

router.get('/cars', (req, res) => res.json('get cars'))

export default router
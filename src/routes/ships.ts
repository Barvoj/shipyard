import express, {Request, Response} from 'express';
import Ship from "../ship";
import { check, validationResult } from 'express-validator';
import storage from './../storage';
const router = express.Router();

/**
 * Fetches list of Ships
 */
router.get('/', function(req: Request, res: Response) {
    res.set('Content-Type', 'application/json');
    res.status(200).json(storage);
});

/**
 * Add ship to shipyard
 */
router.post('/', [
    check('name').isLength({ min: 1 }),
    check('speed').isLength({ min: 1 }),
], function (req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const newShip: Ship = {
        id: storage.length + 1,
        name: req.body.name,
        speed: req.body.speed,
    };
    storage.push(newShip);

    res.set('Content-Type', 'application/json');
    res.status(201).json(newShip);
});

export default router;

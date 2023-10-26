import db from '@data.json';
import Cors from 'cors';

const cors = Cors({
    methods: ['GET', 'POST']
});

const corsMiddleware = (middleware) => (req, res) =>
    new Promise((resolve, reject) => {
        middleware(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });

export default async (req, res) => {

    await corsMiddleware(cors)(req, res);

    if (req.method === 'GET') {
        return res.status(200).json(db.subscription);
    }

    if (req.method === 'POST') {
        const newUser = { id: Date.now(), ...req.body };
        db.subscription.push(newUser);
        return res.status(201).json(newUser);
    }
};

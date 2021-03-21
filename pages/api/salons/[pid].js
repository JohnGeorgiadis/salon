import {salons} from "../mockData";

export default function handler(req, res) {
    const {pid} = req.query;
    const salon = salons.data.filter((salon) => salon.id === pid);
    res.status(200).json(salon);
}
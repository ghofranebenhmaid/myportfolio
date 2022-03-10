import db from "../../../data/db";
import projects from "../../projects";


export default function handler (req, res)
{
    res.status(200).json(db)
}
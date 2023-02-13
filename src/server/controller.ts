import { Request, Response } from 'express';


type Post = {
    id : number,
    text : string,
    timestamp : number
}

let posts : Post[] = []
let currentId = 1;



const getAll = (req: Request, res: Response) => {
    res.status(200).json(posts);
    console.log("posts array sent");
}

const create = (req: Request, res: Response) => {
    const { text } = req.body;

    const newPost : Post = {
        id: currentId,
        text: text,
        timestamp: Date.now()
    }

    currentId++;
    posts = [...posts, newPost]

    res.status(200).json({msg : "post added"})
    console.log("post added")
}

const updateById = (req: Request, res: Response) => {
    const { id } = req.params;
    const { text } = req.body;

    posts = posts.map( p => p.id === Number(id) ? 
        ( p = { 
                id: p.id,
                text: text,
                timestamp: Date.now()
            }
        ) : p);
    
        res.status(200).json({ msg : "post updated"})
    console.log("post updated")
}

const deleteById = (req: Request, res: Response) => {
    const { id } = req.params;

    posts = posts.filter( p => p.id !== Number(id));
    
    res.status(200).json({ msg : "post deleted"})
    console.log("post deleted")
}

export { getAll, create, updateById, deleteById }
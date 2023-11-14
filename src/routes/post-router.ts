import{Router} from "express";
import express, {Request, Response} from "express";
import {PostBody, PostId} from "../features/models/posts/PostInputModels";

export const postsRouter = Router({})

postsRouter.get('/', (req: Request, res: Response) => {

})

postsRouter.get('/:id', (req: Request<PostId, {}, {}, {}>, res: Response) => {

})

postsRouter.post('/', (req: Request<{}, {}, PostBody, {}>, res: Response) => {

})

postsRouter.put('/:id', (req: Request<PostId, {}, PostBody, {}>, res: Response) => {

})

postsRouter.delete('/:id', (req: Request<PostId, {}, {}, {}>, res: Response) => {

})
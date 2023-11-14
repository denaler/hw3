import{Router} from "express";
import express, {Request, Response} from "express";
import {BlogBody, BlogId} from "../features/models/blogs/BlogInputModels";


export const blogsRouter = Router({})

blogsRouter.get('/', (req: Request, res: Response) => {

})

blogsRouter.get('/:id', (req: Request<BlogId, {}, {}, {}>, res: Response) => {

})

blogsRouter.post('/', (req: Request<{}, {}, BlogBody, {}>, res: Response) => {

})

blogsRouter.put('/:id', (req: Request<BlogId, {}, BlogBody, {}>, res: Response) => {

})

blogsRouter.delete('/:id', (req: Request<BlogId, {}, {}, {}>, res: Response) => {

})
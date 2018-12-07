import { Request, Response } from "express";
import { IEXClient } from 'iex-api';
import _fetch from 'isomorphic-fetch';

const iex = new IEXClient(_fetch);

export let stock = (req: Request, res: Response) => {

};
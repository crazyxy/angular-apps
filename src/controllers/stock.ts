import { Request, Response } from "express";
import { IEXClient } from 'iex-api';
import _fetch from 'isomorphic-fetch';

const iex = new IEXClient(_fetch);

export let company = (req: Request, res: Response) => {
    iex.stockCompany(req.params.company).then((data) => res.send(data));
};

export let price = (req: Request, res: Response) => {
    iex.stockPrice(req.params.company).then((data) =>{res.json(data)});
};

export let logo = (req: Request, res: Response) => {
    iex.stockLogo(req.params.company).then((data) => res.send(data));
};

export let news = (req: Request, res: Response) => {
    iex.stockNews(req.params.company).then((data) => res.send(data));
};

export let financials = (req: Request, res: Response) => {
    iex.stockFinancials(req.params.company).then((data) => res.send(data));
};

export let chart = (req: Request, res: Response) => {
    iex.stockChart(req.params.company, '6m').then((data) => res.send(data));
};

export let companies = (req: Request, res: Response) => {
    iex.symbols().then((data) => res.send(data));
};
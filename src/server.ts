import { app } from './app';

const server = app.listen(app.get("port"), "0.0.0.0");

export default server;

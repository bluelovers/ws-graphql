#!/usr/bin/env node
import path from 'path';
import express from 'express';
import cors from 'cors';
import JsonGraphqlServer from '../node';
import getDefaultPort from 'get-default-port';

let dataFilePath = process.argv.length > 2 ? process.argv[2] : './data.json';
let data = require(path.join(process.cwd(), dataFilePath));
let PORT: string | number;
let app = express();

process.argv.forEach((arg, index) =>
{
	// allow a custom port via CLI
	if (arg === '--p' && process.argv.length > index + 1)
	{
		PORT = process.argv[index + 1];
	}
});

PORT = getDefaultPort({
	preferPorts: PORT,
})

app.use(cors());
app.use('/', JsonGraphqlServer(data));
app.listen(PORT);
let msg = `GraphQL server running with your data at http://localhost:${PORT}/`;
console.log(msg); // eslint-disable-line no-console

process.on('unhandledRejection', (reason, p) =>
{
	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

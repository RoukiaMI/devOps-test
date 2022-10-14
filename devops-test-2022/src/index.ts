import compression from 'compression';
import express from 'express';
import bodyParser from 'body-parser';
import { taskRouter } from './tasks/task.router';
import { applyMetrics } from './core/metrics.router';
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8090;
const promToken = process.env.PROM_TOKEN || 'abaddjek';
const app = express();
app.use(compression());
app.use(bodyParser.json());
applyMetrics(app, {
    promToken: promToken,
    label: 'todo-list',
    normalizePath: [
        ['/tasks/[0-9]*', '/tasks/#taskId']
    ],
}
);

app.use('/', taskRouter);

app.listen(port, () => {
    console.log(`A basic todo list API listening on port ${port}`);
    console.log(`PROM_TOKEN ${promToken}`)
});

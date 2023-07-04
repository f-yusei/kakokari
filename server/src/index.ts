import express from 'express';
const app: express.Express = express();

const PORT:number = 3300

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log("ローカルサーバー起動中")
})
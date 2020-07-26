import Express from 'express';
import cors from 'cors';
import router from './routes';

import "reflect-metadata";
import typeorm from "typeorm";

const app = Express();

typeorm.createConnection({
  type: 'mysql',
  host: '121.170.188.104',
  port: 10095,
  username: 'concrete',
  password: 'kakao',
  database: 'unicon_driver',
  entities: ["./src/entities"],
  logging: true,
  synchronize: false
})
  .then(() => {
    console.log("DB connected");
  })
  .catch(err => {
    console.dir(err);
  });

app.use(Express.urlencoded({extended: false}));
app.use(Express.json());
app.set('view engine','ejs');
app.set('views', './src/views');

app.use(cors({
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: "*"
}));

app.use(router);

app.listen(3910, function () {
  console.log("server started");
});

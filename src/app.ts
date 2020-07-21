import Express from 'express';
import cors from 'cors';
import router from './routes';

const app = Express();

app.use(Express.urlencoded({extended: false}));
app.use(Express.json());

app.use(cors({
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: "*"
}));

app.use(router);

app.listen(3910, function () {
  console.log("server started");
});

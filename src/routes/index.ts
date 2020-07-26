import Express from 'express';
import wrapper from '../util/wrapper';
import builder from 'openbuilder-node';

const Router = Express.Router();
const backURL = "localhost:3910";

Router.post(
  '/auth', 
  wrapper(
    'POST:/auth',
    (req: Express.Request, res: Express.Response) => {
      console.dir(req.body);
      const skillRes = new builder.SkillResponse();
      const card = new builder.Card.BasicCard('기사 인증 신청', '기사 인증 신청이 완료되었습니다.', '');
      skillRes.template.addOutput(card);
      return res.status(200).send(skillRes.json());
    }
  )
);

const states = ["배차대기", "세차", "식사", "정비", "종료", "외출"];

Router.post(
  '/ask_status',
  wrapper(
    'POST:/ask_status',
    (req: Express.Request, res: Express.Response) => {
      const status = new builder.SkillResponse();
      const output = new builder.Output.Carousel('basicCard');
      const card1 = new builder.Card.BasicCard("상태 보고", "현재 상태를 선택해주세요.", "");
      const card2 = new builder.Card.BasicCard("상태 보고", "현재 상태를 선택해주세요.", "");

      states.forEach((it, idx) => {
        const btn = builder.Cmpnts.Button("block", {
          label: it, 
          messageText: it, 
          blockId: answer_status_id
        })
        if(idx < 3) card1.addBtn(btn);
        else card2.addBtn(btn);
      });

      output.addItem(card1);
      output.addItem(card2);
      status.template.addOutput(output);

      return res.status(200).send(status.json());
    }
  )
);

const answer_status_id = "5f1d9cc3fdfb0f0001a85308";

Router.post(
  '/answer_status',
  wrapper(
    'POST:/answer_status',
    (req: Express.Request, res: Express.Response) => {
      console.dir(req.body);
      const skillRes = new builder.SkillResponse();
      const card = new builder.Card.BasicCard('상태 보고 완료', '현재 기사님은 <배차대기> 상태이십니다.', '');
      skillRes.template.addOutput(card);
      return res.status(200).send(skillRes.json());
    }
  )
);

Router.post(
  '/assign',
  wrapper(
    'POST:/assign',
    (req: Express.Request, res: Express.Response) => {
      return res.status(200).send("temp");
    }
  )
);

Router.post(
  '/log',
  wrapper(
    'POST:/log',
    (_req: Express.Request, res: Express.Response) => {
      return res.status(301).redirect(`${backURL}/log?userid=${1}`);
    }
  )
)

Router.get(
  '/log',
  wrapper(
    'GET:/log',
    (_req: Express.Request, res: Express.Response) => {
      return res.status(200).render('log.ejs', {name: "Hello"});
    }
  )
);

export default Router;

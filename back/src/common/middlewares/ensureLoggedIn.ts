import { Request, Response, NextFunction } from "express";
import { getUIBaseURL } from "../../utils";
import { getUserToDisconnect } from "../redis/users";

export default (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).send({ error: "Not Authorized" });
  }

  getUserToDisconnect(req.user.id).then((isToDisconnect: boolean) => {
    req.logout(err => {
      if (err) {
        return res.status(401).send({ error: "Not Authorized" });
      }
      if (isToDisconnect) {
        res.redirect(getUIBaseURL());
      } else {
        return next();
      }
    });
  });
};

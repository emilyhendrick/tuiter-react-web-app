import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
      tuit = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "tesla.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 432,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return(
        <div className="row">
          <div className="col-1 wd-profile-image p-0">
            <img className="rounded-circle ms-2" height={42} src={`/images/${tuit.image}`}/>
          </div>
          <div className="col-11 ps-3">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}></i>
            <div><span className={"fw-bold"}>{tuit.userName}</span> <i className={"bi bi-patch-check-fill"}></i> {tuit.handle} • {tuit.time}</div>
            <div className="fw-normal">{tuit.tuit}</div>
          </div>
          <TuitStats tuit={tuit}></TuitStats>
        </div>
  );
};

export default TuitItem;
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {tuitIsDisliked, tuitIsLiked, heartToggle} from "./tuits-reducer";

const TuitStats = (
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

  const determineHeartFill = (liked) => {
    if (liked) {
      return "bi-heart-fill";
    } else {
      return "bi-heart";
    }
  }

  const [likes, setLikes] = useState(tuit.likes);
  const [heartFill, setHeartFill] = useState(determineHeartFill(tuit.liked));

  const dispatch = useDispatch();

  const heartClickHandler = (handleTuit) => {
    console.log(handleTuit);
    dispatch(heartToggle(handleTuit));
    setHeartFill(determineHeartFill(!handleTuit.liked))

    if (!handleTuit.liked) {
      dispatch(tuitIsDisliked(tuit));
      setLikes(likes + 1);
    }
    else {
      dispatch(tuitIsLiked(tuit));
      setLikes(likes - 1);
    }

  }

  return(
      <div  className={"row"}>
        <div  className={"col-1 p-0"}>

        </div>
        <div  className={"col-10"}>
          <div className={"row mt-2 mb-2"}>
            <div className={"col-3 mx-auto ps-3"}>
              <i className="bi bi-chat"> {tuit.replies}</i>
            </div>
            <div className={"col-3 mx-auto"}>
              <i className={"bi bi-arrow-repeat"}> {tuit.retuits}</i>
            </div>
            <div className={"col-3 mx-auto"}>
              <a onClick={() => heartClickHandler(tuit)}><i className={`bi ${heartFill}`}> {likes}</i></a>
            </div>
            <div className={"col-3 mx-auto"}>
              <i className={"bi bi-share-fill"}></i>
            </div>
          </div>
        </div>

      </div>

  );
}

export default TuitStats;
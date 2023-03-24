import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import TuitStats from "./tuit-stats";


const TuitsList = () => {
  const tuitArray = useSelector(state => state.tuits)

  console.log(tuitArray);
  return(
      <ul className="list-group">
        {
          tuitArray.map(tuit =>
              <li className={"list-group-item"}>
                <TuitItem
                    key={tuit._id} tuit={tuit}/>
              </li>
               )
        }
      </ul>
  );
};
export default TuitsList;
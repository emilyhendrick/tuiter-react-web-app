import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
  return (`
           <ul class="list-group">
           <h3 class="list-group-item wd-post-author">Who To Follow</h3>
           ${
      who.map(item => {
        return (WhoToFollowListItem(item));
      }).join('')
  }
           </ul>
           
`);
}
export default WhoToFollowList;

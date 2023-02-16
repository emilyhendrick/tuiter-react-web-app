import posts from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";


const PostSummaryList = () => {
  return (`
    <ul class="list-group mt-2">
           ${
      posts.map(item => {
        return (PostSummaryItem(item));
      }).join('')
  }
           </ul>
  `)
}
export default PostSummaryList;

function testPostComponent() {
  $('#wd-test-posts-component').append(PostSummaryList());
}
$(testPostComponent);
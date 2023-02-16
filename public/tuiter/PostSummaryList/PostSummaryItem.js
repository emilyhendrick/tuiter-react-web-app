
const PostSummaryItem = (post) => {
  return (`
  <li class="list-group-item">
        <div class="wd-single-post-container">
          <div class="mt-1 ms-1">
            <p class="wd-post-topic">${post.topic}</p>
            <p class="wd-post-author">${post.userName} <i class="fa fa-circle"></i><span
                class="wd-post-topic"> - ${post.time}</span></p>
            <p class="wd-post-text">${post.title}</p>
          </div>
          <img class="wd-post-image" src=${post.image}>
        </div>
      </li>
  `);
}
export default PostSummaryItem;

function testPostItemComponent() {
  const component = PostSummaryItem(
      {
        topic: 'Web Dev',
        userName: "Java",
        time: "2hr",
        title: "TESTING!!!!!",
        image: '../../images/react-blue.png',
      });
  console.log(component);
  $('#wd-test-posts-component').append(component);
}
$(testPostItemComponent);
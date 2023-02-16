const WhoToFollowListItem = (who) => {
  return (`
  <div class="list-group-item">
  <div class="wd-follow-account-card">
        <div class="wd-follow-account-card">
          <img class="wd-account-avatar"
               src=${who.avatarIcon}>
          <div class="ms-2">
            <p class="wd-post-author">${who.userName} <i class="fa fa-circle"></i></p>
            <p class="wd-post-topic">@${who.handle}</p>
          </div>
        </div>
        <input class="btn btn-primary rounded-pill" type="button" value="Follow">
      </div>
      </div>
  `)
}
export default WhoToFollowListItem;

function testFollowComponent() {
  const component = WhoToFollowListItem(
      {
        avatarIcon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
        userName: "Java",
        handle: "@Java"
      });
  $('#wd-test-follow-component').append(component);
}

$(testFollowComponent);
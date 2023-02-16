import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
  <!--- search bar --->
    <div class="wd-search-bar-container">
      <input class="wd-search-bar" type="text" value="Search Tuiter">
      <a href="explore-settings.html"><i class="fa fa-cog fa-2x"></i></a>
    </div>
    <!--- nav links --->
    <div class="wd-nav-link-div">
      <a href="for-you.html" class="wd-nav-links bg-primary">For you</a>
      <a href="trending.html" class="wd-nav-links">Trending</a>
      <a href="news.html" class="wd-nav-links">News</a>
      <a href="sports.html" class="wd-nav-links">Sports</a>
      <a href="entertainment.html" class="wd-nav-links d-none d-md-block">Entertainment</a>
    </div>

    <!--- suggested posts --->
    <div class="wd-splash-image-container">
      <img class="wd-splash-image mt-2"
           src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
      <h3 class="wd-bottom-left-text">SpaceX's Starship</h3>
    </div>
    ${PostSummaryList()}

 `);
}
export default ExploreComponent;
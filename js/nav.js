'use strict';

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug('navAllStories', evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on('click', '#nav-all', navAllStories);

/** Show story Submit form on click on "submit" */

function navStorySubmit(evt) {
  evt.preventDefault();
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}
$navSubmitStory.on('click', navStorySubmit);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug('navLoginClick', evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on('click', navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug('updateNavOnLogin');
  $('.main-nav-links').show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** Show favorites list when user clicks on "favorites" */
function navFavoritesClick(evt) {
  hidePageComponents();
  putFavStoriesOnPage();
}
$navFavorites.on('click', navFavoritesClick);

/** Show my list when user clicks on "favorites" */
function navFavoritesClick(evt) {
  hidePageComponents();
  putFavStoriesOnPage();
}
$navFavorites.on('click', navFavoritesClick);

/** Show my stories list when user clicks on "my stories" */
function navMyStoriesClick(evt) {
  hidePageComponents();
  putMyStoriesOnPage();
  $ownStories.show();
}
$navMyStories.on('click', navMyStoriesClick);

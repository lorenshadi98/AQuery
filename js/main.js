'use strict';

// So we don't have to keep re-finding things on page, find DOM elements once:

const $body = $('body');

const $storiesLoadingMsg = $('#stories-loading-msg');
const $allStoriesList = $('#all-stories-list');
const $favoritedStories = $('#all-favorite-stories');
const $ownStories = $('#my-stories');

const $loginForm = $('#login-form');
const $signupForm = $('#signup-form');
const $submitForm = $('#submit-form');

const $navSubmitStory = $('#nav-submit-story');
const $navFavorites = $('#nav-favorite-stories');
const $navMyStories = $('#nav-my-stories');

const $navLogin = $('#nav-login');
const $navUserProfile = $('#nav-user-profile');
const $navLogOut = $('#nav-logout');

/** To make it easier for individual components to show just themselves, this
 * is a useful function that hides pretty much everything on the page. After
 * calling this, individual components can re-show just what they want.
 */

function hidePageComponents() {
  const components = [
    $allStoriesList,
    $loginForm,
    $signupForm,
    $submitForm,
    $favoritedStories,
    $ownStories
  ];
  components.forEach((c) => c.hide());
}

/** Overall function to kick off the app. */

async function start() {
  console.debug('start');

  // "Remember logged-in user" and log in, if credentials in localStorage
  await checkForRememberedUser();
  await getAndShowStoriesOnStart();

  // if we got a logged-in user
  if (currentUser) updateUIOnUserLogin();
}

// Once the DOM is entirely loaded, begin the app

$(start);

import React from 'react';
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
import Main from '../components/Main';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

var routes = (
  <Router history={browserHistory} onUpdate={hashLinkScroll}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='unityForm'
        header='Fill our our Unity Form'
        component={PromptContainer} />
      <Route path='unityThoughts/:unityName'
        header='Your Thoughts'
        placeholderText='What are your thoughts?'
        textType='textarea'
        component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;

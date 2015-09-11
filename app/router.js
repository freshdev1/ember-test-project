import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('profile');
  this.route('logout');
  this.route('payment-types-list');
});

export default Router;

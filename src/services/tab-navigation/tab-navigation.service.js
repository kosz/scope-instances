(function() {

  function TabNavigation () {
    this.activeTab = 1;
  }

  TabNavigation.prototype = {
    changeTab: function (idx) {
      this.activeTab = idx;
    }
  };

  angular.module('scope-instances')
    .service('$tabNavigation', TabNavigation);

})();

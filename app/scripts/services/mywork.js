(function () {
  'use strict';

  angular
    .module('trishApp')
    .service('MyWork', MyWork);

  function MyWork () {

    var collection = [
      {
        image : 'webdesign/',
        link : '',
        text : 'Mobile mockup'
      },
      {
        image : 'webdesign/',
        link : '',
        text : 'Redesigned lavote.net'
      },
      {
        image : 'webdesign/',
        link : '',
        text : 'Live example of simplyintegrated design'
      },
      {
        image : 'webdesign/',
        link : '',
        text : 'Live example of new responsive ImplantDirect design'
      },
      {
        image : 'webdesign/',
        link : '',
        text : 'mockup of tru2print.com'
      },
      {
        image : 'webdesign/',
        link : '',
        text : 'Before and after I started the project'
      },
      {
        image : 'webdesign/',
        link : '',
        text : 'Parallax/ responsive site'
      },
      {
        image : 'webdesign/',
        link : '',
        text : 'Before and after I started the project'
      },
      {
        image : 'designDocs/',
        link : '',
        text : 'Analytics infoGraph'
      },
      {
        image : 'designDocs/',
        link : '',
        text : 'Wireframe'
      },
      {
        image : 'designDocs/',
        link : '',
        text : 'StyleGuide'
      },
      {
        image : 'designDocs/',
        link : '',
        text : 'New voting system concept'
      },
      {
        image : 'graphics/',
        link : '',
        text : 'UI elements'
      },
      {
        image : 'graphics/',
        link : '',
        text : 'First e-sample ballet eblast'
      },
      {
        image : 'graphics/',
        link : '',
        text : 'Election promo Kit: Flyer, web banner, icons, T-shirt, event print material'
      },
      {
        image : 'graphics/',
        link : '',
        text : 'Comic book design'
      },
      {
        image : 'graphics/',
        link : '',
        text : 'Music album cover'
      },
      {
        image : 'other/',
        link : '',
        text : 'SEO improvements'
      },
      {
        image : 'other/',
        link : '',
        text : 'Page vist improvements'
      },
      {
        image : 'other/',
        link : '',
        text : 'Heatmaps'
      },
      {
        image : 'other/',
        link : '',
        text : 'Digital Gov Summit Award for new website'
      }
    ];

    this.list = function (filterOn) {
      console.log('mywork list');
    };
    console.log('mywork');

  }

})();

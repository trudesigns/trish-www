(function () {
  'use strict';

  angular
    .module('trishApp')
    .service('MyWork', MyWork);

  function MyWork () {

    this.slides = [
      // WEBSITES
      {
        image : '/images/mywork/websites/1_responsive_phoneLayout.png',
        link : '',
        text : 'Mobile mockup'
      },
      {
        image : '/images/mywork/websites/2_LAcounty_homeScreen.png',
        link : 'http://lavote.net',
        text : 'Redesigned'
      },
      {
        image : '/images/mywork/websites/3_parallax_responsiveSITE.mov',
        link : '',
        text : 'Live example of simplyintegrated design'
      },
      {
        image : '/images/mywork/websites/4_responsiveSiteVideo.mov',
        link : '',
        text : 'Live example of new responsive ImplantDirect design'
      },
      {
        image : '/images/mywork/websites/5_truDesigns_mockup.png',
        link : '',
        text : 'mockup of tru2print.com'
      },
      {
        image : '/images/mywork/websites/6_newLACounty_beforeAfter.png',
        link : '',
        text : 'Before and after I started the project'
      },
      {
        image : '/images/mywork/websites/6_parallaxSite.png',
        link : '',
        text : 'Parallax/ responsive site'
      },
      {
        image : '/images/mywork/websites/7_newImplantDirect_beforeNafter.png',
        link : '',
        text : 'Before and after I started the project'
      },

      // DESIGN DOC
      {
        image : '/images/mywork/designDoc/1_analytics_infoGaph.png',
        link : '',
        text : 'Analytics infoGraph'
      },
      {
        image : '/images/mywork/designDoc/2_rwd_wireframe2.png',
        link : '',
        text : 'Wireframe'
      },
      {
        image : '/images/mywork/designDoc/3_ID_responsiveWebsite_styleguide.png',
        link : '',
        text : 'StyleGuide'
      },
      {
        image : '/images/mywork/designDoc/4_newVotingSystemConcept.png',
        link : '',
        text : 'New voting system concept'
      },

      // GRAPHICS
      {
        image : '/images/mywork/graphics/1_UI-Set.png',
        link : '',
        text : 'UI elements'
      },
      {
        image : '/images/mywork/graphics/2_esb_eblast.png',
        link : '',
        text : 'First e-sample ballet eblast'
      },
      {
        image : '/images/mywork/graphics/3_laVote_promoKit.png',
        link : '',
        text : 'Election promo Kit: Flyer, web banner, icons, T-shirt, event print material'
      },
      {
        image : '/images/mywork/graphics/4_comicbook.gif',
        link : '',
        text : 'Comic book design'
      },
      {
        image : '/images/mywork/graphics/5_IR_albumCover_sample.jpg',
        link : '',
        text : 'Music album cover'
      },

      // OTHER
      {
        image : '/images/mywork/other/1_SEO_improvments.png',
        link : '',
        text : 'SEO improvements'
      },
      {
        image : '/images/mywork/other/2_pageSessionImporovment.png',
        link : '',
        text : 'Page vist improvements'
      },
      {
        image : '/images/mywork/other/3_heatmaps.png',
        link : '',
        text : 'Heatmaps'
      },
      {
        image : '/images/mywork/other/4_ITaward.png',
        link : '',
        text : 'Digital Gov Summit Award for new website'
      }
    ];

  }

})();

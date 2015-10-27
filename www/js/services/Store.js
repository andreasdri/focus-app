angular.module('focus.services')
  .factory('Store', function() {



    var functions = {


      initStore: function (){
        console.log("Initializing Store")

        if (!window.store) {
          console.log('Store not available');
          return;
        }


        var platform = device.platform.toLowerCase();
        document.getElementsByTagName('body')[0].className = platform;

        // Enable maximum logging level
        store.verbosity = store.DEBUG;

        // Enable remote receipt validation
        store.validator = "https://api.fovea.cc:1982/check-purchase";

        store.refresh();


        console.log('Register Products');
        store.register({
          id:    'basic1', // id without package name!
          alias: 'Kunsten å slappe av!',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'basic2', // id without package name!
          alias: 'Om å sette seg mål',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'basic3', // id without package name!
          alias: 'Den jeg er',
          type:  store.NON_CONSUMABLE
        });

        store.register({
          id:    'basic4', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });
        store.register({
          id:    'basic5', // id without package name!
          alias: 'Kunsten å slappe av!',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'basic6', // id without package name!
          alias: 'Om å sette seg mål',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'basic7', // id without package name!
          alias: 'Den jeg er',
          type:  store.NON_CONSUMABLE
        });

        store.register({
          id:    'basic8', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'basic9', // id without package name!
          alias: 'Kunsten å slappe av!',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'basic10', // id without package name!
          alias: 'Om å sette seg mål',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'basic11', // id without package name!
          alias: 'Den jeg er',
          type:  store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic1', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic2', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic3', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic4', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic5', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic6', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic7', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic8', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic9', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic10', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic11', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic12', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic13', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic14', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic15', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });

        store.register({
          id:    'olympic16', // id without package name!
          alias: 'Mental tøffhet',
          type:   store.NON_CONSUMABLE
        });



        var p = store.get("basic1");
        p.owned = true;


        if(p.owned){
          console.log("owned");
        }
        else console.log(("not owned"));


        store.refresh();

      },

      /*
      Checks if the track with ID: trackID is owned by the user
       */
      trackOwned: function(trackID) {
        var p = store.get(trackID);
        return p.owned;
      },

      /*
      Purchases the track with ID: trackID
       */
      purchaseTrack: function(trackID) {
        var p = store.get(trackID);
        console.log("Purchasing track", trackID);

        store.order(p);

        store.when('product').approved(function(product) {

          console.log("purchased!")
          product.finish();

          store.refresh();
        });


      }


    }


    return functions;

  });

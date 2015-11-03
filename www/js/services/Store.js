angular.module('focus.services')
  .factory('Store', function(AudioLibrary) {



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

        console.log('Register Products');

        var sounds = AudioLibrary.getAllSounds();

        sounds.map(function(sound) {
          // Register all the sound tracks in the store\

          store.register({
            id: sound.id,
            alias: sound.title, //todo: dont use title as alias?
            type: store.NON_CONSUMABLE
          });


        });



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

        store.order(p).then(console.log(trackID, "ordered"));

        store.once(trackID).approved(function(product) {

          console.log("purchased!")
          product.finish();

        });

        store.refresh();

      }


    }


    return functions;

  });

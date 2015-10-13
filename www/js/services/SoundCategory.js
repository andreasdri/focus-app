angular.module('focus.services')
.factory('SoundCategory', function() {
    var categories = [
      {
        title: 'Avslapping',
        id: 'avslapping',
        description: 'hallo 1 sit amet, consectetur adipiscing elit. Duis consectetur sit amet nisl in bibendum. Duis scelerisque metus fermentum, ultricies sapien at, aliquam mauris. Morbi at odio non est suscipit interdum. Class aptent taciti sociosqu ad litora torquent per conubia.'
      },
      {
        title: 'Selvbilde',
        id: 'selvbilde',
        description: 'hallo 2 sit amet, consectetur adipiscing elit. Duis consectetur sit amet nisl in bibendum. Duis scelerisque metus fermentum, ultricies sapien at, aliquam mauris. Morbi at odio non est suscipit interdum. Class aptent taciti sociosqu ad litora torquent per conubia.'
      },
      {
        title: 'Fokusering',
        id: 'fokusering',
        description: 'hallo 3 sit amet, consectetur adipiscing elit. Duis consectetur sit amet nisl in bibendum. Duis scelerisque metus fermentum, ultricies sapien at, aliquam mauris. Morbi at odio non est suscipit interdum. Class aptent taciti sociosqu ad litora torquent per conubia.'
      },
      {
        title: 'Trening og konkurranse',
        id: 'trening og konkurranse',
        description: 'halloo 4, consectetur adipiscing elit. Duis consectetur sit amet nisl in bibendum. Duis scelerisque metus fermentum, ultricies sapien at, aliquam mauris. Morbi at odio non est suscipit interdum. Class aptent taciti sociosqu ad litora torquent per conubia.'
      },
      {
        title: 'Inspirasjon',
        id: 'inspirasjon',
        description: 'asdasdsadsad sit amet, consectetur adipiscing elit. Duis consectetur sit amet nisl in bibendum. Duis scelerisque metus fermentum, ultricies sapien at, aliquam mauris. Morbi at odio non est suscipit interdum. Class aptent taciti sociosqu ad litora torquent per conubia.'
      }
    ];
    return {
      getCategories: function() {
        return categories;
      }
    }
  });

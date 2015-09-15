angular.module('focus.services')
.factory('AudioLibrary', function() {
    var basic = [
      {
        src: 'sounds/basic/01.mp3',
        title: 'Kunsten å slappe av!',
        trackNumber: 1,
        description: 'En kortversjon av progressiv avspenning blir her introdusert (ca 12 minutter). Programmet å slappe av gjennom kontrastøvelser, samt at det mot slutten tar for seg kroppsscanning.',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/02.mp3',
        title: 'Om å sette seg mål',
        trackNumber: 2,
        description: 'Dette programmet kombinerer bruk av visualisering og det å sette seg konkrete mål for hver treningsøkt. Programmet tar også for seg hvordan du kan utfordre negative tanker og snu dette til en mer konstruktiv tenkning.',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/03.mp3',
        title: 'Den jeg er / Meg',
        trackNumber: 3,
        description: 'Programmet retter seg mot det å ha et selvbilde som bygger på egne premisser uavhengig av hva alle \
                      andre måtte mene og uavhengig av prestasjon. Innholdet tar for seg hvordan du bør se på deg selv \
                      utfra egne kriterier og hva som er viktig for deg. Hensikten er å løsrive seg fra hva alle andre måtte si \
                      og mene og skape større trygghet for egne vurderinger og meninger.',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/04.mp3',
        title: 'Mental tøffhet',
        subtitle: '- kunsten å takle forstyrrelser!',
        trackNumber: 4,
        description: 'Her er fokus å trene på det å takle ulike situasjoner eller påvirkninger som kan oppstå i løpet av en \
                      konkurranse, men også i livet generelt. Det dreier seg nødvendigvis ikke om å ta bort stresset men å \
                      lære seg å håndtere det på en bedre måte',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/05.mp3',
        title: 'Time-out',
        subtitle: '- en pust i hverdagen, oppmerksomhetstrening',
        trackNumber: 5,
        description: 'Oppmerksomhetstrening er en viktig ingrediens i den mentale treningen på elitenivå. Her får utøveren \
                      en liten forsmak på hvordan denne type trening kan være.',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/06.mp3',
        title: 'Instrumental',
        trackNumber: 6,
        description: 'TODO: Find something to put here',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/07.mp3',
        title: 'Konkurranseforberedelser',
        trackNumber: 7,
        description: 'Hvordan det hele henger sammen. Hvordan måten du tenker på påvirker inngangen til konkurransen \
                      eller testen og hvordan du best mulig forbereder deg for å få til en optimal prestasjon.',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/08.mp3',
        title: 'Nullstille',
        trackNumber: 8,
        description: 'Refokus etter en konkurranse eller test – enten det har gått bra eller dårlig!',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/09.mp3',
        title: 'Visualisering',
        trackNumber: 9,
        description: 'TODO: Find something to put here',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/10.mp3',
        title: 'Søvn',
        trackNumber: 10,
        description: 'Variant av kroppscanning dersom en sliter med søvn.',
        art: 'img/ionic.png'
      },
      {
        src: 'sounds/basic/11.mp3',
        title: 'Instrumental - post søvn',
        trackNumber: 11,
        description: 'TODO: Find something to put here',
        art: 'img/ionic.png'
      }
    ];

    var sounds = basic; // TODO: Make switching between 'basic' and 'olympic' versions possible

    return {

      getAllSounds: function() {
        return sounds;
      }

    };

  });

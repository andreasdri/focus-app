angular.module('focus.services')
.factory('AudioLibrary', function() {
    var sounds = [
      {
        src: 'sounds/basic/01.mp3',
        title: 'Kunsten å slappe av!',
        trackNumber: 1,
        description: 'En kortversjon av progressiv avspenning blir her introdusert (ca 12 minutter). Programmet å slappe av gjennom kontrastøvelser, samt at det mot slutten tar for seg kroppsscanning.',
        art: 'img/ionic.png',
        type: 'basic',
        category: 'avslapping'
      },
      {
        src: 'sounds/basic/02.mp3',
        title: 'Om å sette seg mål',
        trackNumber: 2,
        description: 'Dette programmet kombinerer bruk av visualisering og det å sette seg konkrete mål for hver treningsøkt. Programmet tar også for seg hvordan du kan utfordre negative tanker og snu dette til en mer konstruktiv tenkning.',
        art: 'img/ionic.png',
        type: 'basic',
        category: 'selvbilde'
      },
      {
        src: 'sounds/basic/03.mp3',
        title: 'Den jeg er / Meg',
        trackNumber: 3,
        description: 'Programmet retter seg mot det å ha et selvbilde som bygger på egne premisser uavhengig av hva alle \
                      andre måtte mene og uavhengig av prestasjon. Innholdet tar for seg hvordan du bør se på deg selv \
                      utfra egne kriterier og hva som er viktig for deg. Hensikten er å løsrive seg fra hva alle andre måtte si \
                      og mene og skape større trygghet for egne vurderinger og meninger.',
        art: 'img/ionic.png',
        type: 'basic',
        category: 'selvbilde'
      },
      {
        src: 'sounds/basic/04.mp3',
        title: 'Mental tøffhet',
        subtitle: '- kunsten å takle forstyrrelser!',
        trackNumber: 4,
        description: 'Her er fokus å trene på det å takle ulike situasjoner eller påvirkninger som kan oppstå i løpet av en \
                      konkurranse, men også i livet generelt. Det dreier seg nødvendigvis ikke om å ta bort stresset men å \
                      lære seg å håndtere det på en bedre måte',
        art: 'img/ionic.png',
        type: 'basic',
        category: 'selvbilde'
      },
      {
        src: 'sounds/basic/05.mp3',
        title: 'Time-out',
        subtitle: '- en pust i hverdagen, oppmerksomhetstrening',
        trackNumber: 5,
        description: 'Oppmerksomhetstrening er en viktig ingrediens i den mentale treningen på elitenivå. Her får utøveren \
                      en liten forsmak på hvordan denne type trening kan være.',
        art: 'img/ionic.png',
        type: 'basic',
        category: 'fokusering'
      },
      {
        src: 'sounds/basic/06.mp3',
        title: 'Instrumental',
        trackNumber: 6,
        description: 'TODO: Find something to put here',
        art: 'img/ionic.png',
        type: 'basic',
        category: 'avslapping'
      },
      {
        src: 'sounds/basic/07.mp3',
        title: 'Konkurranseforberedelser',
        trackNumber: 7,
        description: 'Hvordan det hele henger sammen. Hvordan måten du tenker på påvirker inngangen til konkurransen \
                      eller testen og hvordan du best mulig forbereder deg for å få til en optimal prestasjon.',
        art: 'img/ionic.png',
        type: 'basic',
        category: 'trening og konkurranse'
      },
      {
        src: 'sounds/basic/08.mp3',
        title: 'Nullstille',
        trackNumber: 8,
        description: 'Refokus etter en konkurranse eller test – enten det har gått bra eller dårlig!',
        art: 'img/ionic.png',
        type: 'basic',
        category: 'fokusering'
      },
      {
        src: 'sounds/basic/09.mp3',
        title: 'Visualisering',
        trackNumber: 9,
        description: 'TODO: Find something to put here',
        art: 'img/ionic.png',
        type: 'basic',
        category: 'trening og konkurranse'
      },
      {
        src: 'sounds/basic/10.mp3',
        title: 'Søvn',
        trackNumber: 10,
        description: 'Variant av kroppscanning dersom en sliter med søvn.',
        art: 'img/ionic.png',
        type: 'basic',
        category: 'avslapping'
      },
      {
        src: 'sounds/basic/11.mp3',
        title: 'Instrumental - post søvn',
        trackNumber: 11,
        description: 'TODO: Find something to put here',
        art: 'img/ionic.png',
        type: 'basic',
        category: 'avslapping'
      },
      {
        src: 'sounds/olympic/01.mp3',
        title: 'State of Mind',
        trackNumber: 12,
        description: 'State of Mind er et dikt som er skrevet av Jesse Owens og som her blir lest av Kåre Conradi. Jesse Owens ble en legende da han vant 4 Olympiske Gull i 1936 i Tyskland, Med sin bakrgunn fra Alabama, Usa, og som den syvende blant elleve søsken så var det ikke mange som hadde tro på at den spe, lille gutten skulle bli en av USA’s største legender. Bli inspirert av hans tanker!',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'inspirasjon'
      },
      {
        src: 'sounds/olympic/02.mp3',
        title: 'Avspenningsprogram - lang',
        trackNumber: 13,
        description: 'Dette programmet er et langt avspenningsprogram som tar en grundig gjennomgang av hele kroppen. Det finnes en rekke ulike former for avspenningstrening. Det vi har laget her baserer seg på en teknikk som heter Progressiv avspenning. Det betyr at du skal lære å kjenne forskjell på spent og avspent muskulatur. Dette er en fin måte å slappe av på og det har en god restitusjonseffekt. Avspenning er også et godt middel hvis du har problemer med å sove eller føler behov for å koble helt ut. Det er ingen negative effekter av å kjøre avspenningstrening. Det eneste vi ikke anbefaler er å kjøre det like før konkurranse så sant du ikke har prøvd ut dette før og hatt god erfaring med det. Du kan nemlig oppleve at du blir for avslappet!',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'avslapping'
      },
      {
        src: 'sounds/olympic/03.mp3',
        title: 'Avspenningsprogram - kort',
        trackNumber: 14,
        description: 'Dette er en kortere variant av "Avspenningsprogram - lang". Velg det som passer for deg! Ofte kan det være greit å kjøre det lange programmet 3-4 x pr uke i to til tre uker før du evt går over til en kortere varianten. Det finnes en rekke ulike former for avspenningstrening. Det vi har laget her baserer seg på en teknikk som heter Progressiv avspenning. Det betyr at du skal lære å kjenne forskjell på spent og avspent muskulatur. Dette er en fin måte å slappe av på og det har en god restitusjonseffekt. Avspenning er også et godt middel hvis du har problemer med å sove eller føler behov for å koble helt ut. Det er ingen negative effekter av å kjøre avspenningstrening. Det eneste vi ikke anbefaler er å kjøre det like før konkurranse så sant du ikke har prøvd ut dette før og hatt god erfaring med det. Du kan nemlig oppleve at du blir for avslappet!',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'avslapping'
      },
      {
        src: 'sounds/olympic/04.mp3',
        title: 'Avspenningsprogram - fokus på varme og tyngde',
        trackNumber: 15,
        description: 'Dette er en kortere variant av "Avspenningsprogram - lang". Velg det som passer for deg! Ofte kan det være greit å kjøre det lange programmet 3-4 x pr uke i to til tre uker før du evt går over til en kortere varianten. Det finnes en rekke ulike former for avspenningstrening. Det vi har laget her baserer seg på en teknikk som heter Progressiv avspenning. Det betyr at du skal lære å kjenne forskjell på spent og avspent muskulatur. Dette er en fin måte å slappe av på og det har en god restitusjonseffekt. Avspenning er også et godt middel hvis du har problemer med å sove eller føler behov for å koble helt ut. Det er ingen negative effekter av å kjøre avspenningstrening. Det eneste vi ikke anbefaler er å kjøre det like før konkurranse så sant du ikke har prøvd ut dette før og hatt god erfaring med det. Du kan nemlig oppleve at du blir for avslappet!',
        art: 'img/ionic.img',
        type: 'olympic',
        category: 'avslapping'
      },
      {
        src: 'sounds/olympic/05.mp3',
        title: 'Treningsforberedelser',
        trackNumber: 16,
        description: 'Det er viktig å ha et klart fokus i forkant av treningsøkten. Treningen blir både mer effektiv og får bedre kvalitet når du har en klar agenda. Dette programmet setter deg i rett treningsmodus og du lærer deg å ha fokus på det som er riktig for deg. Dette er like relevant i jobb eller skole) sammenheng. Du har oppgaver du skal løse eller ting du vil bli bedre på. Bruk dette programmet 2-3 x pr uke, gjerne etter en avspenningsøkt, eller helt for seg selv.',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'trening og konkurranse'
      },
      {
        src: 'sounds/olympic/06.mp3',
        title: 'Tankekontroll og selvtillitstrening',
        trackNumber: 17,
        description: 'Dette er et program som hjelper deg til å fokusere på de sterke sidene ved deg selv. Selvtillit kan variere og svinge fra dag til dag og da kan det være nyttig å minne seg selv på det som er bra! Utøvere som har benyttet dette programmet har sagt at de synes det er inspirerende å lytte til dette både i forkant av trening og konkurranse.',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'selvbilde'
      },
      {
        src: 'sounds/olympic/07.mp3',
        title: 'Refokusering',
        trackNumber: 18,
        description: 'Både under vanlige konkurranser, men kanskje i mesterskap spesielt, er det mange ting som utfordrer fokuset ditt. Men det er faktisk ditt valg hva du velger å bli distrahert av! Hvis du opplever at det er litt ”kaos” i hodet og at det er vanskelig å konsentrerer seg, da er dette er fint program for nettopp å trene på dette. Du lærer å skille det viktige fra det mindre viktige og blir mindre sårbar for forstyrrelser. \
                      Det daglige stresset og de små forstyrrelsene stjeler energi. Dette programmet kan være spesielt nyttig når du vet du står foran en travel periode, eller opplever at kravene til deg overstiger ferdighetene dine. \
                      Kan både kjøres om kvelden eller i løpet av dagen.',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'fokusering'
      },
      {
        src: 'sounds/olympic/08.mp3',
        title: 'Konkurranseforberedelser - om å sette det hele sammen!',
        trackNumber: 19,
        description: 'Dette er programmet som setter det hele sammen. Det du har trent på gjennom hele året – gjennom mange år – skal få lov til å utfolde seg. Det handler om å stole på de kvaliteter du har opparbeidet deg og ”la det skje”. Enkle arbeidsoppgaver kan være nyttig å hvile tankene på – bare ikke gå for mye i detalj. Vær 100% tilstede i øyeblikket! Dette programmet kan kjøres samme dag som konkurranse, men test det gjerne ut litt i forkant slik at du vet hva som kommer',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'trening og konkurranse'
      },
      {
        src: 'sounds/olympic/09.mp3',
        title: 'Kroppscanning',
        trackNumber: 20,
        description: 'Dette er en kombinert oppmerksomhetsstrening, samtidig som mange opplever at denne øvelsen er ekstremt avslappende. Du øver deg på å være tilstede HER og NÅ. Dette er et program som kun inneholder instruksjoner og ingen musikk. Pianostykket som følger etterpå er tilpasset tempoet i selve kroppsscanningen.',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'fokusering'
      },
      {
        src: 'sounds/olympic/10.mp3',
        title: 'Concentrations 1 - Instrumental',
        trackNumber: 21,
        description: '',
        art: 'img/ionic.img',
        type: 'olympic',
        category: 'fokusering'
      },
      {
        src: 'sounds/olympic/11.mp3',
        title: 'Oppmerksomhetsmeditasjon',
        trackNumber: 22,
        description: 'Når vi konkurrerer, men også ellers i tilværelsen er det en stor fordel å være 100% tilstede – ikke tenke på det som har skjedd eller det som skal komme til å skje. Ofte, når vi blir engstelige eller strever med å holde fokus på det vi ønsker, så er problemet at vi ikke klarer å være 100% tilstede i nå-tiden. Dette programmet hjelper deg til dette å trene på å være mer i NU-et. Programmet har kun instruksjoner og ikke musikk.',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'fokusering'
      },
      {
        src: 'sounds/olympic/12.mp3',
        title: 'Concentrations 2 - Instrumental',
        trackNumber: 23,
        description: '',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'fokusering'
      },
      {
        src: 'sounds/olympic/13.mp3',
        title: 'Pusterommet',
        trackNumber: 24,
        description: 'Dette er en mini-versjon av et mentalt avkoblingsprogram. Har du behov for en liten mental time-out er dette programmet veldig nyttig. Du lærer deg det fort og kan brukes hvor som helst!',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'avslapping'
      },
      {
        src: 'sounds/olympic/14.mp3',
        title: 'Oppmerksomhetstrening på pust',
        trackNumber: 25,
        description: 'Vi puster hver dag og natt uten at vi tenker så mye på det. Men faktum er at pusten er et av våre beste stikkord for å dra oppmerksomheten vår HER og NÅ. Det er derfor veldig positivt å bruke pusten som et middel til å styre oppmerksomheten vår. Dette kan du benytte hvor som helst og når som helst. Ved å bli mer bevisst på pust så vil du få en naturlig tilstedeværelse der du er.',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'fokusering'
      },
      {
        src: 'sounds/olympic/15.mp3',
        title: 'Concentrations 3 – Instrumental',
        trackNumber: 26,
        description: '',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'fokusering'
      },
      {
        src: 'sounds/olympic/16.mp3',
        title: 'Instrumental',
        trackNumber: 27,
        description: '',
        art: 'img/ionic.png',
        type: 'olympic',
        category: 'avslapping'
      }
    ];

    return {

      getAllSounds: function() {
        return sounds;
      }

    };

  });

angular.module('focus.services')
.factory('AthleteData', function() {
    var athletes = [
      {
        name: "Helene Olafsen",
        img: "img/athletes/heleneO_150x150.jpg",
        subtext: "Snøbrettkjører",
        quote: "Å være tilstede mentalt er helt avgjørende for å kunne forbedre de små tingene som gir deg motivasjon, som gir deg glede, som gjør deg bedre – som gjør deg best"
      },
      {
        name: "Olaf Tufte",
        img: "img/athletes/olaf_tufte.jpg",
        subtext: "Roer",
        quote: "Et viktig element i iMax:Focus er å øve seg på å bruke energien på det som kan gjøre deg bedre. La ikke uvesentligheter og mulige energitappere 'sette seg fast i hodet' og forstyrre fokus. Det som ikke er viktig skal man kun 'Registrere og ikke engasjere' seg i."
      },
      {
        name: "Alexander Dale Oen",
        img: "img/athletes/alexander_dale_oen.jpg",
        subtext: "Svømmer",
        quote: "iMax:Focus er selve forskjellen mellom et topp løp og et middels løp. Alle mine fysiske forberedelser kan være optimale, men det er bortkastet om jeg ikke er tilstede og mentalt fokusert på målet og utførelsen."
      },

      {
        name: "Mette Solli",
        img: "img/athletes/mette_solli.jpg",
        subtext: "Kickbokser",
        quote: "Tilstedeværelse i det du gjør er mer enn bare å være fokusert og konsentrert. Det handler om å være tilstede i kroppen og sinnet, få kontroll på pusten. Det handler om å kjenne etter å være våken i seg selv for å prestere bedre, håndtere ytre og indre stress, og for å kjenne på de små opplevelsene i treningen som bidrar til de store opplevelsene i kamp."
      },
      {
        name: "Suzann Pettersen",
        img: "img/athletes/tutta1.jpg",
        subtext: "Golfer",
        quote: "iMax:Focus er kritisk god prioritering og å ta de rette valg underveis, for så å ta ut dette i konkurransene."
      },
      {
        name: "Fredrik Meek",
        img: "img/athletes/fredrik_m_150x150.jpg",
        subtext: "World Skills/Billakkering",
        quote: "Mental trening har lært meg en tenkemåte som gjør at jeg takler stress under konkurranse. Jeg har mine arbeidsoppgaver mer klart i fokus."
      },
      {
        name: "Anders Nilsen",
        img: "img/athletes/andersnilsen_1.jpg",
        subtext: "Fotojournalist / Grunder av Fotografiutdanningen ved Norges Kreative Fagskole",
        quote: "Det handler om å rydde opp i hodet, prioritere de viktige tingene i riktig rekkefølge, sette seg overkommelige, (eller høye mål) og finne den riktige motivasjonen du trenger for å glede deg over det du gjør på jobb eller på trening, noe som igjen skaper bedre resultater."
      },
      {
        name: "Marit Breivik",
        img: "/img/athletes/MaritBreivik_150x150.jpg",
        subtext: "Hovedcoach Lagspillidretter / Landslagstrener 1994-2009, med 13 mesterskapsmedaljer (EM, VM, OL)",
        quote: "Topp prestasjon handler om å være i 'nuet'! Til stede, på trening og i konkurranse, her og nå! Nøkkelen til dette? Oppmerksomhetsprogrammene i iMax:Focus gir deg god veiledning i å øke tilstedeværelsen din både i hverdagen og på trening!"
      },
      {
        name: "Frank Eirik Abrahamsen",
        img: "img/athletes/frank_abrahamsen_150x150.jpg",
        subtext: "Doktorgrad i idrettspsykologi ved Norges Idrettshøgskole, med motivasjon og prestasjonsangst i eliteidrett i fokus.",
        quote: "'Sammenhengen mellom å tenke rett og gjøre rett er ikke 100%, men sammenhengen mellom å tenke feil og gjøre feil er mye større' (Bob Rotella). Å lære seg å tenke rett til rett tid – tar tid. Mange utøvere sender e-poster og takker for bedre prestasjoner etter at de har øvd på å være til stede, med rett fokus til rett tid. iMax:Focus gir deg en 'head start'!"
      }
    ];

    return {
      getAthletes: function() {
        return athletes;
      }
    }
  });

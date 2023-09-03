import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("songs_bands").del();
  await knex("songs_genres").del();
  await knex("songs_albums").del();
  await knex("albums_genres").del();
  await knex("bands_genres").del();
  await knex("bands_members").del();
  await knex("songs").del();
  await knex("members").del();
  await knex("genres").del();
  await knex("albums").del();
  await knex("bands").del();
  await knex("users").del();

  const bands = await knex("bands")
    .insert([
      {
        id: 1,
        name: "The Beatles",
        formed_year: 1960,
        country: "United Kingdom",
        description:
          "One of the most influential bands in the history of music.",
      },
      {
        id: 2,
        name: "Nirvana",
        formed_year: 1987,
        country: "United States",
        description: "Iconic rock band from the 90s.",
      },
      {
        id: 3,
        name: "Pearl Jam",
        formed_year: 1990,
        country: "United States",
        description:
          "Alternative rock band known for their energetic live performances.",
      },
      {
        id: 4,
        name: "The Rolling Stones",
        formed_year: 1962,
        country: "United Kingdom",
        description: "Legendary rock band with a decades-spanning career.",
      },
      {
        id: 5,
        name: "The Doors",
        formed_year: 1965,
        country: "United States",
        description: "Psychedelic rock band known for their poetic lyrics.",
      },
      {
        id: 6,
        name: "Michael Jackson",
        formed_year: 1964,
        country: "United States",
        description:
          "King of Pop and one of the best-selling music artists of all time.",
      },
      {
        id: 7,
        name: "The Chemical Brothers",
        formed_year: 1989,
        country: "United Kingdom",
        description: "Electronic music duo known for their innovative sound.",
      },
      {
        id: 8,
        name: "Dua Lipa",
        formed_year: 2015,
        country: "United Kingdom",
        description: "Pop sensation known for her powerful vocals.",
      },
      {
        id: 9,
        name: "Elton John",
        formed_year: 1962,
        country: "United Kingdom",
        description: "Piano rock legend with a prolific career.",
      },
      {
        id: 10,
        name: "Queen",
        formed_year: 1970,
        country: "United Kingdom",
        description: "Iconic rock band fronted by Freddie Mercury.",
      },
    ])
    .returning("id");

  await knex("users").insert([
    {
      id: 1,
      nick: "john_doe",
      email: "john@example.com",
      password: "$2b$10$RGlut24nAd305R0lCw.6hutJXhIxIrv3thdyexvk49CBR2PHz8OgC", // john
      description: "Hello, I'm John. Nice to meet you!",
      permission: 1,
    },
    {
      id: 2,
      nick: "jane_smith",
      email: "jane@example.com",
      password: "$2b$10$dUPqKayDi8BBq1WnxK/5JOA95GNWS7L0aNrM7rnLa8dTUBNPb6Mca", // jane
      description: "Hi there! I'm Jane.",
      permission: 2,
    },
    {
      id: 3,
      nick: "musiclover123",
      email: "music@example.com",
      password: "$2b$10$qw/Qd9DTdTuNvz1XGsAOh.sTHFpWG/EWWnqMqH.6OuFQkx6tSSmtW", // music
      description: "Music enthusiast. Let's talk about music!",
      permission: 3,
    },
    {
      id: 4,
      nick: "rockstar89",
      email: "rockstar@example.com",
      password: "$2b$10$..ltJPEWZFlHE7ywW2MNLu3BP4jzmWvmtGEuDIWzAsxBq87uvqWSW", // rock
      description: "Rock and roll forever!",
      permission: 2,
    },
    {
      id: 5,
      nick: "popfanatic",
      email: "popfan@example.com",
      password: "$2b$10$LyKs2YvHel2cdUhuAiXm9eYOsteiGASWLbzfdfKkyaauKTrfL3JmK", // pop
      description: "I love pop music and dancing!",
      permission: 1,
    },
    {
      id: 6,
      nick: "metalhead666",
      email: "metal@example.com",
      password: "$2b$10$9iXMOJ3TgvkPJwv2g7vbge0jyCM4R6y7gVCjV5YpU7WWedgyi0Nge", // metal
      description: "Metalhead and proud!",
      permission: 3,
    },
    {
      id: 7,
      nick: "classical_music",
      email: "classical@example.com",
      password: "$2b$10$ST4IzBks2AUWi/4/Ixu2weH8ec/3xjTK2wjDlzGfaKSprXbVtNwBC", // classical
      description: "Appreciating the beauty of classical music.",
      permission: 1,
    },
    {
      id: 8,
      nick: "hiphoplover",
      email: "hiphop@example.com",
      password: "$2b$10$s2GPhZ.qh/S5Bd6r87yBbuWAuKa9V3YJUyFshxU6w34Y/kzONmNau", // hip
      description: "Hip-hop is my lifestyle.",
      permission: 2,
    },
    {
      id: 9,
      nick: "countrygirl",
      email: "country@example.com",
      password: "$2b$10$dHA7t46GeytoMdNikWtNOOSa6YCF2qwJFJNXMxVGHQllUNw4cLthu", // country
      description: "Living the country music dream.",
      permission: 1,
    },
    {
      id: 10,
      nick: "djparty",
      email: "dj@example.com",
      password: "$2b$10$VMp9ptBJ1AWzHQ4OW/9BL.GrGScTqSmdPFc1w2ub3kVByLVsnUixm", // party
      description: "Let's get the party started!",
      permission: 3,
    },
  ]);

  const members = await knex("members")
    .insert([
      {
        id: 1,
        name: "John Lennon",
        instrument: "Vocals, Guitar",
        birth: "1940-10-09",
        description: "Co-founder of The Beatles.",
      },
      {
        id: 2,
        name: "Paul McCartney",
        instrument: "Vocals, Bass, Guitar",
        birth: "1942-06-18",
        description: "Co-founder of The Beatles.",
      },
      {
        id: 3,
        name: "George Harrison",
        instrument: "Vocals, Guitar",
        birth: "1943-02-25",
        description: "Co-founder of The Beatles.",
      },
      {
        id: 4,
        name: "Ringo Starr",
        instrument: "Vocals, Drums",
        birth: "1940-07-07",
        description: "Drummer of The Beatles.",
      },
      {
        id: 5,
        name: "Kurt Cobain",
        instrument: "Vocals, Guitar",
        birth: "1967-02-20",
        description: "Lead vocalist and guitarist of Nirvana.",
      },
      {
        id: 6,
        name: "Krist Novoselic",
        instrument: "Bass",
        birth: "1965-05-16",
        description: "Bassist of Nirvana.",
      },
      {
        id: 7,
        name: "Dave Grohl",
        instrument: "Drums",
        birth: "1969-01-14",
        description: "Drummer of Nirvana.",
      },
      {
        id: 8,
        name: "Eddie Vedder",
        instrument: "Vocals, Guitar",
        birth: "1964-12-23",
        description: "Lead vocalist of Pearl Jam.",
      },
      {
        id: 9,
        name: "Stone Gossard",
        instrument: "Guitar",
        birth: "1966-07-20",
        description: "Guitarist of Pearl Jam.",
      },
      {
        id: 10,
        name: "Jeff Ament",
        instrument: "Bass",
        birth: "1963-03-10",
        description: "Bassist of Pearl Jam.",
      },
      {
        id: 11,
        name: "Mike McCready",
        instrument: "Guitar",
        birth: "1965-04-05",
        description: "Guitarist of Pearl Jam.",
      },
      {
        id: 12,
        name: "Matt Cameron",
        instrument: "Drums",
        birth: "1962-11-28",
        description: "Drummer of Pearl Jam.",
      },
      {
        id: 13,
        name: "Mick Jagger",
        instrument: "Vocals",
        birth: "1943-07-26",
        description: "Lead vocalist of The Rolling Stones.",
      },
      {
        id: 14,
        name: "Keith Richards",
        instrument: "Guitar",
        birth: "1943-12-18",
        description: "Guitarist of The Rolling Stones.",
      },
      {
        id: 15,
        name: "Charlie Watts",
        instrument: "Drums",
        birth: "1941-06-02",
        description: "Drummer of The Rolling Stones.",
      },
      {
        id: 16,
        name: "Ringo Wood",
        instrument: "Guitar",
        birth: "1947-06-01",
        description: "Guitarist of The Rolling Stones.",
      },
      {
        id: 17,
        name: "Jim Morrison",
        instrument: "Vocals",
        birth: "1943-12-08",
        description: "Lead vocalist of The Doors.",
      },
      {
        id: 18,
        name: "Ray Manzarek",
        instrument: "Keyboards",
        birth: "1939-02-12",
        description: "Keyboardist of The Doors.",
      },
      {
        id: 19,
        name: "Robby Krieger",
        instrument: "Guitar",
        birth: "1946-01-08",
        description: "Guitarist of The Doors.",
      },
      {
        id: 20,
        name: "John Densmore",
        instrument: "Drums",
        birth: "1944-12-01",
        description: "Drummer of The Doors.",
      },
      {
        id: 21,
        name: "Michael Jackson",
        instrument: "Vocals",
        birth: "1958-08-29",
        description: "The King of Pop.",
      },
      {
        id: 22,
        name: "Tom Rowlands",
        instrument: "Synthesizers, Keyboards",
        birth: "1971-01-11",
        description: "One half of The Chemical Brothers.",
      },
      {
        id: 23,
        name: "Ed Simons",
        instrument: "Synthesizers, Keyboards",
        birth: "1970-06-09",
        description: "One half of The Chemical Brothers.",
      },
      {
        id: 24,
        name: "Dua Lipa",
        instrument: "Vocals",
        birth: "1995-08-22",
        description: "English singer-songwriter.",
      },
      {
        id: 25,
        name: "Elton John",
        instrument: "Vocals, Piano",
        birth: "1947-03-25",
        description: "English singer-songwriter.",
      },
      {
        id: 26,
        name: "Freddie Mercury",
        instrument: "Vocals, Piano",
        birth: "1946-09-05",
        description: "Lead vocalist of Queen.",
      },
      {
        id: 27,
        name: "Brian May",
        instrument: "Guitar",
        birth: "1947-07-19",
        description: "Guitarist of Queen.",
      },
      {
        id: 28,
        name: "Roger Taylor",
        instrument: "Drums",
        birth: "1949-07-26",
        description: "Drummer of Queen.",
      },
      {
        id: 29,
        name: "John Deacon",
        instrument: "Bass",
        birth: "1951-08-19",
        description: "Bassist of Queen.",
      },
    ])
    .returning("id");

  // Insert seed entries
  const bandMembers = [
    { band_id: bands[0].id, member_id: members[0].id }, // John Lennon to The Beatles
    { band_id: bands[0].id, member_id: members[1].id }, // Paul McCartney to The Beatles
    { band_id: bands[0].id, member_id: members[2].id }, // George Harrison to The Beatles
    { band_id: bands[0].id, member_id: members[3].id }, // Ringo Starr to The Beatles

    { band_id: bands[1].id, member_id: members[4].id }, // Kurt Cobain to Nirvana
    { band_id: bands[1].id, member_id: members[5].id }, // Krist Novoselic to Nirvana
    { band_id: bands[1].id, member_id: members[6].id }, // Dave Grohl to Nirvana

    { band_id: bands[2].id, member_id: members[7].id }, // Eddie Vedder to Pearl Jam
    { band_id: bands[2].id, member_id: members[8].id }, // Stone Gossard to Pearl Jam
    { band_id: bands[2].id, member_id: members[9].id }, // Jeff Ament to Pearl Jam
    { band_id: bands[2].id, member_id: members[10].id }, // Mike McCready to Pearl Jam
    { band_id: bands[2].id, member_id: members[11].id }, // Matt Cameron to Pearl Jam

    { band_id: bands[3].id, member_id: members[12].id }, // Mick Jagger to The Rolling Stones
    { band_id: bands[3].id, member_id: members[13].id }, // Keith Richards to The Rolling Stones
    { band_id: bands[3].id, member_id: members[14].id }, // Charlie Watts to The Rolling Stones
    { band_id: bands[3].id, member_id: members[15].id }, // Ringo Wood to The Rolling Stones

    { band_id: bands[4].id, member_id: members[16].id }, // Jim Morrison to The Doors
    { band_id: bands[4].id, member_id: members[17].id }, // Ray Manzarek to The Doors
    { band_id: bands[4].id, member_id: members[18].id }, // Robby Krieger to The Doors
    { band_id: bands[4].id, member_id: members[19].id }, // John Densmore to The Doors

    { band_id: bands[5].id, member_id: members[20].id }, // Michael Jackson (solo artist)

    { band_id: bands[6].id, member_id: members[21].id }, // Tom Rowlands (The Chemical Brothers)
    { band_id: bands[6].id, member_id: members[22].id }, // Ed Simons (The Chemical Brothers)

    { band_id: bands[7].id, member_id: members[23].id }, // Dua Lipa (solo artist)

    { band_id: bands[8].id, member_id: members[24].id }, // Elton John (solo artist)

    { band_id: bands[9].id, member_id: members[25].id }, // Freddie Mercury (Queen)
    { band_id: bands[9].id, member_id: members[26].id }, // Brian May (Queen)
    { band_id: bands[9].id, member_id: members[27].id }, // Roger Taylor (Queen)
    { band_id: bands[9].id, member_id: members[28].id }, // John Deacon (Queen)
  ];

  await knex("bands_members").insert(bandMembers);

  const albums = await knex("albums")
    .insert([
      {
        id: 1,
        title: "Abbey Road",
        band_id: bands[0].id,
        release_year: 1969,
        description: "Iconic album by The Beatles.",
      },
      {
        id: 2,
        title: "Nevermind",
        band_id: bands[1].id,
        release_year: 1991,
        description: "Breakthrough album by Nirvana.",
      },
      {
        id: 3,
        title: "Ten",
        band_id: bands[2].id,
        release_year: 1991,
        description: "Debut album by Pearl Jam.",
      },
      {
        id: 4,
        title: "Sticky Fingers",
        band_id: bands[3].id,
        release_year: 1971,
        description: "Classic album by The Rolling Stones.",
      },
      {
        id: 5,
        title: "The Doors",
        band_id: bands[4].id,
        release_year: 1967,
        description: "Debut album by The Doors.",
      },
      {
        id: 6,
        title: "Thriller",
        band_id: bands[5].id,
        release_year: 1982,
        description: "Best-selling album of all time by Michael Jackson.",
      },
      {
        id: 7,
        title: "Surrender",
        band_id: bands[6].id,
        release_year: 1999,
        description: "Album by The Chemical Brothers.",
      },
      {
        id: 8,
        title: "Future Nostalgia",
        band_id: bands[7].id,
        release_year: 2020,
        description: "Album by Dua Lipa.",
      },
      {
        id: 9,
        title: "Goodbye Yellow Brick Road",
        band_id: bands[8].id,
        release_year: 1973,
        description: "Classic album by Elton John.",
      },
      {
        id: 10,
        title: "A Night at the Opera",
        band_id: bands[9].id,
        release_year: 1975,
        description: "Iconic album by Queen.",
      },
      {
        id: 11,
        title: "Let It Be",
        band_id: bands[0].id,
        release_year: 1970,
        description: "Album by The Beatles.",
      },
      {
        id: 12,
        title: "In Utero",
        band_id: bands[1].id,
        release_year: 1993,
        description: "Album by Nirvana.",
      },
      {
        id: 13,
        title: "Vs.",
        band_id: bands[2].id,
        release_year: 1993,
        description: "Album by Pearl Jam.",
      },
      {
        id: 14,
        title: "Exile on Main St.",
        band_id: bands[3].id,
        release_year: 1972,
        description: "Album by The Rolling Stones.",
      },
      {
        id: 15,
        title: "L.A. Woman",
        band_id: bands[4].id,
        release_year: 1971,
        description: "Album by The Doors.",
      },
      {
        id: 16,
        title: "Bad",
        band_id: bands[5].id,
        release_year: 1987,
        description: "Album by Michael Jackson.",
      },
      {
        id: 17,
        title: "Come with Us",
        band_id: bands[6].id,
        release_year: 2002,
        description: "Album by The Chemical Brothers.",
      },
      {
        id: 18,
        title: "Future Nostalgia: The Moonlight Edition",
        band_id: bands[7].id,
        release_year: 2021,
        description: "Album by Dua Lipa.",
      },
      {
        id: 19,
        title: "Captain Fantastic and the Brown Dirt Cowboy",
        band_id: bands[8].id,
        release_year: 1975,
        description: "Album by Elton John.",
      },
      {
        id: 20,
        title: "A Day at the Races",
        band_id: bands[9].id,
        release_year: 1976,
        description: "Album by Queen.",
      },
    ])
    .returning("id");

  const songsId = await knex("songs")
    .insert([
      {
        id: 1,
        title: "Come Together",
        duration: 259,
        description: "Opening track of the album.",
      },
      {
        id: 2,
        title: "Something",
        duration: 182,
        description: "Written by George Harrison.",
      },
      {
        id: 3,
        title: "Smells Like Teen Spirit",
        duration: 301,
        description: "Nirvana's signature song.",
      },
      {
        id: 4,
        title: "Lithium",
        duration: 257,
        description: "One of Nirvana's hits.",
      },
      {
        id: 5,
        title: "Even Flow",
        duration: 301,
        description: "Pearl Jam classic.",
      },
      {
        id: 6,
        title: "Alive",
        duration: 323,
        description: "One of Pearl Jam's most well-known songs.",
      },
      {
        id: 7,
        title: "Brown Sugar",
        duration: 224,
        description: "Rocking track from The Rolling Stones.",
      },
      {
        id: 8,
        title: "Wild Horses",
        duration: 341,
        description: "Iconic ballad by The Rolling Stones.",
      },
      {
        id: 9,
        title: "Break On Through (To the Other Side)",
        duration: 140,
        description: "Opening track of The Doors' debut album.",
      },
      {
        id: 10,
        title: "Light My Fire",
        duration: 411,
        description: "The Doors' breakthrough hit.",
      },
      {
        id: 11,
        title: "Billie Jean",
        duration: 293,
        description: "One of Michael Jackson's most iconic songs.",
      },
      {
        id: 12,
        title: "Thriller",
        duration: 357,
        description: "Title track of the best-selling album.",
      },
      {
        id: 13,
        title: "Star Guitar",
        duration: 320,
        description: "Electronic track by The Chemical Brothers.",
      },
      {
        id: 14,
        title: "Galvanize",
        duration: 320,
        description: "Collaboration with Q-Tip.",
      },
      {
        id: 15,
        title: "Levitating",
        duration: 203,
        description: "Hit single by Dua Lipa.",
      },
      {
        id: 16,
        title: "Don't Start Now",
        duration: 183,
        description: "Chart-topping song by Dua Lipa.",
      },
      {
        id: 17,
        title: "Funeral for a Friend / Love Lies Bleeding",
        duration: 590,
        description: "Epic opening to the album.",
      },
      {
        id: 18,
        title: "Bennie and the Jets",
        duration: 340,
        description: "Classic Elton John hit.",
      },
      {
        id: 19,
        title: "Bohemian Rhapsody",
        duration: 355,
        description: "Queen's magnum opus.",
      },
      {
        id: 20,
        title: "Somebody to Love",
        duration: 280,
        description: "An anthem by Queen.",
      },
      {
        id: 21,
        title: "Let It Be",
        duration: 243,
        description: "Title track of The Beatles' album.",
      },
      {
        id: 22,
        title: "The Long and Winding Road",
        duration: 207,
        description: "Beautiful ballad by The Beatles.",
      },
      {
        id: 23,
        title: "Heart-Shaped Box",
        duration: 279,
        description: "Powerful song by Nirvana.",
      },
      {
        id: 24,
        title: "Rape Me",
        duration: 177,
        description: "Controversial track from In Utero.",
      },
      {
        id: 25,
        title: "Go",
        duration: 210,
        description: "Energetic track by Pearl Jam.",
      },
      {
        id: 26,
        title: "Daughter",
        duration: 233,
        description: "Emotional song by Pearl Jam.",
      },
      {
        id: 27,
        title: "Tumbling Dice",
        duration: 213,
        description: "Rolling Stones rock 'n' roll.",
      },
      {
        id: 28,
        title: "Angie",
        duration: 275,
        description: "Popular ballad by The Rolling Stones.",
      },
    ])
    .returning("id");

  await knex("songs_albums").insert([
    { song_id: songsId[0].id, album_id: albums[0].id }, // "Come Together" to "Abbey Road"
    { song_id: songsId[1].id, album_id: albums[0].id }, // "Something" to "Abbey Road"
    { song_id: songsId[2].id, album_id: albums[1].id }, // "Smells Like Teen Spirit" to "Nevermind"
    { song_id: songsId[3].id, album_id: albums[1].id }, // "Lithium" to "Nevermind"
    { song_id: songsId[4].id, album_id: albums[2].id }, // "Even Flow" to "Ten"
    { song_id: songsId[5].id, album_id: albums[2].id }, // "Alive" to "Ten"
    { song_id: songsId[6].id, album_id: albums[3].id }, // "Brown Sugar" to "Sticky Fingers"
    { song_id: songsId[7].id, album_id: albums[3].id }, // "Wild Horses" to "Sticky Fingers"
    { song_id: songsId[8].id, album_id: albums[4].id }, // "Break On Through (To the Other Side)" to "The Doors"
    { song_id: songsId[9].id, album_id: albums[4].id }, // "Light My Fire" to "The Doors"
    { song_id: songsId[10].id, album_id: albums[5].id }, // "Billie Jean" to "Thriller"
    { song_id: songsId[11].id, album_id: albums[5].id }, // "Thriller" to "Thriller"
    { song_id: songsId[12].id, album_id: albums[6].id }, // "Star Guitar" to "Surrender"
    { song_id: songsId[13].id, album_id: albums[6].id }, // "Galvanize" to "Surrender"
    { song_id: songsId[14].id, album_id: albums[7].id }, // "Levitating" to "Future Nostalgia"
    { song_id: songsId[15].id, album_id: albums[7].id }, // "Don't Start Now" to "Future Nostalgia"
    { song_id: songsId[16].id, album_id: albums[8].id }, // "Funeral for a Friend / Love Lies Bleeding" to "Goodbye Yellow Brick Road"
    { song_id: songsId[17].id, album_id: albums[8].id }, // "Bennie and the Jets" to "Goodbye Yellow Brick Road"
    { song_id: songsId[18].id, album_id: albums[9].id }, // "Bohemian Rhapsody" to "A Night at the Opera"
    { song_id: songsId[19].id, album_id: albums[9].id }, // "Somebody to Love" to "A Night at the Opera"
    { song_id: songsId[20].id, album_id: albums[10].id }, // "Let It Be" to "Let It Be"
    { song_id: songsId[21].id, album_id: albums[10].id }, // "The Long and Winding Road" to "Let It Be"
    { song_id: songsId[22].id, album_id: albums[11].id }, // "Heart-Shaped Box" to "In Utero"
    { song_id: songsId[23].id, album_id: albums[11].id }, // "Rape Me" to "In Utero"
    { song_id: songsId[24].id, album_id: albums[12].id }, // "Go" to "Vs."
    { song_id: songsId[25].id, album_id: albums[12].id }, // "Daughter" to "Vs."
    { song_id: songsId[26].id, album_id: albums[13].id }, // "Tumbling Dice" to "Exile on Main St."
    { song_id: songsId[27].id, album_id: albums[13].id }, // "Angie" to "Exile on Main St."
  ]);

  const genres = await knex("genres")
    .insert([
      { id: 1, name: "Rock" },
      { id: 2, name: "Grunge" },
      { id: 3, name: "Alternative Rock" },
      { id: 4, name: "Psychedelic Rock" },
      { id: 5, name: "Pop" },
      { id: 6, name: "Electronic" },
    ])
    .returning("id");

  const bandGenres = [
    { band_id: bands[0].id, genre_id: genres[0].id }, // The Beatles - Rock
    { band_id: bands[1].id, genre_id: genres[1].id }, // Nirvana - Grunge
    { band_id: bands[2].id, genre_id: genres[2].id }, // Pearl Jam - Alternative Rock
    { band_id: bands[3].id, genre_id: genres[0].id }, // The Rolling Stones - Rock
    { band_id: bands[4].id, genre_id: genres[3].id }, // The Doors - Psychedelic Rock
    { band_id: bands[5].id, genre_id: genres[4].id }, // Michael Jackson - Pop
    { band_id: bands[6].id, genre_id: genres[5].id }, // The Chemical Brothers - Electronic
    { band_id: bands[7].id, genre_id: genres[4].id }, // Dua Lipa - Pop
    { band_id: bands[8].id, genre_id: genres[0].id }, // Elton John - Rock
    { band_id: bands[9].id, genre_id: genres[0].id }, // Queen - Rock
  ];

  await knex("bands_genres").insert(bandGenres);

  // Assign genres to albums
  const albumGenres = [
    { album_id: albums[0].id, genre_id: genres[0].id }, // Abbey Road - Rock
    { album_id: albums[1].id, genre_id: genres[1].id }, // Nevermind - Grunge
    { album_id: albums[2].id, genre_id: genres[2].id }, // Ten - Alternative Rock
    { album_id: albums[3].id, genre_id: genres[0].id }, // Sticky Fingers - Rock
    { album_id: albums[4].id, genre_id: genres[3].id }, // The Doors - Psychedelic Rock
    { album_id: albums[5].id, genre_id: genres[4].id }, // Thriller - Pop
    { album_id: albums[6].id, genre_id: genres[5].id }, // Surrender - Electronic
    { album_id: albums[7].id, genre_id: genres[4].id }, // Future Nostalgia - Pop
    { album_id: albums[8].id, genre_id: genres[0].id }, // Goodbye Yellow Brick Road - Rock
    { album_id: albums[9].id, genre_id: genres[0].id }, // A Night at the Opera - Rock
    { album_id: albums[10].id, genre_id: genres[0].id }, // Let It Be - Rock
    { album_id: albums[11].id, genre_id: genres[1].id }, // In Utero - Grunge
    { album_id: albums[12].id, genre_id: genres[2].id }, // Vs. - Alternative Rock
    { album_id: albums[13].id, genre_id: genres[0].id }, // Exile on Main St. - Rock
    { album_id: albums[14].id, genre_id: genres[3].id }, // L.A. Woman - Psychedelic Rock
    { album_id: albums[15].id, genre_id: genres[4].id }, // Bad - Pop
    { album_id: albums[16].id, genre_id: genres[5].id }, // Come with Us - Electronic
    { album_id: albums[17].id, genre_id: genres[4].id }, // Future Nostalgia: The Moonlight Edition - Pop
    { album_id: albums[18].id, genre_id: genres[0].id }, // Captain Fantastic and the Brown Dirt Cowboy - Rock
    { album_id: albums[19].id, genre_id: genres[0].id }, // A Day at the Races - Rock
  ];

  await knex("albums_genres").insert(albumGenres);

  const songGenres = [
    { song_id: songsId[0].id, genre_id: genres[0].id }, // Come Together - Rock
    { song_id: songsId[1].id, genre_id: genres[0].id }, // Something - Rock
    { song_id: songsId[2].id, genre_id: genres[1].id }, // Smells Like Teen Spirit - Grunge
    { song_id: songsId[3].id, genre_id: genres[1].id }, // Lithium - Grunge
    { song_id: songsId[4].id, genre_id: genres[2].id }, // Even Flow - Alternative Rock
    { song_id: songsId[5].id, genre_id: genres[2].id }, // Alive - Alternative Rock
    { song_id: songsId[6].id, genre_id: genres[0].id }, // Brown Sugar - Rock
    { song_id: songsId[7].id, genre_id: genres[0].id }, // Wild Horses - Rock
    { song_id: songsId[8].id, genre_id: genres[0].id }, // Break On Through (To the Other Side) - Rock
    { song_id: songsId[9].id, genre_id: genres[0].id }, // Light My Fire - Rock
    { song_id: songsId[10].id, genre_id: genres[3].id }, // Billie Jean - Pop
    { song_id: songsId[11].id, genre_id: genres[3].id }, // Thriller - Pop
    { song_id: songsId[12].id, genre_id: genres[5].id }, // Star Guitar - Electronic
    { song_id: songsId[13].id, genre_id: genres[5].id }, // Galvanize - Electronic
    { song_id: songsId[14].id, genre_id: genres[3].id }, // Levitating - Pop
    { song_id: songsId[15].id, genre_id: genres[3].id }, // Don't Start Now - Pop
    { song_id: songsId[16].id, genre_id: genres[0].id }, // Funeral for a Friend / Love Lies Bleeding - Rock
    { song_id: songsId[17].id, genre_id: genres[4].id }, // Bennie and the Jets - Pop
    { song_id: songsId[18].id, genre_id: genres[5].id }, // Bohemian Rhapsody - Electronic
    { song_id: songsId[19].id, genre_id: genres[4].id }, // Somebody to Love - Pop
    { song_id: songsId[20].id, genre_id: genres[0].id }, // Let It Be - Rock
    { song_id: songsId[21].id, genre_id: genres[0].id }, // The Long and Winding Road - Rock
    { song_id: songsId[22].id, genre_id: genres[1].id }, // Heart-Shaped Box - Grunge
    { song_id: songsId[23].id, genre_id: genres[1].id }, // Rape Me - Grunge
    { song_id: songsId[24].id, genre_id: genres[2].id }, // Go - Alternative Rock
    { song_id: songsId[25].id, genre_id: genres[2].id }, // Daughter - Alternative Rock
    { song_id: songsId[26].id, genre_id: genres[0].id }, // Tumbling Dice - Rock
    { song_id: songsId[27].id, genre_id: genres[0].id }, // Angie - Rock
  ];

  await knex("songs_genres").insert(songGenres);

  const songsBands = [
    { song_id: songsId[0].id, band_id: bands[0].id }, // "Come Together" - The Beatles
    { song_id: songsId[1].id, band_id: bands[0].id }, // "Something" - The Beatles
    { song_id: songsId[2].id, band_id: bands[1].id }, // "Smells Like Teen Spirit" - Nirvana
    { song_id: songsId[3].id, band_id: bands[1].id }, // "Lithium" - Nirvana
    { song_id: songsId[4].id, band_id: bands[2].id }, // "Even Flow" - Pearl Jam
    { song_id: songsId[5].id, band_id: bands[2].id }, // "Alive" - Pearl Jam
    { song_id: songsId[6].id, band_id: bands[3].id }, // "Brown Sugar" - The Rolling Stones
    { song_id: songsId[7].id, band_id: bands[3].id }, // "Wild Horses" - The Rolling Stones
    { song_id: songsId[8].id, band_id: bands[4].id }, // "Break On Through (To the Other Side)" - The Doors
    { song_id: songsId[9].id, band_id: bands[4].id }, // "Light My Fire" - The Doors
    { song_id: songsId[10].id, band_id: bands[5].id }, // "Billie Jean" - Michael Jackson
    { song_id: songsId[11].id, band_id: bands[5].id }, // "Thriller" - Michael Jackson
    { song_id: songsId[12].id, band_id: bands[6].id }, // "Star Guitar" - The Chemical Brothers
    { song_id: songsId[13].id, band_id: bands[6].id }, // "Galvanize" - The Chemical Brothers
    { song_id: songsId[14].id, band_id: bands[7].id }, // "Levitating" - Dua Lipa
    { song_id: songsId[15].id, band_id: bands[7].id }, // "Don't Start Now" - Dua Lipa
    { song_id: songsId[16].id, band_id: bands[8].id }, // "Funeral for a Friend / Love Lies Bleeding" - Elton John
    { song_id: songsId[17].id, band_id: bands[8].id }, // "Bennie and the Jets" - Elton John
    { song_id: songsId[18].id, band_id: bands[9].id }, // "Bohemian Rhapsody" - Queen
    { song_id: songsId[19].id, band_id: bands[9].id }, // "Somebody to Love" - Queen
    { song_id: songsId[20].id, band_id: bands[0].id }, // "Let It Be" - The Beatles
    { song_id: songsId[21].id, band_id: bands[0].id }, // "The Long and Winding Road" - The Beatles
    { song_id: songsId[22].id, band_id: bands[1].id }, // "Heart-Shaped Box" - Nirvana
    { song_id: songsId[23].id, band_id: bands[1].id }, // "Rape Me" - Nirvana
    { song_id: songsId[24].id, band_id: bands[2].id }, // "Go" - Pearl Jam
    { song_id: songsId[25].id, band_id: bands[2].id }, // "Daughter" - Pearl Jam
    { song_id: songsId[26].id, band_id: bands[3].id }, // "Tumbling Dice" - The Rolling Stones
    { song_id: songsId[27].id, band_id: bands[3].id }, // "Angie" - The Rolling Stones
  ];

  await knex("songs_bands").insert(songsBands);
}

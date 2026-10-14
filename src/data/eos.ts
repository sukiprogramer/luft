// The Eos playlist, curated by Nemanja for Radio Luft.
// Add a `url` to each track (Spotify, SoundCloud or YouTube) to make the rows link out.
export interface Track { song: string; artist: string; url?: string }

export const eos = {
  title: 'Eos',
  curator: 'Nemanja @ radio.luft',
  tracks: [
    { song: 'Solo Quiero', artist: 'Montoya, Joaquin Cornejo' },
    { song: 'Farsi', artist: 'Nu, Cafe de Anatolia' },
    { song: 'Tan Bo Mi', artist: 'Jaggerlax' },
    { song: 'The Ocean', artist: 'Anchoring, Bookend' },
    { song: 'Gnossienne No. 1', artist: 'Monolink, Erik Satie' },
    { song: 'Language', artist: 'Mindchatter' },
    { song: 'Back On The Boulevard', artist: 'Purple Velvet' },
    { song: 'Canopée', artist: 'Polo & Pan' },
    { song: 'Shadows', artist: 'Bonobo, Jordan Rakei' },
    { song: 'Birdcage', artist: 'You Man' },
  ] as Track[],
};

import { SeriesPost, ContactConfig } from './types';

export const CONTACT_CONFIG: ContactConfig = {
  phoneNumber: '543512417464',
  whatsappMessage: 'Hola LMDT Series Retro! Estoy interesado en la serie: ',
};

// Data enriched with real descriptions and external public images representing the series.
// Note: External image URLs rely on public access (Wikimedia/Public Domain) where possible.
export const MOCK_POSTS: SeriesPost[] = [
  {
    id: '1',
    title: 'Alf',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Alf_TV_Series.jpg',
    price: '$1500',
    description: 'Gordon Shumway, el extraterrestre de Melmac, se estrella en la cochera de los Tanner. Oculto de las autoridades, este carismático alienígena cambia para siempre la vida de la familia con su humor sarcástico y apetito voraz.'
  },
  {
    id: '2',
    title: 'El Auto Fantástico',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/63/KITT.jpg',
    price: '$1800',
    description: 'Michael Knight, un vuelo solitario en un mundo peligroso. Junto a KITT, un Pontiac Trans Am con inteligencia artificial indestructible, lucha contra el crimen defendiendo a los inocentes e indefensos.'
  },
  {
    id: '3',
    title: 'Los Magníficos',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/60/A-Team_Cast.jpg',
    price: '$1600',
    description: 'En 1972, cuatro de los mejores hombres del ejército fueron encarcelados por un delito que no cometieron. Hoy, buscados todavía por el gobierno, sobreviven como soldados de fortuna. Si tiene un problema, quizá pueda contratarlos.'
  },
  {
    id: '4',
    title: 'MacGyver',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/66/MacGyver_title_screen.jpg',
    price: '$1700',
    description: 'Angus MacGyver, agente de la Fundación Phoenix, es capaz de resolver cualquier problema utilizando solo su inteligencia, su navaja suiza y objetos cotidianos. Acción e ingenio sin necesidad de armas de fuego.'
  },
  {
    id: '5',
    title: 'V Invasión Extraterrestre',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/87/V_The_Series_intertitle.png',
    price: '$2000',
    description: 'Naves nodriza cubren los cielos de las ciudades más importantes. Los Visitantes parecen humanos y vienen en paz, pero una resistencia descubre su verdadera naturaleza reptiliana y su siniestro plan para la humanidad.'
  },
  {
    id: '6',
    title: 'He-Man y los Amos del Universo',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/86/He-Man_and_the_Masters_of_the_Universe_title_card.jpg',
    price: '$1200',
    description: 'El Príncipe Adam de Eternia se transforma en He-Man, el hombre más poderoso del universo. Junto a sus amigos, defiende el Castillo de Grayskull de las fuerzas malignas de Skeletor.'
  },
  {
    id: '7',
    title: 'Los Expedientes X',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/The_X-Files_title_card.png',
    price: '$2500',
    description: 'La verdad está ahí fuera. Los agentes del FBI Fox Mulder y Dana Scully investigan casos inexplicables, fenómenos paranormales y conspiraciones gubernamentales alienígenas en esta serie de culto.'
  },
  {
    id: '8',
    title: 'Friends',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Friends_season_one_cast.jpg',
    price: '$2200',
    description: 'Rachel, Monica, Phoebe, Joey, Chandler y Ross. Seis amigos navegando por la vida, el amor y las risas en Manhattan. La sitcom definitiva de los 90 que definió a una generación.'
  },
  {
    id: '9',
    title: 'El Zorro',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Guy_Williams_Zorro.JPG/600px-Guy_Williams_Zorro.JPG',
    price: '$1400',
    description: 'En la California de 1820, Don Diego de la Vega lucha contra la injusticia bajo la máscara del Zorro. La legendaria versión de Disney protagonizada por Guy Williams, remasterizada a todo color.'
  },
];
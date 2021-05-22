import {Avatar} from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { PlaylistPlay } from '@material-ui/icons/';

const routeGroups = [
    {
      name: null, items: [
        { name: 'Inicio', icon: <HomeIcon />, onClose: true },
        { name: 'Explorar', icon: <ExploreIcon />, onClose: true },
        { name: 'Subscripciones', icon: <SubscriptionsIcon />, onClose: true },
      ]
    },
    {
      name: null, max: 5, items: [
        { name: 'Bibliotecas', icon: <VideoLibraryIcon />, onClose: true },
        { name: 'Historial', icon: <HistoryIcon /> },
        { name: 'Mis videos', icon: <PlayCircleOutlineIcon /> },
        { name: 'Ver más tarde', icon: <WatchLaterIcon /> },
        { name: 'Videos que me gustan', icon: <ThumbUpIcon /> },
        { name: 'Lista de reproducción', icon: <PlaylistPlay /> }
      ]
    },
    {
      name: "SUBSCRIPCIONES", max: 7, items: [
        {
          name: 'Kiko Palomares', streaming: true,
          icon: <Avatar alt="Remy Sharp" src="https://yt3.ggpht.com/ytc/AAUvwnhl30-099hHdQ9KmQSG1ZZN6ReuwHC1zG3EC6m65A=s88-c-k-c0x00ffffff-no-rj" />
        },
        {
          name: 'Sofia Web',
          icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnimRjgF1uVE0ukK6xy3h9HGMHMjKy6QzmKOUNeCJA=s88-c-k-c0x00ffffff-no-rj' />
        },
        {
          name: 'The Flutter way',
          icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwngOS8ETkWL7RrYwfXX2hMdJ7VjO-juYYl8F1OG1=s88-c-k-c0x00ffffff-no-rj' />
        },
        {
          name: 'Ed Team',
          icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnhRL1PzyIR4qftWnofOtsyvheGq_wQpMe1XVOJ7YQ=s88-c-k-c0x00ffffff-no-rj' />
        },
        {
          name: 'Fazt', newContent: true,
          icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnhgqDwiewt8bds92auC2W30pzE70V03dTW7_h8tvQ=s88-c-k-c0x00ffffff-no-rj' />,
        },
        {
          name: 'AristiDevs', streaming: true,
          icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnhXywyYrVckna4WxxOWfQLn_Ki2FhmHNWb5HHpL=s88-c-k-c0x00ffffff-no-rj' />
        },
        {
          name: 'MoureDev', newContent: true,
          icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwniUE19__jnSP8NH1LblvE5Ac5ADuDfcDMh9F-v7Bg=s88-c-k-c0x00ffffff-no-rj' />
        },
        {
          name: 'Duke Doks',
          icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnhmw1s-0Qh89Gy8U2u4M5JSh5rtIeaRMb2cNsUwsw=s88-c-k-c0x00ffffff-no-rj' />
        }
      ]
    },
    {
      name: "MÁS DE YOUTUBE", items: [
        { name: 'Youtube Premium', icon: <YouTubeIcon /> },
        { name: 'Videojuegos', icon: <VideogameAssetIcon /> },
        { name: 'Directo', icon: <LiveTvIcon /> },
        { name: 'Aprendizaje', icon: <EmojiObjectsIcon /> },
        { name: 'Deportes', icon: <SportsBasketballIcon /> }
      ]
    },
    {
      name: null, items: [
        { name: 'Configuración', icon: <SettingsIcon /> },
        { name: 'Historial de denuncias', icon: <FlagIcon /> },
        { name: 'Ayuda', icon: <HelpIcon /> },
        { name: 'Enviar sugerencias', icon: <AnnouncementIcon /> },
      ]
    }
  ]
  
  const footer = [
    [
      { name: 'Información', url: 'https://www.youtube.com/about/' },
      { name: 'Prensa', url: 'https://www.youtube.com/about/press/' },
      { name: 'Derechos de autor', url: 'https://www.youtube.com/about/copyright/' },
      { name: 'Contactar', url: 'https://www.youtube.com/t/contact_us/' },
      { name: 'Creadores', url: 'https://www.youtube.com/creators/' },
      { name: 'Publicidad', url: 'https://www.youtube.com/ads/' },
      { name: 'Desarrolladores', url: 'https://developers.google.com/youtube' }
    ],
    [
      { name: 'Términos', url: 'https://www.youtube.com/t/terms' },
      { name: 'Privacidad', url: 'https://policies.google.com/privacy?hl=es' },
      { name: 'Política y seguridad', url: 'https://policies.google.com/privacy?hl=es' },
      { name: 'Cómo funciona YouTube', url: 'https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen' },
      { name: 'Probar funciones nuevas', url: 'https://www.youtube.com/new' }
    ]
  ]
  
  const chipList = [
    { name: "Todo" },
    { name: "Música" },
    { name: "Mixes" },
    { name: "Chill out" },
    { name: "Música independiente" },
    { name: "Guitarra acústica" },
    { name: "Música de fondo" },
    { name: "Guitarras eléctricas" },
    { name: "Páginas web" },
    { name: "Computadoras" },
    { name: "Raspberry" },
  ]


export {routeGroups, footer, chipList}
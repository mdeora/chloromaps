
import MapLayout from '@/layouts/MapLayout';
import React from 'react';
import { AzerbaijanStateCodes } from './AzerbaijanStateCodes';

const AzerbaijanMap = () => (
    <MapLayout name="azerbaijan" width={650} viewBox={[0, 0, 1000, 783]} stateCodes={AzerbaijanStateCodes}>
          <path d="M170.8 151.1l-5.1 2.9-6.7 3.3-4.6 4-3.2 5.5-9.7-.1-5.4 4 4.3 13.1-1.9 7.9-5.1 5.4-5.2 1.6-5.1 1.4-6.2 8.5-1.9 6.8-2.4-.7-2.1-2.3 1.5-7.3-1.1-5.3-4.7.5-1.6.8-.4-1.8-.4-7.8-1.7-10.8v-3.2l2-3.1-1.1-3.7 4.5-14.3-1.2-8.3-.6-.2-19.2-2.3-4-1.9-6.9-4.8-7.4-1.7-3.4-2-7.9-7.8-.7-1.5-.1-1.5L82 102.9l5.5-2 5.6.3 11.4 6 2.6.5 3.5-.3 5.6-1.7 2.5.4 2.5 2.9 5.6 5.2 24.5 9.6 11.1 2.3 4 1.6.2 1.4-2.5 1.3-3.9 1.4-3.8 4.8 4.1 6.4 7.1 6.1 3.2 2z" id="AZE1676" name="Ağstafa"/>
  <path d="M223.5 283.3l6.3 4.1 6.1 4.6 4.7 2.9 3.9 3.3-5.6 8.6-6.1 9.2 4.4 6.9 5.7 5 5.7 4.2v6.8l-7.9 8.7-4.1 11.8-11.9 1.2-11.9-.9-10.7-2-9.6 3.8-1.5 8.1-1.2.4-3.4-.2-7.2-8 1.4-4 .1-3.4 1.7-2.5 1.2-4.6.1-5.4 1.9-4.5-1.5-4.5-2.3-3.7-2-3.9 3-14.3 12.2-7.5 6.8-9.2 6.8-9.9 6.7-5.5 8.2 4.4z" id="AZE1677" name="Daşkəsən"/>
  <path d="M195 303.5l-12.2 7.5-3 14.3 2 3.9 2.3 3.7 1.5 4.5-1.9 4.5-.1 5.4-1.2 4.6-1.7 2.5-.1 3.4-1.4 4-.2-.2-39.7-22.6-10.1-9.5-5.5-11.8-1.5-2.6-3.5-2.3-1.6-1.8-.7-2.4-.4-5-.7-2.2-3-3.7-3.4-2.7-3.3-3.3-2.4-5.2v-9.6l4.3-7.5 6.6-5.6 6.9-3.3 1.2 2.5.9 7.4 5 3.2 6.3.2 5.3 2.3 3.5 4.8-.5 6.1 4 2.6 4.1 3.3 4.2 2.1 4.2-4.4 1.2-6.9.9-10.5-.1-9.8-.7-9.9 2.2-9.9 3.2 4.2 3.1 3.8 2.1 3.7 1.1 4.6 5.3 9 7.3 6 6.4 6.1 3.9 7-.6 5 .5 5.3-1.2 2.6 1.2 2.6zM132.8 289l2.3-5.9-4.5-2.5-2.4-.3h-2.5l-2.4.7-2.1 1.6-1 2.2-.4 2.3.4 2.4 1 2.1 5.9 1.8 5.7-4.4z" id="AZE1678" name="Gədəbəy"/>
  <path d="M280.3 274.6l-4.9 8.1-6.4 6.1-6.5-.9-1.6-7 2.6-7 3.6-5.5 1-2.6 8.7.2 3.5 8.6z" id="AZE1679" name="Gəncə"/>
  <path d="M268.1 265.8l-1 2.6-3.6 5.5-2.6 7 1.6 7 6.5.9 6.4-6.1 4.9-8.1 10 .9 4.7 10.8-.4 13.3 2.6 3-1.1 4-3.7 4.5-3.9 4.4-6.2 5.8-5.6 6.7-3.3 5.4-3.9 4.8-5.1 12.7-.2 15.5-14.3-2.1-13.3-4.9 4.1-11.8 7.9-8.7v-6.8l-5.7-4.2-5.7-5-4.4-6.9 6.1-9.2 5.6-8.6-3.9-3.3-4.7-2.9-6.1-4.6-6.3-4.1 6.2-4.5 7-1.6 5.5.1 4.6-3.4.9-3.9.6-4 2.7-6.5.4-4.5.7-4.2 2.5-4.7 2.7-4.7 5.1 11.2 5.7 13.2z" id="AZE1680" name="Xanlar"/>
  <path d="M367.6 320.8l-7.9 7.7-3.3 2.1-6.8 5.2-3.7 2.1-6.3.2-6.4-.2-8.5 3.7-8.2 5.2-9.4 3.7-5.9 7.7-18 11.2-19-3 .2-15.5 5.1-12.7 3.9-4.8 3.3-5.4 5.6-6.7 6.2-5.8 3.9-4.4 3.7-4.5 1.1-4-2.6-3 .4-13.3-4.7-10.8 3-10.4 6.8-6.4 3.1-3.2-.9-4.6 1.5-3.2 3.4-2 8.8-8.3 8.6-8.6 7.4-8.8 7.6-8.6-1.6 9 1.1 18.4-1.4 9.1-3 8.8 4 6.5 6.8 1 5.7 4-4.2 6.9-5.3 7.3 3.1 4.9 6.8-4.2 5.9.5 4.4 4.9-.3 9.6 1 9.8 4.8 1.6 5.3-.8 1.4 2.1-.7 3.4-1.9 4.8-3.9 1.8zm-16-3.6l1.6-1.1.2-2.2-2.3-2.1-2.7 3 .6 1.4 1.1 1.1 1.5-.1z" id="AZE1681" name="Goranboy"/>
  <path d="M236.6 359.4l13.3 4.9 14.3 2.1 19 3 18-11.2-.7 3.9-1.1 3.7-3.4 2.9-.8 8.2 1.9 8 1.5 7.3 2.2 6.1 3.9-1.2 3.8-3 10.2 1 8.5 8.1 4.4 3.5 2.1 4.5 2.2 5 4 4.5-5.9.5-4.9 2.8-7.1 1.3-6.2 3.3-3.8 5.6-5.3 3.1-4.6-3.4-5.2-2.6-10 6.1-7.1 3.2-7.2 2.6-7.7 1.2-7.3 3.2-12 4.1-12.3 1.8-6 1.9-5.8.7-4.3-4.8-4.4-3.6-3.4 5.4-3.2 7.4-6.2 5.6-6.7 4.8-3.2 2.5-3.6-1.8-7.7-7.7-9-18.5-3.7-4.1-4.6-2.3-17.8-1.8-5.4-2.5-.6-5.3 10.8-7 28.1 4.7 11.9-1.2 2.3-1.9 1.1-2.4 2.1-10.2.6-1.7 3.8-3.4 3.2-4.3 2.1-5.5 3.1-14.4.1-1.3-.4-2.6-4.4-5.8-2.5-2.4-2.4-1.3-3.8.2-2.4.7 1.5-8.1 9.6-3.8 10.7 2 11.9.9 11.9-1.2z" id="AZE1682" name="Kəlbəcər"/>
  <path d="M372.4 253.2l6.4 2.4 3.4-1.2 3.3.1 1.8 2.4 1.6 3.1-13.8 5.7-8.1-9.6 5.4-2.9z" id="AZE1683" name="Mingəçevir"/>
  <path d="M77.1 208.4l-1.8 2.5-4-.6-1.6-5.2 1.1-.9h1.4l4.9 4.2zm-32.5-15.2l-2.5 5.2-6.2-2.1-2.1-2.7-1.1-3.5.6-3.1 2.6-1.9 6.8 1.6 1.9 6.5zm60 7.9l-7.9 4-3.9-.6-7.5-3.1-8-1-2.9-2.3-2.6-2.9-3.5-2.2-5.6-5.8-2.8-1.5-.5 4.1-1 2.7-3.3-.3-3.7-2.6-2.2-3.7 1.8-7.3 16.9.7 5.8-4.3-.2-3.6-2.2-3.2-8.9-7-2.9-1H48.3l-2.9-1.3-.9-2.8 1.7-4.8-6.3-13.4 16.2-13.5.1 1.5.7 1.5 7.9 7.8 3.4 2 7.4 1.7 6.9 4.8 4 1.9 19.2 2.3.6.2 1.2 8.3-4.5 14.3 1.1 3.7-2 3.1v3.2l1.7 10.8.4 7.8.4 1.8z" id="AZE1684" name="Qazax"/>
  <path d="M257.3 241.4l-2.7 4.7-2.5 4.7-.7 4.2-.4 4.5-2.7 6.5-.6 4-.9 3.9-4.6 3.4-5.5-.1-7 1.6-6.2 4.5-8.2-4.4-6.7 5.5-6.8 9.9-6.8 9.2-1.2-2.6 1.2-2.6-.5-5.3.6-5-3.9-7-6.4-6.1-7.3-6-5.3-9-1.1-4.6-2.1-3.7-3.1-3.8-3.2-4.2-.1-7 3-5.4 5.1-3.4 4.8-4.1 5.6-4 5.5-4.2 3.3-6.8 2.5-6.3 8.2-1.6 17.1 2.1 8.4-1.9 1.2-3.2 1.5-3.4 3.8-5.1 7-7.5 5.3-9 7.2 9.6 7 9.8 3.9 7.6-.9 8-2.6 4.4-1.3 5.3-.8 4.1-1.4 3.9-1.7 8 3 7.9z" id="AZE1685" name="Şəmkir"/>
  <path d="M315 179.1l5 3.8 7.8.3 6.8 4.1.7 6.3 1 6.6 2.5 5.2.8 6-7.6 8.6-7.4 8.8-8.6 8.6-8.8 8.3-3.4 2-1.5 3.2.9 4.6-3.1 3.2-6.8 6.4-3 10.4-10-.9-3.5-8.6-8.7-.2-5.7-13.2-5.1-11.2-3-7.9 1.7-8 1.4-3.9.8-4.1 1.3-5.3 2.6-4.4.9-8-3.9-7.6-7-9.8-7.2-9.6-9.6-4.7-9.4-5.4-.9-.6 4.3-2.8 3.8-.9h12.8l3.1 1 2.7 2.7 5 6.2 10 9.2 3.5 2.1 10.2 3.3 2.8 2.5 4.8 6.4 3 1.9 3.7-.1 1.5-2.4 1-3.6 1.9-3.6 3.6-2.3 3.4.4 3.2.9 3.4-.6 2.3-3.3z" id="AZE1686" name="Samux"/>
  <path d="M225 162.1l.9.6 9.4 5.4 9.6 4.7-5.3 9-7 7.5-3.8 5.1-1.5 3.4-1.2 3.2-8.4 1.9-17.1-2.1-8.2 1.6-2.5 6.3-3.3 6.8-5.5 4.2-5.6 4-4.8 4.1-5.1 3.4-3 5.4.1 7-2.2 9.9.7 9.9.1 9.8-.9 10.5-1.2 6.9-4.2 4.4-4.2-2.1-4.1-3.3-4-2.6.5-6.1-3.5-4.8-5.3-2.3-6.3-.2-5-3.2-.9-7.4-1.2-2.5 13.3-6.4 4.5-5.1 3.2-9.3-.4-5-2.9-1.6-4-.3-3.5-1.1-2.7-2.7-7.3-9.5-4.5-3.7-1.7-.4 1.9-6.8 6.2-8.5 5.1-1.4 5.2-1.6 5.1-5.4 1.9-7.9-4.3-13.1 5.4-4 9.7.1 3.2-5.5 4.6-4 6.7-3.3 5.1-2.9 8.6 5.3 25.4 9.2 8.2 1 4.1-.4 3.4-1.2 4.5-2.9z" id="AZE1687" name="Tovuz"/>
  <path d="M368.6 223.8l15.5 7.9 15.3 8.6 13 5.4 13 5.7-4.8 18.2-2.2 7.6-.1 8.1 2.2 6.8-1.8 6.9-2.7 3.3-1.1 1.3-4.8 2.8-5.9 13.1-10 1.6-10.6 1.6-8.3 12.5-3-3.4-2.6-3.8-.8-3.7-1.3-3.5 3.9-1.8 1.9-4.8.7-3.4-1.4-2.1-5.3.8-4.8-1.6-1-9.8.3-9.6-4.4-4.9-5.9-.5-6.8 4.2-3.1-4.9 5.3-7.3 4.2-6.9-5.7-4-6.8-1-4-6.5 3-8.8 1.4-9.1-1.1-18.4 1.6-9 14.7 4.5 14.3 7.9zm3.8 29.4l-5.4 2.9 8.1 9.6 13.8-5.7-1.6-3.1-1.8-2.4-3.3-.1-3.4 1.2-6.4-2.4zm39.4 45.1l-.4-1.4-.1-2.7.4-1.6 1.7-4 .3-2.9-.8-.7-1.9-.2-3.7.2h-7.8l-3 4.8 2.4 7.3 5.4 3.2 5.9.3 1.6-2.3z" id="AZE1688" name="Yevlakh Rayon"/>
  <path d="M995.8 352.7l2.4 2.6.8 3.5-1.2 2.3-3.2-.8-2.1.7-2.5-2.1-1.7-3.3.4-2.9 2.2 1.7 1.6-.5 1.5-1.2h1.8zm-47.9-32.3l2.1 1.1 2.6-.9 1.2 1.4.4 4.7 1.6 2.5 2.1 1.9 1.8 3.1.2 2.6-1.4 1.6-2.5.5-3.4-.1.8-5.5-5.5-7.6v-5.3zm-165 181.8l-1.7-6.7-.7-7.5-.4-9.6 2.5-8.5-.2-5.8-.7-5.6-2.4-3.5-2.5-3.3-2.3-7.1-3-6.1 2.1-6 1.3-6.1 2.9-4.2 2.6-4.3-.5-4.5-.8-4.6 2.1-4.9 3-4.3 1.1-4.2-.2-3.7 1.3-3.8 2.9-2.9 5-9.7.7-12.5-1.6-12.3-.2-11.3 5.4-5.5 7.2-1.1 4.2-4.3 4.4-5.1 14-.4 5-.9 5.2-.2 7.7 2.4 4.1-1.3 4-2 7.8-1.7 7.8-2.1 3.2-3.7-5.9-2.3-7.3-2.4-7.1-2.2-3.2 1-3 1.4-4-.8-3.2-3.7 2.8-5.1.5-2.2 2.4 1.2 8.5 1.1 7.3 2.3 4 .4 3.2-.7 9.4-3.9 4.1-.7 19.4.7 1.5 1.4 2 4.7 3.1 3.8 3.2 2.9 3.5 2 15.4 3.3 3 1.7 1.9 3.3 2 5.2 2.6 4.8 3.4 2.1 3.7 1.4 3.2 3.4 2.5 4.5 1.7 4.6 1.7 18.5 1.2 1.8 1.4 4.2.9 4.7-.6 3.1-3.2-6.4-3.6-5.6-4.2-4.9-8.4-6.9-3.6-2-3.9-1.5-7.6-1-6.4-2.1-3.4-.5-2 .2-3.9 1.5h-6.5l-3 1.3-5.8 4.8h-3.4l-1.2-1.1-2.2-3.5-1.4-1.5-1.8-.7-4.3-.8-4.5-2.4-3.4 1.9-5.7 5.1 1.2 5.3-4.8 4.9-6.9 3.6-11.4 2.6-9.9 5.8-13.1 4.8-3 2.3-6.6 7.2-2.9 2.1-1.9 2.4-.3 4.9.9 6 .1 2.4-9.2 3.6-1.7 3.5.4 4.5 2.3 4.5 1.6 1.6 2.4 1.9 1.3 1.7.7 2.3-.9 1.4-1.7 1.1-3 2.8-2.6 1.6-1.3 2.3-.7 2.6-.1 2 .8 4.5 2 4.8.6 2.6-.8 2.5-2.8 2.8-1 1.3-.3 2.1 1.3 3.7-.1 1.6-.7 1-2.8 2-1.1 3.2.1 1.4 1 1.5-.8 2.9 1 3 3.9 5.5-.2 1.8-2.4 1.9-4.4 2.5-4.3 5.2zM827.8 345l3.8.9 4.1-.5 3.8-1.8 2-2.2-1.9-3.3-3.6-5.6-7.1.4-5.4 3.4 3 4.5 1.3 4.2z" id="AZE1689" name="Bakı"/>
  <path d="M827.8 345l-1.3-4.2-3-4.5 5.4-3.4 7.1-.4 3.6 5.6 1.9 3.3-2 2.2-3.8 1.8-4.1.5-3.8-.9zm11.7-40.7l3.2 3.7 4 .8 3-1.4 3.2-1 7.1 2.2 7.3 2.4 5.9 2.3-3.2 3.7-7.8 2.1-7.8 1.7-4 2-4.1 1.3-7.7-2.4-5.2.2-5 .9-14 .4-4.4 5.1-4.2 4.3-7.2 1.1-5.4 5.5.2 11.3 1.6 12.3-.7 12.5-5 9.7-2.9 2.9-1.3 3.8.2 3.7-1.1 4.2-3 4.3-2.1 4.9.8 4.6.5 4.5-2.6 4.3-2.9 4.2-1.3 6.1-2.1 6-3.1-4.4-3.4-4.1-1.5-3.7-.3-4.4-3.7-6.3-3.4-6.7-1.4-7.4-4.2-5.6-7.8-1.3-8.1.1-6.2-.6-5.9-1.7-5-6.5-4.8-7.3-4.9-5.5-5.4-5-4.6-5.1-1.6-8.3 5.9 2.4 8.7 5.9 3.1-3.4 3.7-3.8 8.5-8.9 5.9-1.9 3.4-3.6 2.6-4.9 4.9-2.9 5.4-1 5.1-2.3 4.9-3.9 4.7-4.8 3.6-6.6 12.5-.4 11-5 1.6-8.5 1.9-2.8 2.3-2.7 4.7-4.2 3.4-5.8 6.6 4.4 5.9 6.8 2.7 5 3 4.7 8.6.8 8.7-3z" id="AZE1690" name="Abşeron"/>
  <path d="M395.3 390.9l12.1-1 12.2.3-7 7.1-8 5.2-.7 5.1 5.1 4.4-4.7 4.3-6.4 2-.2 6.1-.5 6.2-2.1 1.7-2.2 1.4 3.8 11 14 3 7.2-2.8 7.5-1.1 3.9 6.4-3.6 7.8-2.7 1.9-5.4-1.4-5.4.6-2.7 3.6-2.2 3.5-9.7-2.3-9.3-6.3-7.1-3.5-7.4 1.8-1.8 6.4-3.4 5.4-6.7 2.6-6.4 3.3 3.3-6.9 3.8-6.6 3.5-4.6 1.5-6-7-3.3-6-5.6-4.3-9.9-8.2-4.2-7 2-6-4.5 4.9-2.8 5.9-.5.8-8 2.5-6 4.4-4.6 1.3-7.6 9.2-4.2 10.7-5.3-1-3.6 1.2-2.8 2.2.8 1.8 1.8 4.3.8 3.9-1.7 3.2 4.1 1.6 5.7 4.5 1.4 4.8-.6z" id="AZE1691" name="Ağdam"/>
  <path d="M470.2 257.5l.6 9.9.5 9.8 4.1 4.5 5.6 3.3 2.8 3.3 2.3 3.4-.7 2.5-2.1 2.2-2.1 6.7-.6 7.5-6.6-2.1-6.4.7-5.1 3.4-2.5 14.7 2.4 5.6 4.8 2.8 2.6 5.1-2.3 6.1-2.6 5.7-5.5 6-3.3 2.9-1.1-1.9-1.8-2-.8.4.5-4.6.7-2 1-1.8-2-2.8-6.4 1-3.2-1.3 3.4-5-1.3-2.5-9.2-3.3 1.4-1.7 3.5-2.7 1-1.7.3-3.6-1.3-.5-1.9.8-2.1.4-2.6-.1-.6-.5.1-2.2-1.2-1.2-.9-1.6-1.4-1.5-1.9-.8-1.3-1.7 1.1-4.1.4-4.1-3-2.3-1.3.6-1.6 1.7-2.5 3.1-1.6 1-.6-2 .2-2.9 1.5-2.5-2-2.2-1.6-1.1 2.7-3.3 1.8-6.9-2.2-6.8.1-8.1 2.2-7.6 4.8-18.2 7.1 1.4 7 1.8 4.3 1.8 4.1.1 3.1-1.6 3 .9 3 1.5 6.5 1.5 6.7-1.3z" id="AZE1692" name="Ağdaş"/>
  <path d="M631.9 354.1l-3.5 5-2.2 6.8-5.8-4.8-3.8-7.6-4.8-2.4-5.1-1.8-.2-8.4-.4-8.9-6.7-3.3-7.6.6-9.8 8.2-6.6-6.4-6 1.2-4.7-4.4 1.5-9.6 3.4-9.2 3.3 2.1 3.1-2.4 1.3-6.6 2.9-3.5 3.5-2.8 4.3-2.5 4-2.8.9-2.2 1.4-2 16.8-8.1 10.2-7.7 5.2-9.3 3.3-11.1 1.5 3.1 1.2 3 5.3 5.4 3.2 7.1-1.8 4.2-2.1 4.2.1 3.9-2.5 3.7-7.4 7.1-1.9 9.3 4.8 6.3 6.5 2.7 11.8.3 3.7 2 3.5 2.6 3.8 1.8 2.9 2.4-2.7 3.2-3.5 1.8-8.7 3.8-7.4 6L639 345l-3.3 4.6-3.8 4.5z" id="AZE1693" name="Ağsu"/>
  <path d="M696.2 354.7l1.6 8.3 4.6 5.1 5.4 5 4.9 5.5 4.8 7.3 5 6.5 5.9 1.7 6.2.6 8.1-.1 7.8 1.3 4.2 5.6 1.4 7.4 3.4 6.7 3.7 6.3.3 4.4 1.5 3.7 3.4 4.1 3.1 4.4 3 6.1 2.3 7.1 2.5 3.3 2.4 3.5.7 5.6.2 5.8-5.2-4.1-5-4.2-2.5-3.6-3-2.5-8.6 2.3-5.8-1.2-8.6-.8-8.8-1.4-6.7-3.7-6.6-4.5-6.1.4-5.7.7 2.6-2.8 2.3-2.7.2-6.6-.7-1.9-1.6-1-2 .3-4.5-.2-3.7-1-2.5.8-5.8-4.7-3.4-1.1-9.7-1.7-2.1-.9-1.3-3.1-3.1-1.1-3.9-.7-4.4-2.4-1.2-.1-.2-5.2-.5-.4-.6-4.1.3-2.8-3.7-2.1-15.4-4.2-15.9-.2 1.4-9.3-.4-8.9-.9-7.6-3.1-5.7 2.2-6.8 3.5-5 6.9 1.7 6.8 1.9 6.9 4.2 7.4 3.5 5.8 2.9 5.6-2.9 5-5.6 2.2-8.7 8.4 4.6 9.3-1z" id="AZE1694" name="Hajigabul"/>
  <path d="M642.5 765.3l1.9-5.5 2.6-4.5 1.2-5.1 3.1-3 3.6-2 4-1.2 3.8.5 3.8-1.5 3.7-2.2 15.3-.8 13.8-3.8 1 36.8-11-2.3-5.5-.1-3.8 2.1-3.4 3.4-4.3 2.7-4.6 2-4.1 1.2-8.8-.7-5.4-5.3-4.7-7.9-2.2-2.8z" id="AZE1695" name="Astara"/>
  <path d="M456.1 361.5l.4 1.8L470 365l-1.4 1.9-3.2 1.3-1.4 1.4-.8 1.9-14.4 10.9-14.4 9.6-5.7 1.9-5-3.6-4.4-3.6.3 3.5-12.2-.3-12.1 1-.8-4.3-1-4.1-.4-7.7.7-14.1-4.9-1.8-4.1-3.7-3-5.5-2.4-1.7-1.8-2.4-2.3-10.4 8.3-12.5 10.6-1.6 10-1.6 5.9-13.1 4.8-2.8 1.1-1.3 1.6 1.1 2 2.2-1.5 2.5-.2 2.9.6 2 1.6-1 2.5-3.1 1.6-1.7 1.3-.6 3 2.3-.4 4.1-1.1 4.1 1.3 1.7 1.9.8 1.4 1.5.9 1.6 1.2 1.2-.1 2.2.6.5 2.6.1 2.1-.4 1.9-.8 1.3.5-.3 3.6-1 1.7-3.5 2.7-1.4 1.7 9.2 3.3 1.3 2.5-3.4 5 3.2 1.3 6.4-1 2 2.8-1 1.8-.7 2-.5 4.6.8-.4 1.8 2 1.1 1.9z" id="AZE1696" name="Bərdə"/>
  <path d="M515.5 402.7l-7.2 6.7 6.1 6.4 5.6 6.6-.3 8.7-6.7 4.8-3.4 2-2.5 3.3 2 3.5 3.2 2.1-2.9 8-1.1 6.5 6.4 3.3 5.6 5.1 6.1 5.1 5.9 4.4-1.1 6.8-7.3 4.3-7.3 6.5-1.6 7.4-7.3 7.5-20.5 11.6v-9.1l-10.9-9.1-3.7-6-4.1-4.8-5.7-1.5-2.8-6.5-3.2-5.3-2.4-4.4 2.2-1.9 2.3-1.5-2.2-6.5 2.9-4.9 5.2-2.2 1.1-2.3 2-1.4 4.1.4 4.1-.4 5.5-2.3 5.7-1.6 5-5.3 2.6-7.9 1.9-10.4 1.7-10.8 3.8-8.5 7.3-16.6 2.4.2 2.2 1.2.2 2.7.9 5.6.2.5z" id="AZE1697" name="Beyləqan"/>
  <path d="M615.9 512.1l9.3-8.9 9.7 5.9 8.5 4.6 7-8.2 7.4 1.2 7.4 3.2 8.4 3 8.4 2.8-3.7 11.4-.9 11.4 3.4 4.3 3.1 4.6-.8 5.9-1.7 5.9-4.3.1-4.1-1.1-2.8-1.4h-2.8l-2 2.6-1.4 3.1-2.6 2.4-.6 3.2-.3 9.6-5.3 5-5.6-3.5-1.8-7.9-3.9-6.2h-6l-5.2 6.2-5.9 5-3.5.4-3.2 1.7-2 2.5-2.5 2.2-6.2-3.5-.5-10.5-1.7-2.7 1.8-.6-3.8-8-4.8-6.6-11.7-10.8-28.7-34.6-10.4-9.8-3.3-2.2-2.4-.6.2-2.1 10.4.9 12 9 11.1 11 20 12.3 18.3-12.2z" id="AZE1698" name="Biləsuvar"/>
  <path d="M389.7 546.6l6.1 3 5.9 3.5 3.3 6.1 3.4 5.3 4.7-.7 4.9-1.1 5.2 3.3 2 2.6-2 1.1-17 6.6-8.2 5.1-1.6 1.9-.6 2.1-6.2 9.9-2.9 8.4-.8 1.6-1.8 2.2-11.4 6.4-2.1.4-2.5-.7-4.8-2.1h-2.7l-2.8 1.4-1.6-6.2-5.8-7.6-5.6-4.1-5.9-3.5-2.6-6.2-.6-7.3-3.3-4.9-2.4-4.8 1.1-6.8 4-3.9 6.8 2.6 6.3.6 2.2-7.2-2.6-7.1 3.7-2.5 4.3 2.9 5.3 2 1.1 2.5-.2 3.1 5 4.3 5.7 3.2 2.2 4 4.3-.7 2.9-2.7 3.4-.5 2.6-.1.1-2.9-2.1-6.8 3.6-5.7z" id="AZE1699" name="Cəbrayıl"/>
  <path d="M681.4 559.2l-4.4 5.7-3.8 6.2-1.3 8.4 1.3 8.4 6.1 14-1.9 15-3.4-1.5-3.5.1-.3 3.5-1.6 1.6-3.2-1-3.2.8-.2 5.1 2.7 5-4 2.9-4.8 1.8-4.8 3.3-3.8 4.9-6.2 6.7-8.5 2.3-4.7-5.9-5.9-3.9-4 .9-4 1.3-11.4.5.8-3 .1-3.1-.9-2.7-5.2-11.1-2.5-2.5-9.8-4.1-9.7-9.4-4.2-5.9-2.3-5.9.4-7.6 3.1-6.3 4.9-4.7 5.8-3 10.7-2.1 8.9-6.1 4.5-1.4 1.7 2.7.5 10.5 6.2 3.5 2.5-2.2 2-2.5 3.2-1.7 3.5-.4 5.9-5 5.2-6.2h6l3.9 6.2 1.8 7.9 5.6 3.5 5.3-5 .3-9.6.6-3.2 2.6-2.4 1.4-3.1 2-2.6h2.8l2.8 1.4 4.1 1.1 4.3-.1z" id="AZE1700" name="Cəlilabad"/>
  <path d="M735.1 122.7l5.2 10.8 2.5 3.6 2.1 4.3 1 4.9L748 166l1.1 4.2 2 1.9-2.4.2-6.8-5.4-6.5-5.4-5.4 1.7-5.4 2.3h-12.3l-5.6 7.9 3.1 7.7.1 8.5-1.7 3.9-2.5 3.1-6.7 1.2-4.9 3.5-2.5 6 1.4 10.3 2.2 10.4-5.6 3.5-5.1 4.9-8.6-4.7-8.8-4.3.6-10-.9-8.6-2.5-5.4 3.3-5 4.3-3.4 2.3-5.8-6.2-8.1-7.2-7.3 4.5-10.9 8.9-7.9 4.4-5.6v-3.3l-2.3-2.8-.2-9.2 2-9.4 5.5-.6 5.4-2.5 5.4 2 5.9.4 7.8-3 8 .7 8.9 1.6 9.1-.3 1-.3z" id="AZE1701" name="Dəvəçi"/>
  <path d="M487.2 523.3l-3.1 1.7-9 9.2-2.2 1.5-3.8.4-12 4.1-7.1 4-5.6 4.7-8.5 10.9-5.6 5.8-5.1 3-2-2.6-5.2-3.3-4.9 1.1-4.7.7-3.4-5.3-3.3-6.1-5.9-3.5-6.1-3 1.3-2.9v-2.4l3.2-.6 3-.9-.8-4.3-1-4.4 1.4-2.6 1.7-2.4-1.3-4.9-5 2.1-3.5 3-3.8.4-1.1-3.7 2.8-3.3 7-1.6 3.9-4.9-5.5.8-6.4-1.3 3-5.1 7.8-.6 3.9-1.6 3.8-2.2 3-3.2 3.2-1.8 5.1-.9 5.2-1.4 6.6-1.3 6.5-1.6 13.1-3.5 13.2-3.2 2.8 6.5 5.7 1.5 4.1 4.8 3.7 6 10.9 9.1v9.1z" id="AZE1702" name="Füzuli"/>
  <path d="M555.8 313.4l1.3 11.9-7.2 4.1-4.4-1.8-4.5.5-6.6-.9-6.3-2.9-11.6-6-3.4-.3-2.8 2.4-3.4 1.8-4.1-1.8-4.2-3.4-4.5-2.5-7 2.4-3.6-2.9-2.9-3.4.6-7.5 2.1-6.7 2.1-2.2.7-2.5-2.3-3.4-2.8-3.3 6.2-3.6 6.7-1.5 6-.2 5.6-2.7 5.9 1.6 10.2 3.5 4.2-.3 8.6.9 8.7 2.8 9 2.5 7.2 6.1-4.2 10.3.7 9z" id="AZE1703" name="Göyçay"/>
  <path d="M605.2 419.2l1.3 2.1-.3 2.6-2.1 1.6-3.4.9-3.6 2.9-3.4 3.3-2.3 3.7-1.7 3.8 1.7 2.6 2.1 2.5.7 5.1-2.2 4.8-2.8 5.3-1.4 5.8 1.6 5.2 2.8 4.4 10.3 3.5 8.1 7.3-.3 3-.9 2.7-.3 4.9.1 5 2.6 5.2 4.1 4.7-18.3 12.2-20-12.3-11.1-11-12-9-10.4-.9-.2 2.1-2 2.9-1.8 1.7-2.1.5-13-.3-4 1.1-3.3 2.3-2.7 2.8 1.6-7.4 7.3-6.5 7.3-4.3 1.1-6.8-5.9-4.4-6.1-5.1-5.6-5.1-6.4-3.3 1.1-6.5 2.9-8-3.2-2.1-2-3.5 2.5-3.3 3.4-2 6.7-4.8.3-8.7-5.6-6.6-6.1-6.4 7.2-6.7 1.8 3.8 3.4-1 1.7-.9 1.8.3 1.6.7 3.3 1.3 2.8 3.1 1 .8 1.2-.5 1.5-1.9 2-.4 5.3 2.7 2 .4 1-1.1-.2-4.8.1-2.5.6-1.9 1.8-1 2.1 1 2 1.6 1.7.7 3.5-2.2 3.4-3 2.7-.1 1 6.2 1.3 2.6 9.2 5.7 1.6.6 1.3.1.8.9-.2 3.1 5.5-2.8 3.1-.7 3 .4 2.9 2.1 1.2 1.5 1.2 3.7 1.4-.5 2.1-2.3 2.6-1.4h1.4l1.4.9.8 1.3z" id="AZE1704" name="İmişli"/>
  <path d="M617.5 215.3l7.6 8.8 8.9 6.3 1.2 10-5.4 9.8-3.3 11.1-5.2 9.3-10.2 7.7-16.8 8.1-1.4 2-.9 2.2-4 2.8-4.3 2.5-3.5 2.8-2.9 3.5-1.3 6.6-3.1 2.4-3.3-2.1-6.8 2.6-7 1.7-.7-9 4.2-10.3-7.2-6.1-9-2.5-8.7-2.8-8.6-.9-4.2.3-10.2-3.5-5.9-1.6 4.6-5.7 4.3-6 3.5-6.6 5-4.3 7.8-3.5 6.6-5.2.1-5.2.6-5 2.2-.9 2.6-.4 4.9-4.2.6-7.1-4.1-7.1-1.8-7.4.9-2.7 1.5-2.4 4.8.9 1.4-3.7.9-4.1 1.9-3.9 2.6-3.1 5.1 1.2 5.1.4 4.8 2.1 13.9 8 9.3 4.3 12.9 1 10 8.9z" id="AZE1705" name="İsmayıllı"/>
  <path d="M626.2 365.9l3.1 5.7.9 7.6.4 8.9-1.4 9.3-5.6 3.1-4.5 4.5-5.5 3.2-4.4 4.3-1.4 3-2.6 3.7-.8-1.3-1.4-.9h-1.4l-2.6 1.4-2.1 2.3-1.4.5-1.2-3.7-1.2-1.5-2.9-2.1-3-.4-3.1.7-5.5 2.8.2-3.1-.8-.9-1.3-.1-1.6-.6-9.2-5.7-1.3-2.6-1-6.2-2.7.1-3.4 3-3.5 2.2-1.7-.7-2-1.6-2.1-1-1.8 1-.6 1.9-.1 2.5.2 4.8-1 1.1-2-.4-5.3-2.7-2 .4-1.5 1.9-1.2.5-1-.8-2.8-3.1-3.3-1.3 4.2-3.1 5-2.4 3.9-4.2 2.7-5.1-1.9-16 .2-16.6 4.4-4.7 3.2-6 1.5-8.8.9-9.3 7.2-4.1-1.3-11.9 7-1.7 6.8-2.6-3.4 9.2-1.5 9.6 4.7 4.4 6-1.2 6.6 6.4 9.8-8.2 7.6-.6 6.7 3.3.4 8.9.2 8.4 5.1 1.8 4.8 2.4 3.8 7.6 5.8 4.8z" id="AZE1706" name="Kürdəmir"/>
  <path d="M704 673.2l-4.8 5.9-6.2-1.6.1 7.8.4 3.5.8 3.5 1.3 3.4-3.5 2.2v6.8l.4 2.9.9 1.5 2.3-1 2.7-3.6.9 31.7-13.8 3.8-15.3.8 3.5-5.2 2-5.3-2.9-3.5-3.5-2.5-.3-3.7.4-4.1-2.2-4.7-2.6-4.6-7.4-5.1-7.6-4.9-2-9.6 4.8-9.2 5.5 4.8 6 3.7 6.6-1.4 6.1-4 5.4-2.6 5-3.1 2.3-2.6 2.6-1.6 6.6.1 5.5 1.5zm57.7-58.3l-.8 3.8-2.4 7.2-.8 3.4-.5 7.7-.8 4.7-1.6 3.9-12.8 9-6.8 2.7-4.7-3.9.5-2.6.2-3.2 1.6-1.7 7.7-1.5 2.6-1.4 2.3-3.3 1.3-4.4.2-4.4-1.9-4.2-3.4-1.7-8.2-.3v-1.9l-1-9-.6-2.6-3.1-2.5-3.2-.9-7.3.3-2 .7-1 1.8-.7 2.2-1.4 3.2-.1 3.5-.3 1.7-2.1.7-.3 10.2.6 5.5 2.7 4.7-.7 5.3-4.5 15.8-.6 1.4-1.1-4.7-2.6-7.1-.6-5.8v-5.1l-3.9-3.9-4-3.6-.1-7.2 1.4-7.1 5.9-7.8 6.7-7.3 7.7-8.7 8.5-6.7 5 4.3 3.4 7.2 5.3 3.5 5.9 1.8 6.7 3.3 7 1.8 2.7 3.2z" id="AZE1707" name="Lankaran"/>
  <path d="M677.4 616.9l9.1 4.1 10.4-.7-1.4 7.1.1 7.2 4 3.6 3.9 3.9v5.1l.6 5.8 2.6 7.1 1.1 4.7-3.4 7.9-.4.5-5.5-1.5-6.6-.1-2.6 1.6-2.3 2.6-5 3.1-5.4 2.6-6.1 4-6.6 1.4-6-3.7-5.5-4.8-2.2-9.1-5.7-6.9-8.7-1.3-3.2-8.7 8.5-2.3 6.2-6.7 3.8-4.9 4.8-3.3 4.8-1.8 4-2.9-2.7-5 .2-5.1 3.2-.8 3.2 1 1.6-1.6.3-3.5 3.5-.1 3.4 1.5z" id="AZE1708" name="Masallı"/>
  <path d="M652.4 678.4l-4.8 9.2 2 9.6 7.6 4.9 7.4 5.1 2.6 4.6 2.2 4.7-.4 4.1.3 3.7 3.5 2.5 2.9 3.5-2 5.3-3.5 5.2-3.7 2.2-3.8 1.5-3.8-.5-4 1.2-3.6 2-3.1 3-1.2 5.1-2.6 4.5-1.9 5.5-4.2-5.3-2.6-3.6-2.8-3.2-2.8-4.4-2.8-2.5-2.2-3-1.2-5.7-1.9-4.8h-4l-8.7 4.1-5.2-.1-3.1-3-2.7-3.9-8.3-6.7-.3-3.7.7-4.3-.8-3.1 3.9-2 2.4-3.6 2.3-2.8.8-4.8 1.6-4.2 2.9-3.9 3.2-3.3 3.8-2.4 3.5-2.9 15.6-9.3 14.9-10.5 5.7 6.9 2.2 9.1z" id="AZE1709" name="Lerik"/>
  <path d="M770.4 537.2l.1 2.9 1.7 4.1 15.8 14.6 2.1 2.5 1.4 2.8-1 1.8-1 7.4.2 2.2 1.4 2.5-2.1-1.1-1.5-1.4-2.2-3.5h-1l.6 3.2 1.5 3.6 2.1 3.2 2.6 1.9v1.6l-3.8-.9-2.4-2.7-2.2-3.1-8.7-5.8-5.7 2.1-4.4 5.8-1.8 7 .2 24.1-.6 2.9-2.7-3.2-7-1.8-6.7-3.3-5.9-1.8-5.3-3.5-3.4-7.2-5-4.3-8.5 6.7-7.7 8.7-6.7 7.3-5.9 7.8-10.4.7-9.1-4.1 1.9-15-6.1-14-1.3-8.4 1.3-8.4 3.8-6.2 4.4-5.7 7.8 5.8 7.6 6.2 6.4 1.2 6.1-4.7 3.2-.7 1.8-2.8-1-5.1-.5-5.5 4.1-7.5 2.5-1.8.5-1.3 4.8-4.6 1.8-5.9 4.2-4.1 5.7 6 5.9 7.2 3.8 1.9 4 .7 3.1-.6 3-2.1 6.6-2.2 6.6-1.9 1-.2z" id="AZE1710" name="Neftçala"/>
  <path d="M766.6 315l-3.6 6.6-4.7 4.8-4.9 3.9-5.1 2.3-5.4 1-4.9 2.9-2.6 4.9-3.4 3.6-5.9 1.9-8.5 8.9-3.7 3.8-3.1 3.4-8.7-5.9-5.9-2.4-9.3 1-8.4-4.6-6.8.8-6.6.2-1.1-3.4 4.8-2.7 3-2.6 1-4.5 4-8 1-3.7-2.1-3.2-.7-3.2.3-3.9-.7-4.9-1.2-4.6v-4.2l-.8-3.8-2.6-2.1-1.6-2.8 2.6-4.4 3-4.2-.6-9.8 2.2-9.5 6.3-5 7.1-4.1 9.8 2.9 9.2 6.9 4 3.8 3.7 4.8 6.6 7.3 7.5 5.6 9.2 3.2 16.5 17.1 11.1 5.9z" id="AZE1711" name="Qobustan"/>
  <path d="M751.1 172.1l1 2.4 2.9 16.2 8.2 13.6 20.4 23.3 1.5 2.1-.8.3-6.8-.1-6.6 1.1-8 2.2-8.3-.7-7.2-2.6-6.8-4.4-4.9-1.8-4.2-3-1.2-8.4-3.8-3.2-3.7 1.2-2.7 3.1-.8 3.6-1.1 3.3-5.6 3.3-6.1 2-5.6 2-5.7.4-2.2-10.4-1.4-10.3 2.5-6 4.9-3.5 6.7-1.2 2.5-3.1 1.7-3.9-.1-8.5-3.1-7.7 5.6-7.9h12.3l5.4-2.3 5.4-1.7 6.5 5.4 6.8 5.4 2.4-.2z" id="AZE1712" name="Siyəzən"/>
  <path d="M650.4 505.5l-7 8.2-8.5-4.6-9.7-5.9-9.3 8.9-4.1-4.7-2.6-5.2-.1-5 .3-4.9.9-2.7.3-3-8.1-7.3-10.3-3.5-2.8-4.4-1.6-5.2 1.4-5.8 2.8-5.3 2.2-4.8-.7-5.1-2.1-2.5-1.7-2.6 1.7-3.8 2.3-3.7 2.9 4.6 3.6-.4 4.5-2.4 4.5-2.6 5.8-2.7 6-1 4 1.9 3.6 3.1-2.4 6.5 1.7 3.3 2.6 2 2.2.2 1.7-1.9 3.7-2.2 4.3.2 7.3 4.1 7.1 4.7 7.2 3.3 5.4 7.1v4.3l-1.1 4 .6 5.7 2.3 5v7.7l-4.2 6.5-7.9 3.8-8.3 1.7-5 4.2 4.6 2.2z" id="AZE1713" name="Saatlı"/>
  <path d="M700.1 432.2l-.5 6.6-.1 3 1.3 3 1.2 1.6 3.2 1.5 1.1 1.2v.8l2.7 5 2 2.7.8 2.1v7.4l.5 1.8 1.4 2.4.4 2-1.6 3.2-.7 1.8.6 1.8 5.3 5.1 2.6 3.1.2 2.4-1.8 3.2-2.4 6.1-2.2 2.2-3.2 1.2-3.5 3.8-5.2 2.7.7 5-.8 3.8-3.8-1.8-4.2-2.4-6.1.7-6 .5-8.4-2.8-8.4-3-7.4-3.2-7.4-1.2-4.6-2.2 5-4.2 8.3-1.7 7.9-3.8 4.2-6.5v-7.7l-2.3-5-.6-5.7 1.1-4v-4.3l-5.4-7.1-7.2-3.3-7.1-4.7-7.3-4.1-4.3-.2-3.7 2.2-1.7 1.9-2.2-.2-2.6-2-1.7-3.3 2.4-6.5-3.6-3.1-4-1.9-6 1-5.8 2.7-4.5 2.6-4.5 2.4-3.6.4-2.9-4.6 3.4-3.3 3.6-2.9 3.4-.9 2.1-1.6.3-2.6-1.3-2.1 2.6-3.7 1.4-3 4.4-4.3 5.5-3.2 4.5-4.5 5.6-3.1 15.9.2 15.4 4.2 3.7 2.1-.3 2.8.6 4.1.5.4.2 5.2 1.2.1 4.4 2.4 3.9.7 3.1 1.1 1.3 3.1 2.1.9 9.7 1.7 3.4 1.1 5.8 4.7z" id="AZE1714" name="Sabirabad"/>
  <path d="M782.6 469.9l-2.5 8.5.4 9.6.7 7.5 1.7 6.7-3.7 4.4-3.2 5.6.1 3.8-2 3.7-1.7 4.8-1.4 5.2-.7 4.4.1 3.1-1 .2-6.6 1.9-6.6 2.2-3 2.1-3.1.6-4-.7-3.8-1.9-5.9-7.2-5.7-6-4.2 4.1-1.8 5.9-4.8 4.6-.5 1.3-2.5 1.8-4.1 7.5.5 5.5 1 5.1-1.8 2.8-3.2.7-6.1 4.7-6.4-1.2-7.6-6.2-7.8-5.8 1.7-5.9.8-5.9-3.1-4.6-3.4-4.3.9-11.4 3.7-11.4 6-.5 6.1-.7 4.2 2.4 3.8 1.8.8-3.8-.7-5 5.2-2.7 3.5-3.8 3.2-1.2 2.2-2.2 2.4-6.1 1.8-3.2-.2-2.4-2.6-3.1-5.3-5.1-.6-1.8.7-1.8 1.6-3.2-.4-2-1.4-2.4-.5-1.8v-7.4l-.8-2.1-2-2.7-2.7-5v-.8l1.3.5 2.4-2.3 5.7-.7 6.1-.4 6.6 4.5 6.7 3.7 8.8 1.4 8.6.8 5.8 1.2 8.6-2.3 3 2.5 2.5 3.6 5 4.2 5.2 4.1z" id="AZE1715" name="Salyan"/>
  <path d="M667.1 227.4l8.8 4.3 8.6 4.7-2.2 11.4 6.7 9.7-7.1 4.1-6.3 5-2.2 9.5.6 9.8-3 4.2-2.6 4.4 1.6 2.8 2.6 2.1.8 3.8v4.2l1.2 4.6.7 4.9-.3 3.9.7 3.2 2.1 3.2-1 3.7-4 8-1 4.5-3 2.6-4.8 2.7 1.1 3.4 6.6-.2 6.8-.8-2.2 8.7-5 5.6-5.6 2.9-5.8-2.9-7.4-3.5-6.9-4.2-6.8-1.9-6.9-1.7 3.8-4.5 3.3-4.6 1.1-10.9 7.4-6 8.7-3.8 3.5-1.8 2.7-3.2-2.9-2.4-3.8-1.8-3.5-2.6-3.7-2-11.8-.3-6.5-2.7-4.8-6.3 1.9-9.3 7.4-7.1 2.5-3.7-.1-3.9 2.1-4.2 1.8-4.2-3.2-7.1-5.3-5.4-1.2-3-1.5-3.1 5.4-9.8-1.2-10-8.9-6.3-7.6-8.8 13.8.2 13.4 3.8 11 4.7 11.4 3.4z" id="AZE1716" name="Şamaxı"/>
  <path d="M842.8 297l-.5 2.2-2.8 5.1-8.7 3-8.6-.8-3-4.7-2.7-5-5.9-6.8-6.6-4.4 1.5-4.5 5.8-.7 1.1-.7 1.2 2 3.1 2.9 3.3 2.5 2.3 1.1 7.4.4 3.3.9 2.7 1.6 6.1 5.4 1 .5z" id="AZE1717" name="Sumqayıt"/>
  <path d="M480.6 310.6l2.9 3.4 3.6 2.9 7-2.4 4.5 2.5 4.2 3.4 4.1 1.8 3.4-1.8 2.8-2.4 3.4.3 11.6 6 6.3 2.9 6.6.9 4.5-.5 4.4 1.8-.9 9.3-1.5 8.8-3.2 6-4.4 4.7-9.6.6-9.5 1.6-9-1.2-8.5.3-4.2 2.8-4.3.6-2.7-3.7-2.8-4.3-9.6-7.4-9.9-6.7-2.6-5.1-4.8-2.8-2.4-5.6 2.5-14.7 5.1-3.4 6.4-.7 6.6 2.1z" id="AZE1718" name="Ucar"/>
  <path d="M785.1 229.7l1.8 4.1 3.6 3.2 7.7 4.8 3.8-1 3.3 2.8 3 3.8 3.4 1.9 1.9 2.2-.8 5-2.9 8.4-1 4.3-.3 2.4.2 2.5.7 1.4 2.3 2.9.6 1.3-1.1.7-5.8.7-1.5 4.5-3.4 5.8-4.7 4.2-2.3 2.7-1.9 2.8-1.6 8.5-11 5-12.5.4-11.1-5.9L739 292l-9.2-3.2-7.5-5.6-6.6-7.3-3.7-4.8-4-3.8-9.2-6.9-9.8-2.9-6.7-9.7 2.2-11.4 5.1-4.9 5.6-3.5 5.7-.4 5.6-2 6.1-2 5.6-3.3 1.1-3.3.8-3.6 2.7-3.1 3.7-1.2 3.8 3.2 1.2 8.4 4.2 3 4.9 1.8 6.8 4.4 7.2 2.6 8.3.7 8-2.2 6.6-1.1 6.8.1.8-.3z" id="AZE1719" name="Xizı"/>
  <path d="M632.6 652.4l3.2 8.7 8.7 1.3-14.9 10.5-15.6 9.3-3.5 2.9-3.8 2.4-3.2 3.3-2.9 3.9-1.6 4.2-.8 4.8-2.3 2.8-2.4 3.6-3.9 2-.4-1.8-2.2-1.9-22.6-11.2-11-8.9-3.4-6.2-.4-9 1.6-2.5 8.9-5.6.5-1.4-.1-1.6.6-1.5 31.5-5.5 7-4.4 1.6-2.4 1.4-2.9 11.4-.5 4-1.3 4-.9 5.9 3.9 4.7 5.9z" id="AZE1720" name="Yardımlı"/>
  <path d="M539.9 358.2l-.2 16.6 1.9 16-2.7 5.1-3.9 4.2-5 2.4-4.2 3.1-1.6-.7-1.8-.3-1.7.9-3.4 1-1.8-3.8-.2-.5-.9-5.6-.2-2.7-2.2-1.2-2.4-.2-3.5-.9-1.2-2.9-.8-5.9-2 .1-5.3 6.7-2-1.4-3 1.5-2-.1-1.1-1-1-2.6-1.4-1.3-4.1-.5-3.4 2-2.8 2.5-2.7.9-.4-1.2-4.1-6.7-3.5-7.5-2.1-2.7.8-1.9 1.4-1.4 3.2-1.3 1.4-1.9-13.5-1.7-.4-1.8 3.3-2.9 5.5-6 2.6-5.7 2.3-6.1 9.9 6.7 9.6 7.4 2.8 4.3 2.7 3.7 4.3-.6 4.2-2.8 8.5-.3 9 1.2 9.5-1.6 9.6-.6z" id="AZE1721" name="Zərdab"/>
  <path d="M509.6 392.5l-7.3 16.6-3.8 8.5-1.7 10.8-1.9 10.4-2.6 7.9-5 5.3-5.7 1.6-5.5 2.3-4.1.4-4.1-.4-2 1.4-1.1 2.3-5.2 2.2-2.9 4.9 2.2 6.5-2.3 1.5-2.2 1.9 2.4 4.4 3.2 5.3-13.2 3.2-13.1 3.5 4.8-9.4-2.6-8.5-8.5-5.4-4.4-9.8 2.7-1.9 3.6-7.8-3.9-6.4-7.5 1.1-7.2 2.8-14-3-3.8-11 2.2-1.4 2.1-1.7.5-6.2.2-6.1 6.4-2 4.7-4.3-5.1-4.4.7-5.1 8-5.2 7-7.1-.3-3.5 4.4 3.6 5 3.6 5.7-1.9 14.4-9.6 14.4-10.9 2.1 2.7 3.5 7.5 4.1 6.7.4 1.2 2.7-.9 2.8-2.5 3.4-2 4.1.5 1.4 1.3 1 2.6 1.1 1 2 .1 3-1.5 2 1.4 5.3-6.7 2-.1.8 5.9 1.2 2.9 3.5.9z" id="AZE1722" name="Ağcabədi"/>
  <path d="M331 13.7l1.2 5.2-2.4 7.9L324 33l-6.6 4.7-5.3 3.4-5 4-2.8 6.4-2 7-3.9 5.2-5.1 3.5-5.9 2-5.9 1.3-9.3 6.8-5.2.5-5.1-2.9-4.1-.9-.3-1.7-3.8-7.2-.4-1.3-2.3.1-1.2 1.7-.8 2.1-1.5 1.2-4.6-3.8-2.2-10.3-.1-11.6 1.7-7.8 3.2-3.5 3.8-.4 8 1.8 3.5-.3 2.7-1.4 2.5-2.2 7.3-9 3.7-5.9L283.5 1l3.7 1 4.6-.2 7.8 1.1 3.1 1.8 1 4.3-.8 9.3.9 3.9 3 2.6 3.3-.1 2.9-1.9 5.6-4.9 3.5-1.2 6.9-1.4 2-1.6z" id="AZE1723" name="Balakən"/>
  <path d="M519.3 159l1.3 2.9 5.5 3.6 6.2 1.4 6.3 1.1 4.4 13.5 13.4 7.9-2.6 3.1-1.9 3.9-.9 4.1-1.4 3.7-4.8-.9-1.5 2.4-.9 2.7 1.8 7.4 4.1 7.1-.6 7.1-4.9 4.2-2.6.4-2.2.9-.6 5-.1 5.2-6.6 5.2-7.8 3.5-5 4.3-3.5 6.6-4.3 6-4.6 5.7-5.6 2.7-6 .2-6.7 1.5-6.2 3.6-5.6-3.3-4.1-4.5-.5-9.8-.6-9.9 6-1.7 1.6-6 .2-13.7 3.5-13.1 5.7-10 .6-5.5-.7-5.3 5.3-9.7 4.8-10.7 1.3-5.8 1.5-5.3-1.3-5.3.1-5.9.3-2.7 5.1 2.6 3.2.7 11.9-1.1z" id="AZE1724" name="Qəbələ"/>
  <path d="M499.1 156.8l-.3 2.7-.1 5.9 1.3 5.3-1.5 5.3-1.3 5.8-4.8 10.7-5.3 9.7.7 5.3-.6 5.5-5.7 10-3.5 13.1-.2 13.7-16.4-8.7-15.2-11.7-2.9-3.3-2.3-4-.9-4.9-1-4-2.4-.2-2.5.8-1.6-2.1.7-3-3.8-4.3-2.8-5.3 2-9.2 3.8-8.4 7.2-15.7 2-12.2 1.5-9.2 1.4.5 17.7 1.7 3.7 1.3 4.8 6.8 3.1 2.4 3.5.1 6.1-4.1 3.3-1.3 3.4.4 8.9 4.6z" id="AZE1725" name="Oğuz"/>
  <path d="M411.2 92.1l-.5 1-1.8 9.2-4 7.3-14 9.6-22.2 9.9-6.6 4.2-2.8 3.5-1.7 4.1-2.2 3.2-3.1 2.6-3.6 8.5-1.1 10.8 1 8.8 7.7 4.1 11.8 19.2.5 25.7-14.3-7.9-14.7-4.5-.8-6-2.5-5.2-1-6.6-.7-6.3-6.8-4.1-7.8-.3-5-3.8 1-1.3 1.4-7.3.9-7.8 1.6-6.1 1-1.4 2.3-2.1 1-1.5.4-1.5.2-3.9.3-1.8 1.5-1.8h1.9l-1.1-3.3-5.3-8.3-3.3-3.7-1.4-2.1 1.3-6.4 7.5-9.6 5.6-12.3 5.6-9.1 8.8-2.9 11.3.6 11 3.5 10.1-2.2 6.8-9.6 7-.9 3.2-1.3 3.3-.7 3.1.8 2.7 3.2 1.2 3.9.6 3.9 1.3 3.3 3.4 2.7z" id="AZE1726" name="Qax"/>
  <path d="M443.2 144.4l-1.5 9.2-2 12.2-7.2 15.7-3.8 8.4-2 9.2 2.8 5.3 3.8 4.3-.7 3 1.6 2.1 2.5-.8 2.4.2 1 4 .9 4.9 2.3 4 2.9 3.3 15.2 11.7 16.4 8.7-1.6 6-6 1.7-6.7 1.3-6.5-1.5-3-1.5-3-.9-3.1 1.6-4.1-.1-4.3-1.8-7-1.8-7.1-1.4-13-5.7-13-5.4-15.3-8.6-15.5-7.9-.5-25.7-11.8-19.2-7.7-4.1-1-8.8 1.1-10.8 3.6-8.5 3.1-2.6 2.2-3.2 1.7-4.1 2.8-3.5 6.6-4.2 22.2-9.9 14-9.6 4-7.3 1.8-9.2.5-1 1.3 1.4 1.4 4.2.9 2.3 5.3 6.7 1.3 2.7.6 5.6-.3 11.9 1.7 5.2 3 3 12.9 7.8 3.9 1.5zm-27.9 22.8l2.7-6-.5-4.6-3.5-6.1-2-1.5-1.9 1.5-1.2 3.6-1.2 4.3-1.5 4.7-.4 3.5 7 1.9 2.5-1.3z" id="AZE1727" name="Şəki"/>
  <path d="M678.1 124.7l-2 9.4.2 9.2 2.3 2.8v3.3l-4.4 5.6-8.9 7.9-4.5 10.9 7.2 7.3 6.2 8.1-2.3 5.8-4.3 3.4-3.3 5 2.5 5.4.9 8.6-.6 10-11.4-3.4-11-4.7-13.4-3.8-13.8-.2-10-8.9-12.9-1-9.3-4.3-13.9-8-4.8-2.1-5.1-.4-5.1-1.2-13.4-7.9-4.4-13.5 33-25.3 33.8-23.7 11.6-9.8 12.6-6.5 10.2-3.2 9.5-5.5 3.5 6.8 4.4 6.8 3.1 6.3 3.1 6.2 3 4.1 4.2-1 4.1-1.5 3.4 3z" id="AZE1728" name="Quba"/>
  <path d="M649.3 94l-9.5 5.5-10.2 3.2-12.6 6.5-11.6 9.8-33.8 23.7-33 25.3-6.3-1.1-6.2-1.4-5.5-3.6-1.3-2.9 2.6-.2 7.3-2.2 4-2.6.7-2.2-.9-2.9-.7-4.7.4-4.7 1.6-2.2 2.3-1.6 2.5-3.1 1.5-4.1.8-3.6 1.8-1.9 4.4.8 3.8-2.2 5.6-16.3 3.3-6.3 5.6-3.5 19.7-3.8 5-2.7 8.9-7.8 14.8-9.3 3.9-4.2 3.4-6.6 7.2-19.8 1.2-1.5 4.4-.4 4.5 5-3.9 12 3.1 11.1 4.6.4 4.2 1.2-.1 4.5-2.8 4 3.2 6.9 2.1 9.5z" id="AZE1729" name="Qusar"/>
  <path d="M735.1 122.7l-1 .3-9.1.3-8.9-1.6-8-.7-7.8 3-5.9-.4-5.4-2-5.4 2.5-5.5.6-3.4-3-4.1 1.5-4.2 1-3-4.1-3.1-6.2-3.1-6.3-4.4-6.8-3.5-6.8-2.1-9.5-3.2-6.9 2.8-4 .1-4.5-4.2-1.2-4.6-.4-3.1-11.1 3.9-12-4.5-5-4.4.4 11.7-15.2 8.2-13.3 1.8 1.6 5.2 3.2 6 5.5L678 42.5l5.8 6 2.4 3.5 1 5.6 11.6 13.2 6.5 14.1 3.5 1.3 2.9 3 2.1 3.5 1.5 3 5.5 8.1 4.2 1.3 1.4.8 2.6 3.8 6.1 13z" id="AZE1730" name="Xaçmaz"/>
  <path d="M385.4 77.2l-6.8 9.6-10.1 2.2-11-3.5-11.3-.6-8.8 2.9-5.6 9.1-5.6 12.3-7.5 9.6-1.3 6.4-1.1-.8-2.7 1.1-2.7-6.4-8.4-5-16.6-7-8-7.5-3.4-.8-2-1-8.9-6.2-3-3.7-1.5-5-1.3-8.9 4.1.9 5.1 2.9 5.2-.5 9.3-6.8 5.9-1.3 5.9-2 5.1-3.5 3.9-5.2 2-7 2.8-6.4 5-4 5.3-3.4L324 33l5.8-6.2 2.4-7.9-1.2-5.2 1.1-.8 2.8-3 1.5.1.7 2.5 1.5 9 .9 3.1 1.7 2.7 11.2 10.4 2.9 1.8 2.2.6 4.4.6 2 1 .8 1.3.9 4.2.6 1.7 2.4 3.2 8.4 7.2 4.3 6.9 1.4 6.8 2.5 4.2h.2z" id="AZE1731" name="Zaqatala"/>
  <path d="M423 459.9l4.4 9.8 8.5 5.4 2.6 8.5-4.8 9.4-6.5 1.6-6.6 1.3-5.2 1.4-5.1.9-3.2 1.8-3 3.2-3.8 2.2-3.9 1.6-7.8.6-3 5.1 6.4 1.3 5.5-.8-3.9 4.9-7 1.6-2.8 3.3 1.1 3.7 3.8-.4 3.5-3 5-2.1 1.3 4.9-1.7 2.4-1.4 2.6 1 4.4.8 4.3-3 .9-3.2.6v2.4l-1.3 2.9-3.6 5.7 2.1 6.8-.1 2.9-2.6.1-3.4.5-2.9 2.7-4.3.7-2.2-4-5.7-3.2-5-4.3.2-3.1-1.1-2.5-5.3-2-4.3-2.9-3.7 2.5 2.6 7.1-2.2 7.2-6.3-.6-6.8-2.6 3.1-4.5 1.6-5.2-2-3.4-3-2.2-7.2 1.9-4.1-.7-4.2-.8 4.7-3.2 3.2-4.7-1-5.7-2.9-3.2 4.5-5.2 7.7-1.3 4.6-7.3 4.6-7.5 4.3 3.9 4.5 2.5 5.8-4.2 5.3-5-2.1-8.6-8.6-9.4-2-4.2 1.5-2.9 2.1-3.1 6.4-3.3 6.7-2.6 3.4-5.4 1.8-6.4 7.4-1.8 7.1 3.5 9.3 6.3 9.7 2.3 2.2-3.5 2.7-3.6 5.4-.6 5.4 1.4z" id="AZE1734" name="Xocavənd"/>
  <path d="M302.2 482l1.7 6.9 1.1 6.9-2.9 5.7-2.3 6.1.7 5.9 3.8 1.4 3.3 1.6 2.9 2.6 7.1-.8 5.3-8.9 4.6-1.6 4.7.5 2.4 4.8.9 6.3-7.7 1.3-4.5 5.2 2.9 3.2 1 5.7-3.2 4.7-4.7 3.2-6.7 4.7-6.7 5.2-7.7-.9-6.5-4.2 2.1-1 1.2-1.6.1-2.1-1.2-2.3v-3.7l2-1.8 2.5-1.6 1.5-2.8-.5-3.6-2.1-2.9-2.8-1.8-2.7-.7-10.8 1.1-3.4-.6-2.5-1.9-4-5.4-2.5-2-5.8-.4-11.6 6-6 1.2-3.8-1.2-2.5-2.4-4-7.6-2.4-3-3-1.7-6.4-1.9-5.4-4.3-6.6-13.4-4.6-4.5-10.8-3.3-5.6-2.9 3.2-2.5 6.7-4.8 6.2-5.6 3.2-7.4 3.4-5.4 4.4 3.6 4.3 4.8 5.8-.7 6-1.9 12.3-1.8 12-4.1 7.3-3.2 7.7-1.2 7.2-2.6 7.1-3.2-2.3 6.7 1.3 5.7 3.9 2.6 3.6 3.4 5.9 12.3 2.9 13.9z" id="AZE1735" name="Lankaran"/>
  <path d="M335.1 557.6l-4 3.9-1.1 6.8 2.4 4.8 3.3 4.9.6 7.3 2.6 6.2 5.9 3.5 5.6 4.1-6.9 3.8-6.7 4.4-5.7 6.5-4.9 7.2-6.9-4.2-1.9-16-5.2-.5-.2-.6-2.3-2.3-7.3-5.2-4.1-4.3-1.6-3.3-.9-3.5-1.3-3.2-2.7-2.2-12.3-5.5-5.6-4.4-2.3-6.9 2.2-5.7 5.4-3.4 12.5-2.3 6.5 4.2 7.7.9 6.7-5.2 6.7-4.7 4.2.8 4.1.7 7.2-1.9 3 2.2 2 3.4-1.6 5.2-3.1 4.5z" id="AZE1736" name="Qubadli"/>
  <path d="M336.4 478.8l-1.4 2.3.2 2.4 1.6 1.2 2.8-.1 1.2-1.4 1.7-1 1.8 7.6.4 6.3.1 4.4-.1 4.1-4.6 7.5-4.6 7.3-.9-6.3-2.4-4.8-4.7-.5-4.6 1.6-5.3 8.9-7.1.8-2.9-2.6-3.3-1.6-3.8-1.4-.7-5.9 2.3-6.1 2.9-5.7-1.1-6.9-1.7-6.9 7.7-1.2 7.1-3.5 7.2-.9 7.8 1.3 4.4 1.1z" id="AZE1737" name="Şuşa"/>
  <path d="M375.3 335.2l2.3 10.4 1.8 2.4 2.4 1.7 3 5.5 4.1 3.7 4.9 1.8-.7 14.1.4 7.7 1 4.1.8 4.3-4.8.6-4.5-1.4-1.6-5.7-3.2-4.1-3.9 1.7-4.3-.8-1.8-1.8-2.2-.8-1.2 2.8 1 3.6-10.7 5.3-9.2 4.2-1.3 7.6-4.4 4.6-2.5 6-.8 8-4-4.5-2.2-5-2.1-4.5-4.4-3.5-8.5-8.1-10.2-1-3.8 3-3.9 1.2-2.2-6.1-1.5-7.3-1.9-8 .8-8.2 3.4-2.9 1.1-3.7.7-3.9 5.9-7.7 9.4-3.7 8.2-5.2 8.5-3.7 6.4.2 6.3-.2 3.7-2.1 6.8-5.2 3.3-2.1 7.9-7.7 1.3 3.5.8 3.7 2.6 3.8 3 3.4z" id="AZE1738" name="Tərtər"/>
  <path d="M355.5 473.6l-2.1 3.1-1.5 2.9 2 4.2 8.6 9.4 2.1 8.6-5.3 5-5.8 4.2-4.5-2.5-4.3-3.9.1-4.1-.1-4.4-.4-6.3-1.8-7.6-3.1-2.6-3-.8-4.4-1.1-7.8-1.3-7.2.9-7.1 3.5-7.7 1.2-2.9-13.9-5.9-12.3-3.6-3.4-3.9-2.6-1.3-5.7 2.3-6.7 10-6.1 5.2 2.6 4.6 3.4 5.3-3.1 3.8-5.6 6.2-3.3 7.1-1.3 6 4.5 7-2 8.2 4.2 4.3 9.9 6 5.6 7 3.3-1.5 6-3.5 4.6-3.8 6.6-3.3 6.9zm-12.7-2.9l2.4-6.3 1.5-.2.6-1.7-1.3-2.6-3-1.4-1.2.7-2.5 2.2-2.9 4.1.5 5.2 2.7 1.9 3.2-1.9z" id="AZE1739" name="Xocalı"/>
  <path d="M357.8 612.9l-2.6 2.1-2.4 2.7-4.3 7.7-1 1.3-1.4 1.1-2.8 1.6-1.3 1.1-2.1 3.2-2.8 6.7-2.8 2.7-9.9 5-3.1 2.7-2.3 2.9-4.8 10-2 3.1-2.3 2.7-2.7 2.2-2.7 1.7-3.7 1.5-3.1.2-5.9-12.6-.8-2.5-.1-2.7.3-2.7.9-4 2.3-7 .5-6.1-1-6.3-2.1-7.2-4.2-3.3-5.6-3.3-4.4-4.3-.2-6.8 4-3.7 5.9.8 10.4 5.3 2.1-.3 7.9-5.7 3.6-.1 1.5-.8-.6-1.5 5.2.5 1.9 16 6.9 4.2 4.9-7.2 5.7-6.5 6.7-4.4 6.9-3.8 5.8 7.6 1.6 6.2z" id="AZE1740" name="Zəngilan"/>
  <path d="M9.4 510.2L7 508.7l-2.4-3.4-1.9-8.4-1.7-2.8 4.8-2.1 8-1.4 7.4.1 5.8-1.4 4.5-2.5v1.3l-3.7 4.5-6.7 2-7 6.9-4.7 8.7z" id="AZE2415" name="Sədərək"/>
  <path d="M170.5 662.6l3.2-5.6-5.1-5.2-6.1-4.4-.4-2.2.8-2.1.6-4 1-3.6 7.2-9.1 6-13.1 1.6-4.2 1.1-4.3.8-3.8 1.1-3.5 3.6-3.8 3.4-4 4-5.2 9.7 4.8 3.5 3.3 1.1 1.8.4 1.6-.4 1.6-5.2 6.9-1.1 5.6 1.6 5.8 3.6 6 4.4 6.3 3.5 7 8.8 24.9 10 19-1.7.2-9.9-2.5-11.3-5.1-35.9-7.6-3.9-1.5z" id="AZE2418" name="Ordubad"/>
  <path d="M68.1 524.6l-3.7 11.8-3.1 13-5.6 9.1-7.5 5.5-6.1-4.2-1.6-2.6-1.3-.4-2.7-.1-4.4-3.2-.6-1.5 1.4-2.7-3.6-3.2-2.1-4.4-5.1-21.3-2-4.8-3.6-2.6 1.2-1.6-4-.1-3.6-.8-.7-.3 4.7-8.7 7-6.9 6.7-2 3.7-4.5v-1.3l1-.6 6.3-4.9 6.4-2.2 5.8 3 12.5 16.1 1.8 3.7.7 4.1-.2 5.2-1.7 8 .7 3.2 3.3 2.2z" id="AZE2419" name="Şərur"/>
  <path d="M111.8 540.4l-1.8 2.4-5.5 4.6-4.1 6.3 2.6 2 3.7 1.5 1.5 4.6 1.8 4.8 7.6 3.7 7.9 4 3.6 4.6-.4 4.4 1.6 3 2.9-.5 1.9 6.2-5.1 3.3-10.6.2-10.8.8-9.4-.5-6.6 5.1 11.8 8.7 14.8-1.7 5.4 2 4.8 3.5-.5 7.9-3.2 6.8 3.2 7.3 4.5 6.6-1 3-2.3 2.9.7 8.2-.8-.1-3.5-2.1-4.7-1.3-3.9-1.9-3.6-2.4-2-2.3-.3-2.4 1.2-3.7.4-2.3-.9-1.4-4-1.9-1.6-1.2-.9-1.8-1.3-4.8-.7-1.7-1.7-1.7-3-2.1-1.2-2.2 1.5-3.3-1-2.3-2.2-1.4-2.4-.5-1.7-.8.1-1.9.4-2.1-.5-1.4-1.6-.2-1.5.7-1.7 1.2-17.7-5.9-4.5 1.4-1.1-3.4-1.8-10.9-1.2-2.4-1.4-2.1-1-2.3 3.8 1.5 3.8 1.2 4.5-1.4 4.4-2.1 3.4-2.3.7-4.9-2.3-5.2.9-2.6 1.1-2.2-1.3-6.1-2.5-5.8-1.1-5.9 1.3-5.9 1.7-6.9 2.2-6.6 3.9-6.1 1.4-1.4 4.2 6 2 4.6 1.7 2.5 2.5 1 8.1.7 3 1.6 5.4 5.5z" id="AZE2420" name="Babək"/>
  <path d="M193.3 584.5l-4 5.2-3.4 4-3.6 3.8-1.1 3.5-.8 3.8-1.1 4.3-1.6 4.2-6 13.1-7.2 9.1-1 3.6-.6 4-.8 2.1.4 2.2 6.1 4.4 5.1 5.2-3.2 5.6-8.8-3.5-15.2-.1-9.7-2.4-4.7-.2-1.3-.3-.7-8.2 2.3-2.9 1-3-4.5-6.6-3.2-7.3 3.2-6.8.5-7.9-4.8-3.5-5.4-2 7.3-4.6 3.5-8 5.1-3.3-1.9-6.2 7.3-4.2 7.5-2.9 4.9-2.7 3.8 4.1 4.3.8 3.6-4.5 5.2-6.2.5 1 9.7 2.5 3.5 2.9 3.2 3.5 4.1 3.2 2.5 1.2z" id="AZE2421" name="Culfa"/>
  <path d="M119.2 607.9l-14.8 1.7-11.8-8.7 6.6-5.1 9.4.5 10.8-.8 10.6-.2-3.5 8-7.3 4.6z" id="AZE2422" name="Naxçıvan"/>
  <path d="M169.8 570.2l-5.2 6.2-3.6 4.5-4.3-.8-3.8-4.1-4.9 2.7-7.5 2.9-7.3 4.2-2.9.5-1.6-3 .4-4.4-3.6-4.6-7.9-4-7.6-3.7-1.8-4.8-1.5-4.6-3.7-1.5-2.6-2 4.1-6.3 5.5-4.6 1.8-2.4 1.8 1.1 1.9.3 2-.4 3.7-1.7 13.7-8.8 4.6-1.9 21.8-5.3 4-.1 4.7 1.8 3.9 2.8 1.5 2.8v3.8l-.5 5.6 1.5 10.1-.7 3.5-5.8 9.5-1.1 4.4 1 2.3z" id="AZE2423" name="Şahbuz"/>
  <path d="M342.8 470.7l-3.2 1.9-2.7-1.9-.5-5.2 2.9-4.1 2.5-2.2 1.2-.7 3 1.4 1.3 2.6-.6 1.7-1.5.2-2.4 6.3z" id="AZE4838" name="Stepanakert"/>
  <path d="M351.6 317.2l-1.5.1-1.1-1.1-.6-1.4 2.7-3 2.3 2.1-.2 2.2-1.6 1.1z" id="AZE5561" name="Naftalan"/>
  <path d="M698.4 704.5l-2.7 3.6-2.3 1-.9-1.5-.4-2.9v-6.8l3.5-2.2 2.8 6.9v1.9z" id="AZE5562" name="Lankaran"/>
  <path d="M710 447.3l-2.4 2.3-1.3-.5-1.1-1.2-3.2-1.5-1.2-1.6-1.3-3 .1-3 .5-6.6 2.5-.8 3.7 1 4.5.2 2-.3 1.6 1 .7 1.9-.2 6.6-2.3 2.7-2.6 2.8z" id="AZE5563" name="Shirvan"/>
  <path d="M415.3 167.2l-2.5 1.3-7-1.9.4-3.5 1.5-4.7 1.2-4.3 1.2-3.6 1.9-1.5 2 1.5 3.5 6.1.5 4.6-2.7 6z" id="AZE5564" name="Şəki"/>
  <path d="M342.5 482.2l-1.7 1-1.2 1.4-2.8.1-1.6-1.2-.2-2.4 1.4-2.3 3 .8 3.1 2.6z" id="AZE5565" name="Şuşa"/>
  <path d="M411.8 298.3l-1.6 2.3-5.9-.3-5.4-3.2-2.4-7.3 3-4.8h7.8l3.7-.2 1.9.2.8.7-.3 2.9-1.7 4-.4 1.6.1 2.7.4 1.4z" id="AZE5566" name="Yevlakh"/>
  <path d="M84.9 518.5l-1.4 1.4-3.9 6.1-2.2 6.6-1.7 6.9-1.3 5.9 1.1 5.9 2.5 5.8 1.3 6.1-1.1 2.2-.9 2.6 2.3 5.2-.7 4.9-3.4 2.3-4.4 2.1-4.5 1.4-3.8-1.2-3.8-1.5-3.2-7.1-1.3-2.1-1.6-.9-1.7-2.1-1.4-2.2-.6-1.6-1-1.2 7.5-5.5 5.6-9.1 3.1-13 3.7-11.8 6.3-1.5 4.8-4.6 4.6-1.5 1.1 1.5z" id="AZE5567" name="Kangarli"/>
  <circle cx="653.1" cy="92.6" id="0"/>
  <circle cx="590.6" cy="679.6" id="1"/>
  <circle cx="582" cy="673.9" id="2"/>

    </MapLayout>
);

export default AzerbaijanMap;
        
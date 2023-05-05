import { writeFileSync } from 'fs';
import fetch from 'node-fetch';
import deadbanner from './deadbanner.json';

const URL = 'https://raw.githubusercontent.com/Discord-Custom-Covers/usrbg/master/dist/usrbg.json';
let usrbg = {};

fetch(URL)
    .then(response => response.json())
    .then(data => {
        for (const i of data) {
            if (deadbanner.includes(i.img)) continue;
            usrbg[i.uid] = i.img;
        }
        writeFileSync('./usrbg.json', JSON.stringify(usrbg));
    });

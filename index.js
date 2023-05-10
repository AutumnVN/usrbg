import { writeFileSync, readFileSync } from 'fs';
import fetch from 'node-fetch';

const URL = 'https://raw.githubusercontent.com/Discord-Custom-Covers/usrbg/master/dist/usrbg.json';
const deadbanner = JSON.parse(readFileSync('./deadbanner.json'));
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

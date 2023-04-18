import { writeFileSync } from 'fs';
import fetch from 'node-fetch';

const URL = 'https://raw.githubusercontent.com/Discord-Custom-Covers/usrbg/master/dist/usrbg.json';
let usrbg = {};

fetch(URL)
    .then(response => response.json())
    .then(data => {
        for (const i of data) {
            usrbg[i.uid] = i.img;
        }
        writeFileSync('./usrbg.json', JSON.stringify(usrbg));
    });

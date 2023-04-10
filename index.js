import { writeFileSync } from 'fs';
import fetch from 'node-fetch';

const URL = 'https://raw.githubusercontent.com/Discord-Custom-Covers/usrbg/master/dist/usrbg.json';

fetch(URL)
    .then(response => response.json())
    .then(data => {
        for (const i of data) {
            writeFileSync(`./dist/${i.uid}.txt`, i.img);
        }
    });
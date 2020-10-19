require('dotenv').config();
require('./config/database');
const Pallet = require('./models/pallet');
const fs = require('fs');

Pallet.deleteMany({}, () => {
    fs.readFile('./produce-inv-sample-data.txt.ignore', 'utf8', async (err, data) => {
        if (err) return console.log(err);
        data = data.split('\n');
        data = data.slice(1, 11).map(line => {
            const vals = line.split('\t').map(s => s.trim());
            const doc = {
                palletID: vals[0],
                species: vals[1].slice(0, 2),
                variety: vals[1].slice(2),
                varietyDesc: vals[2],
                size: vals[3],
                packaging: vals[4],
                repack: vals[5],
                growerID: vals[6],
                labelName: vals[7],
                boxCount: parseInt(vals[8]),
                fumigated: vals[9],
                packDate: vals[10] === '0' ? null : new Date(2020, parseInt(vals[10].charAt(0)) - 1, parseInt(vals[10].slice(1))),
                boat: vals[11],
                arrivalDate: new Date(2020, 8, 23 - parseInt(vals[12])), // convert # of days into date
                warehouseID: vals[13],
                load: vals[14],
                isReturned: (vals[15] !== "0"),
                status: 'warehouse',
            };
            return doc;
        });
        await Pallet.create(data);
        console.log(data.length);
        process.exit(0);
    });
});

var copydir = require('copy-dir');
const excludes = [/node_modules/, /^\..*/, /output/]

const { readdirSync, copyFileSync } = require('fs')

const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

const moduleDirectoris = getDirectories(__dirname).filter(dir => !excludes.some(ex => ex.test(dir)));

console.log(moduleDirectoris);

moduleDirectoris.forEach(dir => {
    console.log(dir);
    copydir(`./${dir}/dist`, `./output/${dir}`, function(err) {
        if (err) {
            console.error('dir: ' + err);
        }
    })
})



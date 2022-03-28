// Based on tutorial by Mat Swainson (https://medium.com/@matswainson/building-a-search-component-for-your-next-js-markdown-blog-9e75e0e7d210)

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function getNotes(){
     const notesDirectory = path.join(process.cwd(),'out/meetings')
     const fileNames = fs.readdirSync(notesDirectory);
     const notes = fileNames.map(fileName =>{
         const id = fileName.replace(/\.html$/,'');
         const fullPath = path.join(notesDirectory,fileName);
         const fileContents = fs.readFileSync(fullPath,'utf8');
         const matterResult = matter(fileContents);
         return {
             id,
             title:matterResult.data.title,
             data: matterResult.content.toLowerCase()
         }
     })

     return JSON.stringify(notes);
}

const fileContents = `export const notes = ${getNotes()}`

// create cache dir
try {
    fs.readdirSync('cache')
}catch(e){
    fs.mkdirSync('cache');
}

fs.writeFile('cache/data.js',fileContents, function(err){
    if (err) return console.log(err);
    console.log('Notes cached');
})
#!/usr/bin/env node

const fs = require('fs');

//

const projectStructureSchema = {
'src': ['index.js'],
'public': ['index.html', 'style.css']
}

Object.entries(projectStructureSchema).forEach(([dir, files]) => {
	fs.mkdirSync(dir, {recursive: true});
	files.forEach(file => fs.writeFileSync(`${dir}/${file}`, ''));
})

console.log("Project structure created successfully! 😊")

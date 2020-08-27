const fs = require('fs');
const request = require('request');

const url = process.argv.slice(2)[0];
const fileTarget = process.argv.slice(2)[1];

//request the page (error, response, body)
const getBody = callback => {
	request(url, (error, response, body) => {
		if (error) throw error;
		callback(body);
	});
};

getBody(content => {
	fs.writeFile(fileTarget, content, 'utf8', error => {
		if (error) throw error;
		const fileSize = fs.statSync(fileTarget).size;
		console.log(`Downloaded and saved ${fileSize} bytes to ./index.html`);
	});
});

// create file index.html(target file) in the current directory
// open the file
// write the content to the file

//log Downloaded and saved **** bytes to ./index.html

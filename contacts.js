const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

// Create Folder Data
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath);
}

// Create File Contacts.json
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
	fs.writeFileSync(dataPath, '[]', 'utf-8');
}
// Quest Terminal
const thisQuestion = (quest) => {
	return new Promise((resolve, reject) => {
		rl.question(quest, (nama) => {
			resolve(nama);
		});
	});
};

const saveContact = (nama, email, nohp) => {

	const contact = {nama, email, nohp};
		const buff = fs.readFileSync('data/contacts.json', 'utf-8');
		const contacts = JSON.parse(buff);

		contacts.push(contact);

		fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

		const pesan = chalk`{bgGreen.yellow.bold Data Berhasil Ditambahkan}`;
		console.log(pesan);


		rl.close();
};

module.exports = {
	thisQuestion, saveContact
};
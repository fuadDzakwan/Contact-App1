const contacts = require('./contacts.js');
// Process
const main = async () => {
	const nama = await contacts.thisQuestion('Masukan Nama Lengkap Anda : ');
	const email = await contacts.thisQuestion('Masukan Email Aktif Anda : ');
	const nohp = await contacts.thisQuestion('Masukan No Hp Aktif Anda : ');

	contacts.saveContact(nama, email, nohp);
};
main();

const bcrypt = require('bcrypt');

async function run() {
    const password = 'mypassword';
    const hash = await bcrypt.hash(password, 10);
    console.log('Hash:', hash);

    const isValid = await bcrypt.compare(password, hash);
    console.log('Password valid?', isValid);
}

run();

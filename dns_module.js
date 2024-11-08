const dns = require('dns');

const website = 'www.dypgroup.edu.in';

dns.lookup(website, (err, address, family) => {
    console.log('Address of %s is %j family: IPv%s',
        website, address, family);
});
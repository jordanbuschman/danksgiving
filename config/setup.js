var dotenv = require('dotenv');

dotenv.load();

var requiredEnv = [ //Required environment variables
    'SLACK_CLIENT_ID',
    'SLACK_CLIENT_SECRET',
    'SLACK_CODE'
];

var unsetEnv = requiredEnv.filter((env) => !(typeof process.env[env] !== 'undefined'));

if (unsetEnv.length > 0) {
    throw new Error("Required ENV variables are not set: [" + unsetEnv.join(', ') + "]");
}

const { mockServerClient } = require('mockserver-client');

const MOCKSERVER_HOST = 'localhost';
const MOCKSERVER_PORT = 17189;

const { mockAnyResponse, clear } = mockServerClient(MOCKSERVER_HOST, MOCKSERVER_PORT);

async function main() {
    await clear()

    await mockAnyResponse({
        httpForward: {
            scheme: 'HTTP',
            host: 'localhost',
            port: 17188
        }
    });
}

main();
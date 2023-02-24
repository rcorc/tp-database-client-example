import fetch from 'node-fetch';

async function get(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
        });
        console.log(`status: ${response.status}`)

        if (!response.ok) {
            throw new Error(`Response error code: status: ${response.status} ${response.statusText}: ${await response.text()}`);
        }

        return response.json();
    } catch (err) {
        console.log(err);
    }
}

async function post(url, data = '') {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        console.log(`status: ${response.status}`)

        if (!response.ok) {
            throw new Error(`Response error code: status: ${response.status} ${response.statusText}: ${await response.text()}`);
        }

        return response.json();
    } catch (err) {
        console.log(err);
    }
}

const minion = {
    userId: '222222222222222218',
    username: 'minion 3!$5',
    discriminator: '3665',
    avatar: 'a_oisdfasdgq245',
    nickname: 'Minion',
    joinedAt: new Date(),
};

const cleo = {
    userId: '3333333333333331777',
    username: 'Cleo ver',
    discriminator: '0002',
    avatar: 'adfsgasdfg',
    nickname: 'Cleo(patra)',
    joinedAt: new Date(),
};

console.log(await post('http://localhost:3000/member/', {
    userId: '222222222222222218',
    tag: 'minion 3!$5#3665',
    avatar: 'a_oisdfasdgq245',
    nickname: 'Minion',
    joinedAt: new Date(),
}));
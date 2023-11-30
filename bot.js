const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body.toLocaleLowerCase() === 'oi') {
		client.sendMessage(message.from, 'Olá, que bom ver você!');
        client.sendMessage(message.from, 'Digite a opção desejada');
        client.sendMessage(message.from, '1. Tradicionais');
        client.sendMessage(message.from, '2. Combos');
        client.sendMessage(message.from, '3. Bebidas');
	}

    if(message.body.toLocaleLowerCase() === '1') {
		client.sendMessage(message.from, 'Qual sabor você deseja?');
        client.sendMessage(message.from, 'FNP P (serve uma pessoa)');
        client.sendMessage(message.from, 'FNP M (serve 2 pessoas)');
        client.sendMessage(message.from, 'FNP G (serve 4 pessoas)');
	}

    if(message.body.toLocaleLowerCase() === '2') {
		client.sendMessage(message.from, 'Qual combo você deseja?');
        client.sendMessage(message.from, 'FNP M com Fritas e 2 molhos');
        client.sendMessage(message.from, 'FNP G misto (frango, coração, carne) e anéis de cebola mais 3 molho');
	}

    if(message.body.toLocaleLowerCase() === '3') {
		client.sendMessage(message.from, 'Qual bebida você deseja?');
        client.sendMessage(message.from, 'Suco natural de laranja');
        client.sendMessage(message.from, 'Refrigerante Coca-cola 2l');
        client.sendMessage(message.from, 'Água mineral Sem Gás');
	}

}); 

client.initialize();
 
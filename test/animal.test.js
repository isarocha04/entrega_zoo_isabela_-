const request = require('supertest');
const app = require('../app');

describe('Animais', () => {
  it('Deve criar um animal', async () => {
    const res = await request(app)
      .post('/animais')
      .send({ nome: 'Patinho', especie: 'Bolinha' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.nome).toEqual('Patinho');
  });
});

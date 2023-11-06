const request = require('supertest');
const app = require('../app');

describe('Recintos', () => {
  it('Deve criar um recinto', async () => {
    const res = await request(app).post('/recintos').send({
      nome: 'Mansão dos patiquinhos',
      interação: 'Dar banho nos patos',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.nome).toEqual('Mansão dos patiquinhos');
    expect(res.body.interação).toEqual('Dar banho nos patos');
  });
});

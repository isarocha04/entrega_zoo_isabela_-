const request = require('supertest');
const app = require('../app');

describe('Alimentação', () => {
  it('Deve alimentar um animal', async () => {
    const animalData = {
      idAnimal: 1,
      nome: 'Patinho',
      especie: 'Bolinha',
    };

    await request(app).post('/animais').send(animalData);

    const res = await request(app)
      .post('/alimentar')
      .send({ idAnimal: 1, alimento: 'Arco-íris' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.alimento).toEqual('Arco-íris');
  });
});

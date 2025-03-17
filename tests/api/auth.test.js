import request from 'supertest';

const BASE_URL = 'https://reqres.in/api';

describe('Testes de Autenticação - Reqres', () => {

  it('Deve retornar status 200 com token ao realizar login com sucesso', async () => {
    const res = await request(BASE_URL)
      .post('/login')
      .send({ email: 'eve.holt@reqres.in', password: 'cityslicka' });
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('Deve retornar status 400 quando tentar logar sem senha', async () => {
    const res = await request(BASE_URL)
      .post('/login')
      .send({ email: 'eve.holt@reqres.in' });
    
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', 'Missing password');
  });
});

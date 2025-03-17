import request from 'supertest';

const BASE_URL = 'https://reqres.in/api';

describe('Validação de Schema JSON - Reqres', () => {

  it('Deve retornar um usuário com o schema correto', async () => {
    const res = await request(BASE_URL).get('/users/2');
    expect(res.status).toBe(200);

    // Verifica se o retorno segue o formato correto
    expect(res.body.data).toHaveProperty('id');
    expect(res.body.data).toHaveProperty('email');
    expect(res.body.data).toHaveProperty('first_name');
    expect(res.body.data).toHaveProperty('last_name');
    expect(res.body.data).toHaveProperty('avatar');
  });

  it('Deve retornar múltiplos usuários com o schema correto', async () => {
    const res = await request(BASE_URL).get('/users?page=2');
    expect(res.status).toBe(200);

    // Verifica se a lista de usuários segue o formato esperado
    res.body.data.forEach(user => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('first_name');
      expect(user).toHaveProperty('last_name');
      expect(user).toHaveProperty('avatar');
    });
  });
});

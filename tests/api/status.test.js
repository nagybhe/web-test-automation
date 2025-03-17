import request from 'supertest';

const BASE_URL = 'https://reqres.in/api';

describe('Testes de Status de API - Reqres', () => {
  
  it('Deve retornar status 200 ao listar usuários', async () => {
    const res = await request(BASE_URL).get('/users?page=1');
    expect(res.status).toBe(200);
  });

  it('Deve retornar status 404 ao tentar acessar um usuário inexistente', async () => {
    const res = await request(BASE_URL).get('/users/999');
    expect(res.status).toBe(404);
  });

  it('Deve retornar status 200 e verificar que recurso não encontrado', async () => {
    const res = await request(BASE_URL).get('/unknown');
    
    // Verifique se o status é 200
    expect(res.status).toBe(200);

    // Verifique a estrutura dos dados
    expect(res.body).toEqual(expect.objectContaining({
      page: expect.any(Number),
      data: expect.arrayContaining([]),
    }));
  });
  
});

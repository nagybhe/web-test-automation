import request from 'supertest';

const BASE_URL = 'https://reqres.in/api';

describe('Testes de Carga - Reqres', () => {

  it('Deve conseguir realizar múltiplas requisições com sucesso', async () => {
    const promises = [];
    
    // Simulando 100 requisições
    for (let i = 0; i < 100; i++) {
      promises.push(
        request(BASE_URL).get('/users?page=1')
          .then(res => expect(res.status).toBe(200))
      );
    }

    // Aguarda todas as requisições
    await Promise.all(promises);
  });
});

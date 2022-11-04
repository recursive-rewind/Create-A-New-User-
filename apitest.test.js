var supertest = require('supertest')
const request = supertest('https://reqres.in/')

jest.setTimeout(60*1000)

it('Post-create a new User',async() =>
{ 
    let user=
    {
        "name": "morpheus",
        "job": "leader"
         
    }
    
    const response = await  request.post('api/users').send(user)
   
   
    expect(response.status).toBe(201)
    
   
})

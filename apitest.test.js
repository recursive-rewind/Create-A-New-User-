var supertest = require('supertest')
const request = supertest('https://reqres.in/')

it('Post-create a new User',() =>
{ 
    let user=
    {
        "name": "morpheus",
        "job": "leader"
         
    }
    
    const response =   request.post('api/users').send(user)
    console.log(response)
    jest.setTimeout(() => {
        
    }, 10000);
   
    expect(response.status).toBe(undefined)
    
   
})
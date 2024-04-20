const mongoose = require('mongoose');
const request = require('supertest');
const server = require('../server');
const dotenv = require('dotenv');
dotenv.config();


//Connect database before starting to test
beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URL);
});

describe('GET /employee/list', () => {
    it("Should return all employees", async () => {
        const res = await request(server)
        .get('/employee/list')
        .set('Authorization',`Bearer ${process.env.TEST_JWT}`)
        console.log("res : ", res);
        // expect(res.statusCode).toEqual(200);
        expect(res._body.success).toEqual(true);
        expect(res._body.data.datas.length).toBeGreaterThan(0);
    })
});

describe('POST /employee', () => {
    it("Should add a new employee", async () => {
        const res = await request(server)
          .post("/employee")
          .send(
            {
                name : "John",
                email : "john@gmail.com",
                phone : "1234567890",
                district : "My district",
                role : "My role",
                jdate : "16-04-2024"
              }
          )
          .set("Accept", "application/json")
          .set("Authorization", `Bearer ${process.env.TEST_JWT}`);

            expect(res._body.success).toEqual(true);
            expect(res.statusCode).toBe(201);
    })
})

//Disconnect database after test
afterEach(async () => {
    await mongoose.connection.close();
    return;
})
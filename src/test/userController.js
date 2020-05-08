import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const { expect } = chai;
chai.use(chaiHttp);

const url = "/api/auth";
describe("User authentication process", () => {
    describe("Register a user successfully", async() => {
        it("should return a validation error", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/register`)
                .send({
                    first_name: 'l',
                    last_name: 'j',
                    email: '',
                    password: 'lo123'
                });
            expect(res).to.have.status(400);
        });

        it("should return Email already exists", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/register`)
                .send({
                    first_name: "lois",
                    last_name: "simon",
                    email: "lois@yahoo.com",
                    password: "loismonl123"
                });
            expect(res).to.have.status(400);
            // expect(res.body).to.have.property(message);
        });

        it("should register a user successfully", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/register`)
                .send({
                    first_name: "xavier",
                    last_name: "francis",
                    email: "xavier@yahoo.com",
                    password: "xavier123"
                });
            // expect(res).to.have.status(201);
            // expect(res.body).to.have.property(message);
        });
    });

    describe("Testing the login process", () => {
        it("should return a validation error", async() => {
            const res = await chai.request(app)
                .post(`${url}/login`)
                .send({
                    email: 'lois@yahoo.com',
                    password: '123'
                });
            expect(res).to.have.status(400);
        });

        it("should return Email doesn't exist", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/login`)
                .send({
                    email: 'jasonjonas6574@mail.com',
                    password: '654323'
                });
            expect(res).to.have.status(400);
        });

        it("should login a user successfully", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/login`)
                .send({
                    email: "lois@yahoo.com",
                    password: "loismonl123"
                });
            // expect(res).to.have.status(201);
        });

        it("should return Invalid password", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/login`)
                .send({
                    email: "lois@yahoo.com",
                    password: "ggst234"
                });
            expect(res).to.have.status(400);
        });
    });
});
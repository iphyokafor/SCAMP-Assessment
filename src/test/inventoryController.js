import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const { expect } = chai;
chai.use(chaiHttp);

const url = "/";
describe("Inventory CRUD Operation", () => {
    describe("Add an inventory successfully", async() => {
        it("should return inventory already exists", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/inventory`)
                .send({
                 products: "5eb56cf590adc05b002884ef"
                });
        });

        it("should create an inventory successfully", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/inventory`)
                .send({
                    products: "5eb56da4a5ab5620fc57a581"
                });
        });
    });

    describe("retrieve inventories", async() => {
    it("should view all inventories", async() => {
      const res = await chai
          .request(app)
          .get(`${url}/inventory`)
          .send({});
  });
});

describe("retrieve a specific inventory", async() => {
  it("should show a single inventory", async() => {
    const res = await chai
        .request(app)
        .get(`${url}/5eb56d1690adc05b002884f0`)
        .send({});
});
});

describe("update an inventory", async() => {
  it("should update a specific inventory", async() => {
    const res = await chai
        .request(app)
        .patch(`${url}/5eb56d1690adc05b002884f0`)
        .send({});
});
});

describe("delete an inventory", async() => {
  it("should delete an inventory successfully", async() => {
    const res = await chai
        .request(app)
        .delete(`${url}/5eb56d1690adc05b002884f0`)
        .send({});
});
});
  })
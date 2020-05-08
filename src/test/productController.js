import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const { expect } = chai;
chai.use(chaiHttp);

const url = "/";
describe("Product CRUD Operation", () => {
    describe("Add an product successfully", async() => {
        it("should return product already exists", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/products`)
                .send({
                  name: "coffee",
                  quantity: 6,
                  price: 15,
                });
        });

        it("should create a product successfully", async() => {
            const res = await chai
                .request(app)
                .post(`${url}/products`)
                .send({
                  name: "beverages",
                  quantity: 20,
                  price: 150,
                });
        });
    });

    describe("retrieve products", async() => {
    it("should view all products", async() => {
      const res = await chai
          .request(app)
          .get(`${url}/products`)
          .send({});
  });
});

describe("retrieve a specific product", async() => {
  it("should show a single product", async() => {
    const res = await chai
        .request(app)
        .get(`${url}/products/5eb575d390ee3557847bde98`)
        .send({});
});
});

describe("update a product", async() => {
  it("should update a specific product", async() => {
    const res = await chai
        .request(app)
        .patch(`${url}/products/5eb575d390ee3557847bde98`)
        .send({});
});
});

describe("delete a product", async() => {
  it("should delete a product successfully", async() => {
    const res = await chai
        .request(app)
        .delete(`${url}/products/5eb575d390ee3557847bde98`)
        .send({});
});
});
  })
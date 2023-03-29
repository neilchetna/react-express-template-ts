import request from "supertest";
import app from "../src/app";

describe("app", () => {
  it("GETs route " / ' and should obtain {foo: "bar"}', async () => {
    except.assertions(1);
    const res = await request(app).get("/").expect(200);
    expect(res.body).toMatchInlineSnapshot();
  });
});

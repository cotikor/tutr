const request = require("supertest");
const server = require("../../api/server.js");

describe("notes routes", () => {
  describe("GET all notes", () => {
    it("should return a 200", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get("/notes");
      expect(response.status).toEqual(expectedStatusCode);
    });
  });
  describe("GET single note", () => {
    it("should return a 200", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get("/notes/1");
      expect(response.status).toEqual(expectedStatusCode);
    });
    it("should return a correctly shaped note object", async () => {
      const expectedShape = expect.objectContaining({
        note: {
          id: expect.any(Number),
          updated_at: expect.any(String),
          student: expect.any(Object),
          details: expect.any(String),
        },
      });
      const response = await request(server).get("/notes/1");
      expect(response.body).toEqual(expectedShape);
    });
  });
  describe("POST note", () => {
    it("should add a note", async () => {
      const note = {
        student_id: 4,
        details: "testing new note",
      };
      const response = await request(server).post("/notes").send(note);
      expect(response.status).toBe(201);
      expect(response.body).toEqual({ newNoteID: expect.any(Number) });
    });
  });
  describe("PUT note", () => {
    it("should return a 200", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get("/notes");
      expect(response.status).toEqual(expectedStatusCode);
    });
    it("should update a note", async () => {
      const body = {
        student_id: 7,
        details: "testing note update",
      };
      const response = await request(server).put("/notes/1").send(body);
      expect(response.body).toEqual({ updatedRecords: 1 });
    });
  });
  describe("DELETE note", () => {
    it("should delete a note", async () => {
      const response = await request(server).delete("/notes/1");
      expect(response.body).toEqual({ deletedRecords: 1 });
    });
  });
});

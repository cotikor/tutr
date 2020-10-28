const appointmentsHelper = require("../appointmentsHelper.js");
const faker = require("faker");

describe("GET query to appointments db", () => {
  it("should return all 20 seeded appointments in db", async (done) => {
    const allAppointments = await appointmentsHelper.getAll();
    expect(allAppointments).toHaveLength(20);
    done();
  });

  it("should return 1 appointment", async (done) => {
    const appointments = await appointmentsHelper.getAppointment(1);
    expect(Object.keys(appointments).sort()).toEqual(
      ["date", "subject", "student", "notes"].sort()
    );
    done();
  });
});

describe("INSERT query to appointments db", () => {
  it("should add appointment with specified ID", async (done) => {
    const id = await appointmentsHelper.addAppointment({
      student_id: 1,
      subject: "Geometry",
      date: faker.date.between("2020-05-31", "2020-12-31"),
    });
    expect(id).toEqual(21);
    done();
  });
});

describe("UPDATE query to appointments db", () => {
  it("should update appointment with specified ID", async (done) => {
    appointmentsHelper.updateAppointment(21, {
      student_id: 1,
      subject: 'Chemistry',
      date: faker.date.between("2020-12-31", "2021-6-30"),
    });
    const updated = await appointmentsHelper.getAppointment(21);

    expect(updated.subject).toEqual('Chemistry');
    done();
  });
});

describe("DELETE query to appointments db", () => {
  it("should return a count of 1 when deleting specified appointment", async (done) => {
    const id = await appointmentsHelper.addAppointment({
      student_id: 5,
      subject: 'Physics',
      date: faker.date.between("2020-12-31", "2021-6-30"),
    });
    const count = await appointmentsHelper.deleteAppointment(id);

    expect(count).toEqual(1);
    done();
  });
});

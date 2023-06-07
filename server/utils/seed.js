const connection = require('../config/connection');
const { DepartmentStats, Employee, Meeting } = require('../models');
// const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  console.log(connection);

  const seedDepartmentStats = [
    {
      monthlyEarnings: "$123,456",
      monthlyCosts: "$31,455",
      projectedSales: "$135,603",
      newSale: ""
    }
  ]

  const seedEmployee = [
    {
      fname: "Lucas",
      lname: "Lippert",
      email: "lucas@email.com",
      password: "password12345"
    },
    {
      fname: "Jacob",
      lname: "Nelson-Stone",
      email: "jacob@email.com",
      password: "password12345"
    },
    {
      fname: "Safia",
      lname: "Mustaf",
      email: "safia@email.com",
      password: "password12345"
    },
    {
      fname: "Andrew",
      lname: "Joo",
      email: "andrew@email.com",
      password: "password12345"
    },
    {
      fname: "Mohamed",
      lname: "Mohamed",
      email: "andrew@email.com",
      password: "password12345"
    }
  ]

  const seedMeeting = [
    {
      meetingTopic: "Next weeks sprint",
      meetingDate: "June 14th",
      employees: ""
    },
    {
      meetingTopic: "Projections for q4",
      meetingDate: "June 15th",
      employees: ""
    },
    {
      meetingTopic: "Sales pushes",
      meetingDate: "June 16th",
      employees: ""
    },
    {
      meetingTopic: "Team Lead Meeting",
      meetingDate: "June 16th",
      employees: ""
    }
  ]

  const seedDB = async () => {
    await DepartmentStats.deleteMany({});
    await DepartmentStats.insertMany(seedDepartmentStats)

    await Employee.deleteMany({});
    await Employee.insertMany(seedEmployee)

    await Meeting.deleteMany({});
    await Meeting.insertMany(seedMeeting)

  }

  seedDB()
  console.table(seedMeeting);
  console.table(seedEmployee);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});


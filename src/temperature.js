const { MongoClient } = require("mongodb");
const W1Temp = require("w1temp");

const uri =
  "mongodb://root:pass@localhost:27017?retryWrites=true&w=majority&useUnifiedTopology=true";

const client = new MongoClient(uri);

setInterval(async () => {
  try {
    //getting sensor and sensor data
    const sensor = await W1Temp.getSensor("28-020d92462283");
    const temp = sensor.getTemperature();

    //connecting to database
    await client.connect();
    let database = client.db("test");

    //inserting data
    await database.collection("temperature").insertOne({
      temperature: temp,
      date: Date.now(),
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}, 3 * 60 * 1000);

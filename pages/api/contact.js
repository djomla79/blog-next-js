import { connectToMongoDB, insertDocument } from '../../helpers/db-utils';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid input!' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await connectToMongoDB();
    } catch(error) {
      res.status(500).json({ message: 'Connection Error!' })
      return;
    }

    try {
      const result = await insertDocument(client, 'my-blog', 'messages', newMessage);
      newMessage._id = result.insertedId;
      res
        .status(201)
        .json({ message: 'New message added!', data: newMessage });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Inserting data to db failed!', error: error });
      return;
    }
    client.close();
  }
}

export default handler;

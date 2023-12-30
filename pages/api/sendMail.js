import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'Jeremysmithseo@gmail.com',
        pass: 'egdohmilxzrluwuq',
      },
    });

    try {
      const emailRes = await transporter.sendMail({
        from: email,
        to: 'Jeremysmithseo@gmail.com',
        subject: `New web lead from ${email}`,
        text: `${email} ${name} ${message}`,
      });

      return res.status(200).send({ done: true });
    } catch (err) {
      return res.status(500).send({ error: 'Failed to send email.' });
    }
  }

  return res.status(404).send();
};

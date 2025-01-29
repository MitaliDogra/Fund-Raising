import express from 'express';
import mongoose from 'mongoose';
import Form from './models/form'; // Assuming your model file is named 'form.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// POST: Create a new form submission
app.post('/api/forms', async (req, res) => {
  try {
    const { name, email, number, amount, frequency, paymentMethod, cause, taxBenefits, acknowledgement, consent } = req.body;

    const newForm = new Form({
      name,
      email,
      number,
      amount,
      frequency,
      paymentMethod,
      cause,
      taxBenefits,
      acknowledgement,
      consent
    });

    const savedForm = await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully', form: savedForm });
  } catch (error) {
    console.error('Error creating form:', error);
    res.status(400).json({ message: 'Error creating form', error });
  }
});

// GET: Get all form submissions
app.get('/api/forms', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    console.error('Error fetching forms:', error);
    res.status(400).json({ message: 'Error fetching forms', error });
  }
});

// GET: Get a specific form submission by ID
app.get('/api/forms/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Form.findById(id);

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    res.status(200).json(form);
  } catch (error) {
    console.error('Error fetching form by ID:', error);
    res.status(400).json({ message: 'Error fetching form', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

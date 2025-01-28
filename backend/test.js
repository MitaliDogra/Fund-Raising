import express from 'express';
import mongoose from 'mongoose';
import Form from './models/form.js'; // Assuming your model file is named 'form.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fund', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// Static data for testing
const staticForms = [
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    number: 9876543210,
    amount: 1000,
    frequency: 'quarterly',
    paymentMethod: 'card',
    cause: 'Healthcare',
    taxBenefits: true,
    acknowledgement: true,
    consent: true
  },
  {
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    number: 1234567890,
    amount: 500,
    frequency: 'weekly',
    paymentMethod: 'upi',
    cause: 'Environment',
    taxBenefits: false,
    acknowledgement: true,
    consent: true
  },
  {
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    number: 1122334455,
    amount: 1500,
    frequency: 'quarterly',
    paymentMethod: 'card',
    cause: 'Education',
    taxBenefits: true,
    acknowledgement: false,
    consent: true
  }
];

// Insert static data into the database (only if the collection is empty)
async function insertStaticData() {
  const count = await Form.countDocuments();
  if (count === 0) {
    await Form.insertMany(staticForms);
    console.log('Static data inserted into the database.');
  }
}

// Call the insert function
insertStaticData();

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

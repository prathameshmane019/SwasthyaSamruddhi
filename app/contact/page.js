"use client"
import { useState } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import axios from 'axios';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    setFormData({ name: '', email: '', message: '' });
    console.log(formData);
    const result = await axios.post("/api/nodemailer",formData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            variant='bordered'
            value={formData.name}
            onChange={handleChange}
            className="mb-4"
          />
          
          <Input
            label="Email"
            type="email"
            name="email"
            variant='bordered'
            value={formData.email}
            onChange={handleChange}
            className="mb-4"
          />
          <Textarea
            label="Message"
            name="message"
            variant='bordered'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mb-4"
          />
          <div className="flex justify-center"> 
            <Button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </Button>
          </div>
        </form>
        {showSuccessMessage && (
          <div className="mt-4 flex items-center space-x-2 text-green-500">
            <CheckCircleIcon className="h-6 w-6" />
            <span>Your message has been submitted successfully!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

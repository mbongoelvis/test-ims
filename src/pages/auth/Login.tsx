import React, { useState } from 'react'
import loginImage from '@/assets/images/login-image.png';
import { InputField } from '@/components/InputField';
import { Buttons } from '@/components/Buttons';
interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

export const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with login
      console.log('Form submitted:', formData);
      // Add your login logic here
    }
  };
  return (
    <div className='flex h-screen items-center grid relative grid-cols-1 lg:grid-cols-2 justify-between flex-row'>
      <div
        className='absolute w-full h-full duration-300 inset-0 lg:static bg-cover bg-center bg-no-repeat opacity-20 lg:opacity-100'
        style={{ backgroundImage: `url(${loginImage})` }}
      />
      <div className='w-full h-full px-3 flex justify-center items-center flex-col z-30'>
        <div>
          <div>
            <h3 className='text-[16px] text-start font-semibold mb-5'>Welcome to Elijah's Enterprise</h3>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-6 w-full max-w-[400px] min-w-[280px]'>
                <div>
                  <InputField
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="you@example.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    errorMessage={errors.email}
                  />
                </div>
                <div>
                  <InputField
                    id="password"
                    name="password"
                    label="Password"
                    placeholder="enter password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    errorMessage={errors.password}
                  />
                </div>
                <div>
                  <Buttons variant="without-plus" className='w-full' type="submit">Login</Buttons>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
import { useState } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../components/Common/Box';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';
import FormCheckbox from '../../components/Forms/FormCheckbox';

const SignupScreen = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    phone: '',
    password: '',
    password1: '',
    name: '',
    lastname: '',
    citizenship: false,
    identityType: '',
    identityNumber: '',
    day: '',
    month: '',
    year: '',
    country: '',
    operator: '',
    agreeToPolicies1: false,
    agreeToPolicies2: false,
    agreeToPolicies3: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <MainLayout>
      <div className='flex flex-center'>
        <div className='login no-select'>
          <Box>
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <div className='form-logo center'>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt='Crypto Exchange'
                    draggable='false'
                  />
                </div>
                <h1 className='form-title center'>Create an Account</h1>
                <p className='form-desc center'>
                  Please enter the information below. We will send the activation details to your
                  phone number.
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='email'>Your Email Address</label>
                        <FormInput
                          type='email'
                          name='email'
                          value={formValues.email}
                          placeholder='Enter your email address'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password'>Your Password</label>
                        <FormInput
                          type='password'
                          name='password'
                          value={formValues.password}
                          placeholder='Enter your password'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password1'>Confirm Your Password</label>
                        <FormInput
                          type='password'
                          name='password1'
                          value={formValues.password1}
                          placeholder='Re-enter your password'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='name'>Your First Name</label>
                        <FormInput
                          type='text'
                          name='name'
                          value={formValues.name}
                          placeholder='Enter your first name'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='lastname'>Your Last Name</label>
                        <FormInput
                          type='text'
                          name='lastname'
                          value={formValues.lastname}
                          placeholder='Enter your last name'
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='citizenship'
                          checked={formValues.citizenship}
                          text='I am a citizen of the Republic of Turkey.'
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='half-width'>
                        <label htmlFor='identityType'>Identity Type</label>
                        <select name='identityType' id='identityType' onChange={handleChange}>
                          <option value=''>Select Identity Type</option>
                          <option value='1'>TC Identity No</option>
                        </select>
                      </div>
                      <div className='half-width'>
                        <label htmlFor='identityNumber'>Identity Number</label>
                        <FormInput
                          type='text'
                          name='identityNumber'
                          value={formValues.identityNumber}
                          placeholder='Enter your identity number'
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='three-width'>
                        <label htmlFor='day'>Date of Birth</label>
                        <select name='day' id='day' onChange={handleChange}>
                          <option value=''>Day</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='month'>&nbsp;</label>
                        <select name='month' id='month' onChange={handleChange}>
                          <option value=''>Month</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='year'>&nbsp;</label>
                        <select name='year' id='year' onChange={handleChange}>
                          <option value=''>Year</option>
                        </select>
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='three-width'>
                        <label htmlFor='country'>Phone</label>
                        <select name='country' id='country' onChange={handleChange}>
                          <option value=''>Country Code</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='operator'>&nbsp;</label>
                        <select name='operator' id='operator' onChange={handleChange}>
                          <option value=''>Operator Code</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='phone'>&nbsp;</label>
                        <FormInput
                          type='text'
                          name='phone'
                          value={formValues.phone}
                          placeholder='Enter your phone number'
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='agreeToPolicies1'
                          checked={formValues.agreeToPolicies1}
                          text='I have read and accept the KVVK Information Text and the user agreement.'
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='agreeToPolicies2'
                          checked={formValues.agreeToPolicies2}
                          text='I have read, reviewed and approve the KVVK Explicit Consent Text. I consent to the processing and transfer of my personal data within the scope of this text.'
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='agreeToPolicies3'
                          checked={formValues.agreeToPolicies3}
                          text='I accept to receive commercial electronic messages via email, phone, and electronic communication channels related to products and services within the scope of the KVVK Information Text.'
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='buttons'>
                        <FormButton type='submit' text='Create Account' onClick={handleSubmit} />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          Already have an account? <Link to='/'>Login</Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignupScreen;

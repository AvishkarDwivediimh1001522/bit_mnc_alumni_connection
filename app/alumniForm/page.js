"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
//import { submitAction } from '@/actions/form'
import Link from 'next/link'

const alumniForm = () => {
  //const { data: session } = useSession();
  const router = useRouter()
  const ref = useRef()
  const [emailError, setEmailError] = useState({ hasError: false, message: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    const mncEmailPattern = /^imh\d{5}\.\d{2,4}@bitmesra\.ac\.in$/;

    if (!mncEmailPattern.test(email)) {
      if (!email.endsWith('@bitmesra.ac.in')) {
        return { valid: false, message: 'Only @bitmesra.ac.in emails allowed' };
      }
      if (!email.startsWith('imh')) {
        return { valid: false, message: 'MNC student emails must start with "imh"' };
      }
      if (!/imh\d{5}\.\d{2,4}/.test(email.split('@')[0])) {
        return { valid: false, message: 'Invalid format. Required pattern: imhXXXXX.XX or imhXXXXX.XXXX' };
      }
      return { valid: false, message: 'Invalid email format for MNC students' };
    }
    return { valid: true, message: '' };
  };


  const checkFormValidity = () => {
    const requiredFields = [
      'name', 'orgnisation', 'job_profile', 'job_location', 'batch', 'passout_year', 'email', 'linkedin_acc', 'home_state'
    ];
    const form = ref.current;
    const allFilled = requiredFields.every(id => form[id]?.value.trim() !== '');
    setIsFormValid(allFilled && !emailError.hasError);
  };

  useEffect(() => {
    checkFormValidity();
  }, [emailError]);

  const handleEmailChange = (e) => {
    const email = e.target.value.toLowerCase();
    const validation = validateEmail(email);
    setEmailError(validation.valid ? { hasError: false, message: '' } : { hasError: true, message: validation.message });
  };

  // New combined function for the email field
  const handleEmailInput = (e) => {
    handleEmailChange(e); // validate email and update emailError state
    handleChange(e);      // update formData state for the email field
  };


  const [formdata, setFormdata] = useState({
    name: "",
    orgnisation: "",
    job_profile: "",
    job_location: "",
    //image: "",
    batch: "",
    passout_year: "",
    email: "",
    phone_number: "",
    linkedin_acc: "",
    twitter_acc: "",
    home_state: "",

  })

  // Added hander to update formData state on input change

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  // Added handler for form submission to send data to API

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send data to our Next.js API route at /api/alumni
    const response = await fetch("/api/alumni", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    if (response.ok) {
      alert("Alumni added successfully!");
      router.push("/alumniFrontend"); // Redirect to the alumni page after submission
    } else {
      alert("Error submitting form");
    }
  };



  return (<>

    <div>
      {/* <div className="text-center text-3xl mt-24 font-serif text-gray-200">
                    <div className='text-blue-400'>Welcome </div>
                    <div>{session.user.email}</div>     
                </div> */}


      <section className="text-gray-600 body-font  ">
        <div className="container w-full px-5 py-5 mx-auto flex justify-center  items-center">
          <div className="lg:w-6/12 md:w-10/12 bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
            <div className="flex flex-col justify-center items-center ">
              <h2 className="text-gray-900 text-4xl  title-font mb-5 font-serif font-[530] ">Your's profile</h2>
            </div>
            <form
              ref={ref}
              // action={submitAction} // Directly link the server-side action her7
              onSubmit={handleSubmit} // submit data to database 
              method="post" // Use POST method to securely send data
              className="flex flex-col gap-4"
              onInput={checkFormValidity}
            >
              <div className="relative mb-2">
                <label htmlFor="name" className="leading-7 text-sm text-gray-700">
                  Name <span className='text-red-600'>*</span>
                </label>
                <input
                  name="name"
                  id="name"
                  required={true}
                  onChange={handleChange} // **** ADDED ****
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                />
              </div>
              <div className="relative mb-2">
                <label htmlFor="password" className="leading-7 text-sm text-gray-700">
                  Orgnisation <span className='text-red-700'>*</span>
                </label>
                <input
                  name="organisation"
                  id="organisation"
                  required={true}
                  onChange={handleChange} // **** ADDED ****
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                  placeholder='Ex - Microsoft'
                />
              </div>
              <div className="relative mb-2">
                <label htmlFor="password" className="leading-7 text-sm text-gray-700">
                  Job Profile <span className='text-red-700'>*</span>
                </label>
                <input
                  name="job_profile"
                  id="job_profile"
                  required={true}
                  onChange={handleChange} // **** ADDED ****
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                  placeholder='Ex - Senior Software Developer'
                />
              </div>
              <div className="relative mb-2">
                <label htmlFor="password" className="leading-7 text-sm text-gray-700">
                  Job Location <span className='text-red-700'>*</span>
                </label>
                <input
                  name="job_location"
                  id="job_location"
                  required={true}
                  onChange={handleChange} // **** ADDED ****
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                  placeholder='Ex - Hyderabad'
                />
              </div>

              {/* <div className="relative mb-2">
                <label htmlFor="image" className="leading-7 text-sm text-gray-700">
                  Upload photo (Max 800KB .jpg /.png )
                </label>
                <input
                  name="image"
                  id="image"
                  required

                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => {
                    // **** ADDED: You might set formData.image to a file path or base64 string ****
                    const file = e.target.files?.[0];
                    if (file) {
                      // Validate file type
                      const validTypes = ['image/jpeg', 'image/png'];
                      if (!validTypes.includes(file.type)) {
                        e.target.value = ''; // Clear input
                        alert('Only JPG/PNG files are allowed');
                        return;
                      }

                      // Validate file size (800KB)
                      if (file.size > 800 * 1024) {
                        e.target.value = ''; // Clear input
                        alert('File size must be less than 800KB');
                        return;
                      }
                      // Example: set formData.image to the file name or handle file upload logic
                      setFormdata({ ...formdata, image: file.name });
                    }
                  }}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: .jpg, .png (Max 800KB)
                </p>
              </div> */}
              <div className="relative mb-2 flex gap-16">
                <div>
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-700">
                    Start year <span className='text-red-700'>*</span>
                  </label>
                  <input
                    name="batch"
                    id="batch"
                    required={true}
                    onChange={handleChange} // **** ADDED ****
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="number"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-700">
                    Passout year <span className='text-red-700'>*</span>
                  </label>
                  <input
                    name="passout_year"
                    id="passout_year"
                    required={true}
                    onChange={handleChange} // **** ADDED ****
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="number"
                  />
                </div>
              </div>
              <div className="relative mb-2">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-700">
                  Phone No.
                </label>
                <input
                  name="phone_number"
                  id="phone_number"
                  required
                  onChange={handleChange} // **** ADDED ****
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="number"
                />
              </div>


              <div className="relative mb-2">
                <label htmlFor="email" className="leading-7 text-sm text-gray-700">
                  MnC Student Email <span className='text-red-700'>*</span>
                </label>
                <input
                  name="email"
                  id="email"
                  required={true}
                  
                  className={`w-full bg-white rounded border ${emailError.hasError ? 'border-red-500' : 'border-gray-300'
                    } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  type="email"
                  pattern="^imh\d{5}\.\d{2,4}@bitmesra\.ac\.in$"
                  placeholder="imhXXXXX.XX@bitmesra.ac.in"
                  onChange={handleEmailInput} // Use the new combined handler
                  onBlur={handleEmailChange}
                />
                {emailError.hasError && (
                  <p className="text-red-500 text-xs mt-1">{emailError.message}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Required format: imh12345.12@bitmesra.ac.in or imh12345.1234@bitmesra.ac.in
                </p>
              </div>



              <div className="relative mb-2">
                <label htmlFor="add" className="leading-7 text-sm text-gray-700">
                  Linkedin Id <span className='text-red-700'>*</span>
                </label>
                <input
                  name="linkedin_acc"
                  id="linkedin_acc"
                  required={true}
                  onChange={handleChange} // **** ADDED ****
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                />
              </div>
              <div className="relative mb-2">
                <label htmlFor="add" className="leading-7 text-sm text-gray-700">
                  Twitter
                </label>
                <input
                  name="twitter_acc"
                  id="twitter_acc"
                  required={true}
                  onChange={handleChange} // **** ADDED ****
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                />
              </div>
              <div className="relative mb-2">
                <label htmlFor="add" className="leading-7 text-sm text-gray-700">
                  Home State <span className='text-red-700'>*</span>
                </label>
                <input
                  name="home_state"
                  id="home_state"
                  required={true}
                  onChange={handleChange} // **** ADDED ****
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="text"
                  placeholder='Ex - Madhya pradesh'
                />
              </div>

              {/* <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-6 mt-5"
              >
                Submit
              </button> */}

              <button
                type="submit"
                disabled={!isFormValid}
                className={`text-white ${isFormValid
                  ? 'bg-indigo-500 hover:bg-indigo-600'
                  : 'bg-gray-400 cursor-not-allowed'
                  } border-0 py-2 px-8 focus:outline-none rounded text-lg mb-6 mt-5`}
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>

  </>
  )
}

export default alumniForm

import React, { useState } from 'react';
import { Formik, useFormik } from 'formik';
import Swal from 'sweetalert2';

const Pro_entry = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  console.log(currentUser);
  const url = 'http://localhost:5000';
  const [selFile, setSelFile] = useState(null);

  const profile_submit = async (formdata, { resetForm }) => {
    formdata.cover = selFile.name;
    formdata.user = currentUser._id;
    console.log(formdata);
    // resetForm()

    const res = await fetch('http://localhost:5000/company/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Submission Successful'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong'
      });
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('myfile', file);
    fetch(url + '/util/uploadfile', {
      method: 'POST',
      body: fd
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
        setSelFile(file);
      }
    });
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center my-5">COMPANY PROFILE</h1>
        <div className="row">
          {/* <div className="col-md-6 my-auto"> */}
          <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" alt="" className="w-100 mb-3" width='100px' height='500px'/>
          {/* </div> */}
        </div>
        <div className="row">
          {/* <div className="mx-auto"> */}

          <Formik initialValues={{ name: '', type: '', departments: '', working: '', address: '', contact: '', email: '', user: '', backlink: '' }} onSubmit={profile_submit}>
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <label className="form-label text-dark" for="form12">
                      <b>Company Name</b>
                    </label>
                    <input type="file" onChange={uploadFile} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label text-dark" for="form12">
                      <b>Company Name</b>
                    </label>
                    <input name="name" type="text" id="form12" className="form-control mb-3" onChange={handleChange} value={values.name} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-dark" for="form12">
                      <b>Company Type</b>
                    </label>
                    <input name="type" type="text" id="form12" className="form-control mb-3" onChange={handleChange} value={values.type} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label text-dark" for="form12">
                      <b>Email</b>
                    </label>
                    <input name="email" type="email" id="form12" className="form-control mb-3" onChange={handleChange} value={values.email} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-dark" htmlFor="typePhone">
                      <b>Contact</b>
                    </label>
                    <input name="contact" type="number" id="typePhone" className="form-control mb-3" onChange={handleChange} value={values.contact} />
                  </div>
                </div>

                {/* <div className="">
                                        <label className="form-label text-dark" for="form12"><b>Name Of Departments</b></label>
                                        <input name='departments' type="text" id="form12" className="form-control mb-3" onChange={handleChange} value={values.departments} />
                                    </div> */}

                <div className="">
                  <label className="form-label text-dark" htmlFor="textAreaExample">
                    <b>Name Of Departments</b>
                  </label>
                  <textarea name="departments" className="form-control mb-3" id="textAreaExample" rows={4} onChange={handleChange} value={values.departments} />
                </div>

                <div className="">
                  <label className="form-label text-dark" htmlFor="textAreaExample">
                    <b>Address</b>
                  </label>
                  <textarea className="form-control mb-3" id="address" rows={4}  onChange={handleChange} value={values.address} />
                </div>

                <div className="">
                  <label className="form-label text-dark" htmlFor="textAreaExample">
                    <b>Description of Company</b>
                  </label>
                  <textarea className="form-control  mb-3" id="working" rows={4}  onChange={handleChange} value={values.working} />
                </div>
                <div className="">
                  <label className="form-label text-dark" htmlFor="backlink">
                    <b>Offical Link</b>
                  </label>
                  <textarea className="form-control  mb-3" id="backlink" rows={4} onChange={handleChange} value={values.backlink} />
                </div>

                <div className="mx-auto mb-5 col-md-6">
                  <button type="submit" className="btn btn-primary w-100" data-mdb-ripple-color="dark">
                    <b>Submit</b>
                  </button>
                </div>
              </form>
            )}
          </Formik>
          {/* <div className='text-center my-3'>
                            <Link to='/list'>View All Profiles</Link>
                        </div> */}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Pro_entry;

// function convertToBase64(file) {
//     return new Promise((resolve, reject) => {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(file);
//         fileReader.onload = (result) => {
//             resolve(fileReader.result)
//         };
//         fileReader.onerror = (err) => {
//             reject(err)
//         }
//     })
// }

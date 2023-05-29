import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Profile_check = () => {

    const navigate = useNavigate();

    // const fetchProfiles = async () => {
    //     const res = await fetch('http://localhost:5000/company/getall');
    //     console.log(res.status)

    //     const data = await res.json();
    //     console.log(data);
    //     setProfile(data)
    // }

    const { id } = useParams();
    // console.log(id);
    const [ProfileData, setProfileData] = useState(null)
    const [loading, setLoading] = useState(false)

    const loginSubmit = async (formdata, { resetForm, setSubmitting }) => {
        console.log(formdata)
        resetForm()
        setSubmitting(true)

        const res = await fetch('http://localhost:5000/user/authenticate', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status)
        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Login Successful'
            })
            const data = await (res.json());
            console.log(data);
            sessionStorage.setItem('user', JSON.stringify(data));
            // navigate('/homepage');
        }

    }

    const getProfileByid = async () => {
        setLoading(true);
        const res = await fetch('http://localhost:5000/company/getbyid/' + id);
        console.log(res.status);

        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setProfileData(data);
            setLoading(false);
        }
    }

    useEffect(() => {
        getProfileByid();
    }, []);



    const displayForm = () => {
        if (!loading && ProfileData) {


            return (
                <div className='container'>

                    <div className="card w-50 mx-auto mt-5">
                        <div className="card-body">
                            <h3 className="card-title text-center"><b>AUTHENTICATE</b></h3>

                            <Formik
                                initialValues={ProfileData}
                                onSubmit={loginSubmit}>
                                {({ values, handleChange, handleSubmit }) => (

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="form12">
                                                Email
                                            </label>
                                            <input type="text" id="form12" className="form-control" value={values.email} onChange={handleChange} />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="form12">
                                                Enter Password
                                            </label>
                                            <input type="password" id="password" className="form-control" />
                                        </div>

                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </form>
                                )

                                }

                            </Formik>
                        </div>
                    </div>


                </div>
            )

        }
    }











    return (

        <div className='container'>

            {/* <div className="card w-50 mx-auto mt-5">
                <div className="card-body">
                    <h3 className="card-title text-center"><b>AUTHENTICATE</b></h3>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="form12">
                            Email
                        </label>
                        <input type="text" id="form12" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="form12">
                            Enter Password
                        </label>
                        <input type="text" id="form12" className="form-control" />
                    </div>



                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>

                </div>

            </div> */}

            {displayForm()}

        </div>

    )
}


export default Profile_check
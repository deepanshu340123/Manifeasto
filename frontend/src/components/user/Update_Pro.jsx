import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Update_Pro = () => {



    const { id } = useParams();
    // console.log(id);
    const [ProfileData, setProfileData] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

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

    const updated_profile_Submit = async (formdata) => {
        console.log(formdata)

        const res = await fetch('http://localhost:5000/company/update_pro/' + id, {
            method: 'PUT',
            body: JSON.stringify(formdata),
            headers: { "Content-Type": "application/json" },
        })

        console.log(res.status);
        if (res.status === 200) {
            toast.success('User Updated Successfully');
            // navigate('/manageuser')
        }


    }





    const showUpdateForm = () => {
        if (!loading && ProfileData) {
            return (
                <div className='card mt-5'>
                    <div className="card-body">
                        <h1 className="text-center mb-3">Update your profile here</h1>

                        <Formik
                            initialValues={ProfileData}
                            onSubmit={updated_profile_Submit} >

                            {
                                ({ values, handleChange, handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>
                                        < div className="">
                                            <label className="form-label text-dark" for="form12"><b>Company Name</b></label>
                                            <input name='name' type="text" id="form12" className="form-control mb-3" onChange={handleChange} value={values.name} />
                                        </div>
                                        <div className="">
                                            <label className="form-label text-dark" for="form12"><b>Company Type</b></label>
                                            <input name='type' type="text" id="form12" className="form-control mb-3" onChange={handleChange} value={values.type} />
                                        </div>
                                        <div className="">
                                            <label className="form-label text-dark" for="form12"><b>Name Of Departments</b></label>
                                            <input name='departments' type="text" id="form12" className="form-control mb-3" onChange={handleChange} value={values.departments} />
                                        </div>
                                        <div className="">
                                            <label className="form-label text-dark" for="form12"><b>Email</b></label>
                                            <input name='email' type="email" id="form12" className="form-control mb-3" onChange={handleChange} value={values.email} />
                                        </div>
                                        <div className="">
                                            <label className="form-label text-dark" htmlFor="typePhone">
                                                <b>Contact</b>
                                            </label>
                                            <input name='contact' type="number" id="typePhone" className="form-control mb-3" onChange={handleChange} value={values.contact} />
                                        </div>

                                        <div className="">
                                            <label className="form-label text-dark" htmlFor="textAreaExample"><b>Address</b>
                                            </label>
                                            <textarea
                                                name='address'
                                                className="form-control mb-3"
                                                id="textAreaExample"
                                                rows={4}
                                                defaultValue={""}
                                                onChange={handleChange}
                                                value={values.address}
                                            />

                                        </div>
                                        <div className="">
                                            <label className="form-label text-dark" htmlFor="textAreaExample"><b>Description of Company</b>
                                            </label>
                                            <textarea
                                                name='working'
                                                className="form-control  mb-3"
                                                id="textAreaExample"
                                                rows={4}
                                                defaultValue={""}
                                                onChange={handleChange}
                                                value={values.working}
                                            />

                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 mb-3" data-mdb-ripple-color="dark"><b>Submit</b></button>
                                    </form>
                                )
                            }
                        </Formik>

                    </div>
                </div>
            )
        }
    }





    return (
        <div>

            <div className="container">
                {showUpdateForm()}
            </div>


        </div>
    )
}

export default Update_Pro
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';


const Pro_list = () => {

  const [profile, setProfile] = useState([])

  // const [imageData, setImageData] = useState([])


  const fetchProfiles = async () => {
    const res = await fetch('http://localhost:5000/company/getall');
    console.log(res.status)

    const data = await res.json();
    console.log(data);
    setProfile(data)
  }

  const filterCompanies = async (category, value) => {

    const res = await fetch('http://localhost:5000/company/getall');
    console.log(res.status)

    const data = await res.json();
    console.log(data);
    let filtered = data.filter(data => (data[category].toLowerCase().includes(value.toLowerCase())))
    console.log(filtered);
    setProfile(filtered)

  }

  //   const fetchImages = async () => {
  //     const res = await fetch('http://localhost:5000/image/getall');
  //     console.log(res.status)

  //     const data = await res.json();
  //     console.log(data);
  //     setImageData(data)
  //   }

  useEffect(() => {
    fetchProfiles();
  }, [])

  //   useEffect(() => {
  //     fetchImages();
  //   }, [])

  // const deleteProfile = async (id) => {
  //   console.log(id);
  //   const res = await fetch('http://localhost:5000/company/delete/' + id, {
  //     method: "DELETE",
  //   })
  //   console.log(res.status);
  //   if (res.status === 200) {
  //     fetchProfiles();
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Success',
  //       text: 'Profile Deleted Successfully'
  //     })
  //   }
  // }


  return (
    <div className='container'>

      <button className='btn btn-secondary mx-2 mt-3' onClick={() => { filterCompanies('type', 'sales') }}>
        Sales
      </button>

      <button className='btn btn-secondary mx-2 mt-3' onClick={() => { filterCompanies('type', 'product based') }}>
        Product Based
      </button>

      <button className='btn btn-secondary mx-2 mt-3' onClick={() => { filterCompanies('type', 'service based') }}>
        Service Based
      </button>

      <button className='btn btn-secondary mx-2 mt-3' onClick={() => { filterCompanies('type', 'manufacturing') }}>
        Manufacturing
      </button>

      <button className='btn btn-secondary mx-2 mt-3' onClick={fetchProfiles}>
        View All
      </button>

      {/* <h1 className='text-center mt-3'>ALL PROFILES HERE</h1> */}


      <div className="row">
        {profile.map((profiles) => (

          <div className="col-md-6">
            <div className="card mt-3 border border-success">
              <div className="card-body">
                <h5 className="card-title"><b>Company Name - </b>{profiles.name}</h5>
                <div>
                  <p>
                    <b>Company Type - </b>{profiles.type}
                  </p>
                </div>
                <div>
                  <p>
                    <b>Departments - </b>{profiles.departments}
                  </p>
                </div>
                <div>
                  <p>
                    <b>Description - </b>{profiles.working}
                  </p>
                </div>
                <div>
                  <p>
                    <b>Email - </b>{profiles.email}
                  </p>
                </div>
                <div>
                  <p>
                    <b>Contact - </b>{profiles.contact}
                  </p>
                </div>
                <div>
                  <p>
                    <b>Address - </b>{profiles.address}
                  </p>
                </div>


                {/* <button type="button" className="btn btn-danger" onClick={() => (deleteProfile(profiles._id))}>
              Delete Profile
            </button> */}
              </div>
            </div>
          </div>


        ))}
      </div>
      {/* {imageData.map((img) => (
        <div className="card">
          <div className="card-body">

            <img src={img.images} alt="" />

            <div>
              <button type="button" className="btn btn-primary" onClick={() => { deleteImage(img._id) }}>
                Delete Image
              </button>
            </div>
          </div>
        </div>

      ))} */}




      {/* <div className='my-5'>
        <Link to='/homepage' className='mt-3'><b>Back</b></Link>
      </div> */}

    </div>
  )
}

export default Pro_list


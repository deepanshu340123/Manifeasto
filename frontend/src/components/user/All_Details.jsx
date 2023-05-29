import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

const All_Details = () => {

    const [profile, setProfile] = useState([])
    const [feed, setFeed] = useState([])

    const fetchProfiles = async () => {
        const res = await fetch('http://localhost:5000/company/getall');
        console.log(res.status)

        const data = await res.json();
        console.log(data);
        setProfile(data)
    }

    const fetchFeedback = async () => {
        const res = await fetch('http://localhost:5000/feedback/getall');
        console.log(res.status)

        const data = await res.json();
        console.log(data)
        setFeed(data)

    }

    useEffect(() => {
        fetchProfiles();
        fetchFeedback();
    }, [])

    const deleteProfile = async (id) => {
        console.log(id);
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         const res = fetch('http://localhost:5000/company/delete/' + id, {
        //             method: "DELETE",
        //         })
        //         console.log(res.status);
        //         if (res.status === 200) {
        //             fetchProfiles();
        //             Swal.fire({
        //                 icon: 'success',
        //                 title: 'Success',
        //                 text: 'Profile Deleted Successfully'
        //             })
        //         }
        //     }
        // })
        const res = await fetch('http://localhost:5000/company/delete/' + id, {
            method: "DELETE",
        })
        console.log(res.status);
        if (res.status === 200) {
            fetchProfiles();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Profile Deleted Successfully'
            })
        }
    }

    const deleteFeedback = async (id) => {
        console.log(id)
        const res = await fetch('http://localhost:5000/feedback/delete/' + id, {
            method: "DELETE",
        })
        console.log(res.status);
        if (res.status === 200) {
            fetchFeedback();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Feedback Deleted Successfully'
            })
        }
    }




    return (

        <div className='container'>

            <h2 className="text-center mx-3">ALL PROFILES HERE</h2>

            {profile.map((profiles) => (

                <Accordion sx={{ marginTop: '20px', marginBottom: '20px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>
                            <h2>Company Name - {profiles.name}</h2>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <h4>Company Type - {profiles.type}</h4>
                        </Typography>
                        <Typography>
                            Departments - {profiles.departments}
                        </Typography>
                        <Typography>
                            Description - {profiles.working}
                        </Typography>
                        <Typography>
                            Email - {profiles.email}
                        </Typography>
                        <Typography>
                            Contact - {profiles.contact}
                        </Typography>
                        <Typography>
                            Address - {profiles.address}
                        </Typography>
                    </AccordionDetails>

                    <Button variant="contained" sx={{ marginLeft: '15px', marginBottom: '15px' }} color='error' onClick={() => (deleteProfile(profiles._id))}>Delete Profile</Button>

                    {/* {profiles.user} */}

                    <Link to={'/user/update_pro/' + profiles._id}><Button variant="contained" sx={{ marginLeft: '15px', marginBottom: '15px' }} color='success' >Update Profile</Button></Link>

                    {/* <Link to={'/profile_check/' + profiles._id}><Button variant="contained" sx={{ marginLeft: '15px', marginBottom: '15px' }} color='success' >Update Profile</Button></Link> */}


                </Accordion>

            ))}


            {/* Feedbacks */}



            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='mx-auto'><h2>ALL FEEDBACKS</h2></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {feed.map((fb) => (
                        <>
                            <h4>{fb.user.name} : </h4>
                            <p>{fb.feedback}</p>
                            <Button variant="contained" sx={{ marginLeft: '15px', marginBottom: '15px' }} color='error' onClick={() => (deleteFeedback(fb._id))}>Delete Feedback</Button>
                        </>




                    ))}
                </AccordionDetails>
            </Accordion>



        </div>

    )
}

export default All_Details
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CompanyDetails = () => {
  const { id } = useParams();

  const [companyData, setCompanyData] = useState(null);

  const getCompanyData = async () => {
    const res = await fetch('http://localhost:5000/company/getbyid/' + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setCompanyData(data);
  };

  useEffect(() => {
    getCompanyData();
  }, []);

  const displayCompanyData = () => {
    if (companyData) {
      return (
        <div className="card">
          <div className="card-body">
            <img className='w-100' src={'http://localhost:5000/' + companyData.cover} alt="" />
            <h2>{companyData.name}</h2>
            <p></p>

            <a href={companyData.backlink} target='_blank' className='btn btn-primary'>Visit Company Webiste</a>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="container">{displayCompanyData()}</div>
    </div>
  );
};

export default CompanyDetails;

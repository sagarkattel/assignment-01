'use client';
import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';
import { AiOutlinePlus } from 'react-icons/ai';
import Formmodal from './Formmodal';

const Topproduct = () => {
  const pieData = [
    ['Task', 'Hours per Day'],
    ['Basic Trees', 7],
    ['Custom Shorts Pants', 8],
    ['Super Hoodies', 9],
  ];
  // Calculate the total value for percentage calculation
  const totalValue = pieData.reduce(
    (sum , [, value]) => sum + value,
    0
  );

  // Create a custom legend label function
  const formatLegendLabel = (category, value) => {
    const percentage = ((value / totalValue) * 100).toFixed(2) + '%';
    return `${category} (${percentage})`;
  };

  const pieOptions = {
    // title: 'My Daily Activities',
    pieHole: 0.7,
    pieSliceText: 'none',
    legend: {
      position: 'labeled',
    },
    legendLabel: {
      fn: formatLegendLabel,
    },
  };

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const [localStorageData, setLocalStorageData] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [instaid, setInstaid] = useState('');
  const [ytid, setYtid] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageName = localStorage.getItem('name');
      const localStoragePhone = localStorage.getItem('phone');
      const localStorageemail = localStorage.getItem('email');
      const localStorageInstaid = localStorage.getItem('instaid');
      const localStorageYtid = localStorage.getItem('ytid');

      // Check if all required data is present in localStorage
      if (
        localStorageName &&
        localStoragePhone &&
        localStorageInstaid &&
        localStorageYtid &&
        localStorageemail
      ) {
        setLocalStorageData(true);
        setName(localStorageName);
        setEmail(localStorageemail);
        setPhone(localStoragePhone);
        setInstaid(localStorageInstaid);
        setYtid(localStorageYtid);
      } else {
        setLocalStorageData(false);
      }
    }
  }, []);
  return (
    <>
      {toggle && <Formmodal isVisible={toggle} onClose={() => setToggle(false)} />}
      <div className="h-[210px] w-full  flex flex-row">
        <div className="w-1/2 h-[328px] p-2 py-3 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
          <div className=" ">
            <div className="flex flex-row p-2">
              <div className="font-bold ">Top Products</div>
              <div className="ml-auto text-slate-500">May-June 2021</div>
            </div>
            {/* Adjust marginLeft as needed */}
            <Chart
              width={'480px'}
              height={'250px'}
              chartType="PieChart"
              loader={<div className="pl-2">Loading Chart</div>}
              data={pieData}
              options={pieOptions}
              rootProps={{ 'data-testid': '3' }}
              className="rounded-xl z-999"
            />
          </div>
        </div>
        <div
          className="w-1/2 h-[325px] border-1 p-0 rounded-xl 
                shadow-[0_3px_10px_rgb(0,0,0,0.2)] ml-[20px] pl-[20px]"
        >
          {localStorageData ? (
            <div className="flex flex-col gap-2 p-4 py-[60px] cursor-pointer">
              <div className="font-bold text-2xl">{name}</div>

              <div className="flex flex-col mt-[30px]">
                <div className="flex flex-row p-4">
                  <div className="flex flex-row">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        style={{ color: '#128c7e' }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div className="ml-3 underline">{phone}</div>
                  </div>
                  <div className="flex flex-row ml-auto">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        style={{ color: '#c13584' }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div className="ml-3 underline">{instaid}</div>
                  </div>
                </div>
                <div className="flex flex-row p-4">
                  <div className="flex flex-row">
                    <div>
                    <svg style={{ color: '#800080' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /> </svg>
                    </div>
                    <div className="underline ml-3">{email}</div>
                  </div>
                  <div className="flex flex-row ml-auto">
                    <div><svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="currentColor"
  style={{color: '#ff0000'}}
  viewBox="0 0 24 24">
  <path
    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
</svg>
</div>
                  <div className="ml-2 underline">{ytid}</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col pl-[190px] py-[130px] gap-3 ">
              <div className="rounded-full text-[#999ca0] h-14 w-[60px] bg-[#f5f5f5] px-[14px] py-[15px]">
                <button onClick={handleClick} type="button">
                  <AiOutlinePlus size={30} />
                </button>
              </div>
              <div className="text-slate-500 ml-[-6px]">Add Profile</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Topproduct;

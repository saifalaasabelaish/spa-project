import React from 'react'
import JsonData from './data.json'
function AdminDataTable() {
    const DisplayData = JsonData.map((info) => {
        return (
            <tr>
                <td>{info.no}</td>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.address}</td>
                <td>{info.phone}</td>
                <td>{info.service}</td>
                <td>{info.serviceTime}</td>
                <td>{info.pay}</td>
                
            </tr>
        )
    }
    
    )
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th> Address</th>
                        <th>Phone Number</th>
                        <th> Services Booked</th>
                        <th> Service Time</th>
                        <th>Payment Method</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">

                    {DisplayData}
                </tbody>
            </table>

        </div>
    )
}

export default AdminDataTable;

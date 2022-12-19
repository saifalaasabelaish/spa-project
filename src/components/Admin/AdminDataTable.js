import UserData from './UserData'
function AdminDataTable() {
    const DisplayData = UserData.map((info) => {
        return (
            
            <tr key={info.id}>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.address}</td>
                <td>{info.phone}</td>
                <td>{info.service}</td>
                <td>{info.serviceTime}</td>
                <td>{info.pay}</td>
                <td>
                    <button type="submit" > Delete</button>
                    <button type="submit" > Edit</button>

                </td>

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
                        <th>Actions</th>
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

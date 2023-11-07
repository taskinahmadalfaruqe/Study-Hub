

const MyAssignmentPage = () => {
    return (
        <div className="container">
            assignment my
            <div>
                <div className="flex justify-start flex-col p-1 flex-1">
                    <label htmlFor="assignmentStatus">Assignment Status:</label>
                    <select name="status" id="assignmentStatus" className="p-1 rounded-sm mt-2 focus:outline-none">
                        <option value="pending">Pending....</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MyAssignmentPage;
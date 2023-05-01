import "./index.css";

const Form = () => {
  const personalDetails = () => (
    <div>
      <h1>Personal Details</h1>
      <ul className="ul">
        <li>
          <label>Name</label>
          <input />
        </li>
        <li>
          <label>Date of Birth or Age</label>
          <input />
        </li>
        <li>
          <label>Sex</label>
          <select name="sex" id="sex">
            <option value="" disabled selected>
              Select Text
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </li>
        <li>
          <label>Mobile</label>
          <input />
        </li>
        <li>
          <label>Govt Issued ID</label>
          <select className="drop-down" name="Govt Id" id="Govt Id">
            <option value="" disabled selected>
              ID Type
            </option>
            <option value="VoterId">Voter Id</option>
            <option value="Aadhar">Aadhar</option>
            <option value="Pan">Pan Card</option>
          </select>
          <input />
        </li>
      </ul>
    </div>
  );

  const contactDetails = () => (
    <div>
      <h1>Contact Details</h1>
      <ul className="ul">
        <li>
          <label>Guardian Details</label>
          <select className="drop-down" name="guardian" id="guardian">
            <option value="" disabled selected>
              Select Type
            </option>
            <option value="Mother">Mother</option>
            <option value="Father">Father</option>
            <option value="Others">Others</option>
          </select>
          <input />
        </li>
        <li>
          <label>Email</label>
          <input />
        </li>
        <li>
          <label>Emergency Contact Number</label>
          <input />
        </li>
      </ul>
    </div>
  );

  const addressDetails = () => (
    <div>
      <h1>Address Details</h1>
      <ul className="ul">
        <li>
          <label>Address</label>
          <input />
        </li>
        <li>
          <label>State</label>
          <input />
        </li>
        <li>
          <label>City</label>
          <input />
        </li>
        <li>
          <label>Country</label>
          <input />
        </li>
        <li>
          <label>Pincode</label>
          <input />
        </li>
      </ul>
    </div>
  );

  const otherDetails = () => (
    <div>
      <h1>Address Details</h1>
      <ul className="ul">
        <li>
          <label>Occupation</label>
          <input />
        </li>
        <li>
          <label>Religion</label>
          <select className="drop-down" name="guardian" id="guardian">
            <option value="" disabled selected>
              Select Type
            </option>
            <option value="Mother">Mother</option>
            <option value="Father">Father</option>
            <option value="Others">Others</option>
          </select>
        </li>
        <li>
          <label>Marital Status</label>
          <select className="drop-down" name="guardian" id="guardian">
            <option value="" disabled selected>
              Select Type
            </option>
            <option value="Mother">Mother</option>
            <option value="Father">Father</option>
            <option value="Others">Others</option>
          </select>
        </li>
        <li>
          <label>Blood Group</label>
          <select className="drop-down" name="guardian" id="guardian">
            <option value="" disabled selected>
              Select Type
            </option>
            <option value="Mother">Mother</option>
            <option value="Father">Father</option>
            <option value="Others">Others</option>
          </select>
        </li>
        <li>
          <label>Nationality</label>
          <input />
        </li>
      </ul>
    </div>
  );

  return (
    <div className="form-bg">
      <div className="form">
        {personalDetails()}
        {contactDetails()}
        {addressDetails()}
        {otherDetails()}
      </div>
    </div>
  );
};

export default Form;

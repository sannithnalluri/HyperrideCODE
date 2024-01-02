import React,{useState} from 'react';
const Addbike = () => {
    const [formData, setFormData] = useState({
        bikename: '',
        bikebookingstatus: false,
        currentpickuptime: '0000-00-00',
        currentexpirytime: '00:00:00',
        bikeFeatures1: '',
        bikeFeatures2: '',
        bikeFeatures3: '',
        bikeImage: null,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setFormData({ ...formData, bikeImage: imageFile });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Create a FormData object to send the data, including the file
        const formDataToSend = new FormData();
    
        // Append form fields to the FormData object
        for (const key in formData) {
          formDataToSend.append(key, formData[key]);
        }
    
        try {
            console.log(formData)
          const response = await fetch(`https://hyperwave-1-c8519996.deta.app/Upload_bike_details?bikename=${formData.bikename}&bikebookingstatus=${false}&currentpickuptime=${formData.currentpickuptime}&currentexpirytime=${formData.currentexpirytime}&bikeFeatures1=${formData.bikeFeatures1}&bikeFeatures2=${formData.bikeFeatures2}&bikeFeatures3=${formData.bikeFeatures3}`, {
            method: 'POST',
            body: formDataToSend,
          });
    
          if (response.ok) {
            // Handle a successful response
            console.log('Data sent successfully');
          } else {
            // Handle errors
            console.error('Failed to send data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    return (
        <div>
            <h1>Update bike BikeInformation</h1>
            <div className='Add_bike_form'>
            <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="bikename">Bike Name:</label>
        <input type="text" id="bikename" name="bikename" value={formData.bikename} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="bikeFeatures1">Feature 1:</label>
        <input type="text" id="bikeFeatures1" name="bikeFeatures1" value={formData.bikeFeatures1} onChange={handleInputChange} />
      </div>

      <div>
        <label htmlFor="bikeFeatures2">Feature 2:</label>
        <input type="text" id="bikeFeatures2" name="bikeFeatures2" value={formData.bikeFeatures2} onChange={handleInputChange} />
      </div>

      <div>
        <label htmlFor="bikeFeatures3">Feature 3:</label>
        <input type="text" id="bikeFeatures3" name="bikeFeatures3" value={formData.bikeFeatures3} onChange={handleInputChange} />
      </div>
      <div>
         <label htmlFor="bikeImage">Bike Image:</label>
        <input type="file" id="bikeImage" name="bikeImage" onChange={handleImageChange} />
      </div>
      <button id='add_bike_button' type="submit">Submit</button>
    </form>

            </div>
        </div>
    );
}

export default Addbike;

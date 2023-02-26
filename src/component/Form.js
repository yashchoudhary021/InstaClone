import { useState } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form() {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const SubmitHandler = async (e) => {
        e.priventDefault()
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("name", name);
            formData.append("location", location);
            formData.append("description", description);
            const res = await axios.post("https://yash-instaclone-backend.onrender.com/upload", formData);            
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
        navigate("/postview")
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };
    return (<>
        <Navigation />
        <form action="#" method="POST" onSubmit={SubmitHandler}>
            <div id='first'>
                <input type="file" onChange={handleImageChange} />
            </div>
            <div>
                <input id='kkd' type="text" placeholder="Author" onChange={(e)=>setName(e.target.value)} required />
                <input type="text" placeholder="Location" onChange={(e)=>setLocation(e.target.value)} required/>
            </div>
            <div>
                <input id='dis' type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} required />
            </div>
            <button id='submit' type="submit" >Post</button>
        </form>
    </>)
}
export default Form;


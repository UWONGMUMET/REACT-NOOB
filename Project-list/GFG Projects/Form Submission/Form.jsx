import "../Form Submission/FormStyle.css";
import { useState } from "react";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState(null);
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about,
        });
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume(null);
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name*</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter First Name"
                        required
                        aria-label="First Name"
                    />
                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Last Name"
                        required
                        aria-label="Last Name"
                    />
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                        required
                        aria-label="Email"
                    />
                    <label htmlFor="contact">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Mobile Number"
                        required
                        aria-label="Contact"
                    />
                    <div className="gender-section">
                        <label>Gender*</label>
                        <label htmlFor="male">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                id="male"
                                checked={gender === "male"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Male
                        </label>
                        <label htmlFor="female">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                id="female"
                                checked={gender === "female"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Female
                        </label>
                        <label htmlFor="other">
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                id="other"
                                checked={gender === "other"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Other
                        </label>
                    </div>
                    <div className="subjects-section">
                        <label>Your Best Subject</label>
                        <label htmlFor="english">
                            <input
                                type="checkbox"
                                name="subjects"
                                id="english"
                                checked={subjects.english}
                                onChange={() => handleSubjectChange("english")}
                            />
                            English
                        </label>
                        <label htmlFor="maths">
                            <input
                                type="checkbox"
                                name="subjects"
                                id="maths"
                                checked={subjects.maths}
                                onChange={() => handleSubjectChange("maths")}
                            />
                            Maths
                        </label>
                        <label htmlFor="physics">
                            <input
                                type="checkbox"
                                name="subjects"
                                id="physics"
                                checked={subjects.physics}
                                onChange={() => handleSubjectChange("physics")}
                            />
                            Physics
                        </label>
                    </div>
                    <label htmlFor="resume">Upload Resume*</label>
                    <input
                        type="file"
                        name="resume"
                        id="resume"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                        aria-label="Upload Resume"
                    />
                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL"
                        required
                        aria-label="URL"
                    />
                    <label htmlFor="select">Select Your Choice</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="" disabled>
                            Select your answer
                        </option>
                        <optgroup label="Beginners">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>
                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Tell us about yourself"
                        required
                        aria-label="About Yourself"
                    ></textarea>
                    <div className="button-section">
                        <button type="reset" onClick={handleReset}>
                            Reset
                        </button>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </fieldset>
        </div>
    );
}

export default Form;
